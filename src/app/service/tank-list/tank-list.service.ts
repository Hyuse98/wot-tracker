import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, map, switchMap, forkJoin, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TankListService {

  private API_TANK_URL: string = "https://api.worldoftanks.com/wot/encyclopedia/vehicles/";
  private API_URL: string = "https://api.worldoftanks.com/wot/account/tanks/";
  private API_KEY: string = "5c96e3e41e057bbe31261ac1aaea86d0";
  private tier10TankIds: Set<number> = new Set();

  private tanksSource = new BehaviorSubject<any[]>([])
  tanks$ = this.tanksSource.asObservable();

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

  getTanksByMemberId(playerId: string): void {
    this.http.get<any>(`${this.API_URL}?application_id=${this.API_KEY}&fields=tank_id&account_id=${playerId}`)
      .subscribe(response => {
        const data = response?.data || {};
        const tankIds = (data[playerId] || [])
          .map((entry: any) => entry.tank_id)
          .filter((tankId: any) => this.tier10TankIds.has(tankId));

        if (tankIds.length === 0) {
          this.tanksSource.next([]);
          return;
        }

        const batchSize = 100;
        const requests = [];
        for (let i = 0; i < tankIds.length; i += batchSize) {
          const batch = tankIds.slice(i, i + batchSize).join('%2C+');
          requests.push(this.http.get<any>(`${this.API_TANK_URL}?application_id=${this.API_KEY}&tank_id=${batch}&fields=name%2C+nation%2C+tier`));
        }

        // Fazer as requisições e atualizar o BehaviorSubject
        Promise.all(requests.map(req => req.toPromise())).then(responses => {
          const tanks = responses
            .flatMap(response => Object.values(response?.data || {}))
            .map((tank: any) => ({
              tier: tank.tier,
              name: tank.name,
              nation: tank.nation
            }));

          this.tanksSource.next(tanks);
          console.log(this.tanks$)
        });
      });
  }

}
