import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, map, switchMap, forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TankListService {

  private API_TANK_URL: string = "https://api.worldoftanks.com/wot/encyclopedia/vehicles/";
  private API_URL: string = "https://api.worldoftanks.com/wot/account/tanks/";
  private API_KEY: string = "5c96e3e41e057bbe31261ac1aaea86d0";
  private tier10TankIds: Set<number> = new Set();

  private tanksIdSource = new BehaviorSubject<any[]>([])
  tanks$ = this.tanksIdSource.asObservable();

  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  private errorSource = new BehaviorSubject<string | null>(null);
  error$ = this.errorSource.asObservable();

  constructor(private http: HttpClient) {
  }

  initializeTier10Tanks(): void {
    this.http.get<any>(`${this.API_TANK_URL}?application_id=${this.API_KEY}&tier=10&fields=tank_id`)
      .subscribe(response => {

        const data = response?.data || {};
        const tanksArray = Object.values(data).flat();
        this.tier10TankIds = new Set(tanksArray.map((tank: any) => tank.tank_id));
        console.log('Lista de tanks Tier 10 carregada:', this.tier10TankIds);
      });
  }

  getTanksByMemberId(playerId: string): Observable<any[]> {
    return this.http.get<any>(`${this.API_URL}?application_id=${this.API_KEY}&fields=tank_id&account_id=${playerId}`).pipe(
      switchMap(response => {
        const data = response?.data || {};
        const tankIds = (data[playerId] || [])
          .map((entry: any) => entry.tank_id)
          .filter((tankId: any) => this.tier10TankIds.has(tankId)); // Filtra apenas Tier 10

        if (tankIds.length === 0) return [];

        const batchSize = 100;
        const requests = [];
        for (let i = 0; i < tankIds.length; i += batchSize) {
          const batch = tankIds.slice(i, i + batchSize).join('%2C+');
          requests.push(this.http.get<any>(`${this.API_TANK_URL}?application_id=${this.API_KEY}&tank_id=${batch}&fields=name%2C+nation%2C+tier`));
        }

        return forkJoin(requests).pipe(map(responses => responses.flat()));
      })
    );
  }
}
