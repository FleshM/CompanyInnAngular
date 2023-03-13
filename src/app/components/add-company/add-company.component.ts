import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit{

  addForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.addForm = this.fb.group({
      businessName: ['', [
        Validators.required,
        Validators.maxLength(15),
      ]],
      industry: ['', Validators.required],
      presence: false
    })
  }

  changeIndustry(e: any) {
    this.industry?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  submitHandler(): void {
    this.addForm.markAllAsTouched();
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      this.router.navigate(['/companies'])
    }
  }

  get businessName() {
    return this.addForm.get('businessName');
  }

  get industry() {
    return this.addForm.get('industry');
  }

  get presence() {
    return this.addForm.get('presence');
  }
}
