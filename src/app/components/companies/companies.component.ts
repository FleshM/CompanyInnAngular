import { Component, OnInit } from '@angular/core';

import { CompaniesService } from 'src/app/services/companies.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { Company, SortParam } from 'src/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{

  public isLoading: boolean = true;

  protected companies?: Company[] | null;

  protected sort: SortParam = 'business_name'
  protected sortParams = [
    {param: 'business_name', text: 'названию', isActive: true},
    {param: 'industry', text: 'виду деятельности', isActive: false},
    {param: 'type', text: 'типу', isActive: false}
  ]

  constructor(
    private companiesService: CompaniesService,
    private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.checkCompanies();
    if (!this.companies) {
      this.companies = [];
      this.getCompanies();
    }
  }

  setParam(param: string): void {
    this.sort = param as SortParam;
    for (let p of this.sortParams) {
      p.isActive = p.param === param ? true: false;
    }
    this.sortCompanies();
  }

  sortCompanies(): void {
    this.companies?.sort((a, b) => a[this.sort] > b[this.sort] ? 1 : -1);
  };

  checkCompanies(): void {
    this.companies = this.localStorageService.get('companies');
  }

  getCompanies(): void {
    this.companiesService.getCompanies()
      .subscribe(data => {
        this.isLoading = false;
        this.companies = this.companies?.concat(data);
        this.sortCompanies();
        this.localStorageService.save('companies', this.companies);
      });
  }

  updateCompanies(): void {
    this.isLoading = true;
    this.companies = [];
    this.localStorageService.remove('companies');
    this.getCompanies();
  }
}
