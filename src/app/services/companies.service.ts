import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { LocalStorageService } from './local-storage.service';
import { Company } from '../../company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    private http: HttpClient, 
    private localStorageService: LocalStorageService) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`https://random-data-api.com/api/company/random_company?size=5`);
  }
}
