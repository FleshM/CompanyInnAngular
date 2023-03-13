import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Company } from 'src/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  protected myMap: any;
  protected company?: Company;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locaclStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(): void {
    const companyName = this.route.snapshot.paramMap.get('company');
    const companies = this.locaclStorageService.get('companies');
    for (let c of companies) {
      if (c.business_name === companyName) {
        this.company = c;
      }
    }
    if (!this.company) {
      this.router.navigate(['companies'])
    }
  }
}
