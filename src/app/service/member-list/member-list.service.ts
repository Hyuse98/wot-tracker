import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  private API_BASE_URL: string = environment.apiBaseUrl
  private CLAN_URL: string = environment.clanInfoUrl
  private API_KEY: string = environment.apiKey;

  private membersSource = new BehaviorSubject<any[]>([]);
  members$ = this.membersSource.asObservable();

  private clanInfoSource = new BehaviorSubject<any>(null);
  clanInfo$ = this.clanInfoSource.asObservable();

  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  private errorSource = new BehaviorSubject<string | null>(null);
  error$ = this.errorSource.asObservable();

  constructor(private http: HttpClient) {
  }

  fetchClanMembers(clanId: string) {
    this.loadingSource.next(true);
    this.errorSource.next(null);

    const url = `${this.API_BASE_URL}${(this.CLAN_URL)}?application_id=${this.API_KEY}&clan_id=${clanId}`;

    this.http.get<any>(url).subscribe({
      next: (response) => {
        if (response.status === 'ok' && response.data && Object.keys(response.data).length > 0) {

          const clanId = Object.keys(response.data)[0];
          const clan = response.data[clanId];

          this.membersSource.next(clan.members || []);

          this.clanInfoSource.next({
            clanTag: clan.tag,
            clanName: clan.name,
            clanEmblem: clan.emblems?.x195?.portal || '',
            membersCount: clan.members_count || 0
          });

          console.log('Dados do clã atualizados:', clan);
        } else {
          this.membersSource.next([]);
          this.clanInfoSource.next(null);
          this.errorSource.next('Clã não encontrado ou sem dados disponíveis');
          console.error('Erro ao carregar dados do clã');
        }
        this.loadingSource.next(false);
      },
      error: (err) => {
        this.loadingSource.next(false);
        this.errorSource.next(`Erro ao carregar dados: ${err.message}`);
        console.error(`Erro na requisição: ${err.message}`);
      }
    });
  }
}
