import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  protected sortParams = [
    {param: 'business_name', text: 'названию', isActive: true},
    {param: 'industry', text: 'виду деятельности', isActive: false},
    {param: 'type', text: 'типу', isActive: false}
  ]

  setParam(param: string): void {
    for (let p of this.sortParams) {
      p.param === param ? p.isActive = true: p.isActive = false;
    }
  }
}
