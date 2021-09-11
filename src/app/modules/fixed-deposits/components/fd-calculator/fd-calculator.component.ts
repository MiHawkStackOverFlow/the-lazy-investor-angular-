import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerType, FDTenure, FDType } from '../../model/fd-enums';
import { FixedDeposit } from '../../model/fixed-deposit';

@Component({
  selector: 'app-fd-calculator',
  templateUrl: './fd-calculator.component.html',
  styleUrls: ['./fd-calculator.component.scss']
})
export class FdCalculatorComponent implements OnInit {
  currentDate = new Date();
  fdDetailsForm!: FormGroup;
  newFD!: FixedDeposit;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newFD = new FixedDeposit(CustomerType.Normal, FDType.Cumulative, this.currentDate, 10000, FDTenure.YearsMonthsDays, 1, 0, 0);
    this.setFormControls();
  }

  setFormControls = () => {
    this.fdDetailsForm = this.fb.group({
      customerType: [ this.newFD.customerType, Validators.required ],
      fdType: [ this.newFD.fdType, Validators.required ],
      dateOfFD: [ this.newFD.dateOfFD, Validators.required ],
      depositAmount: [ this.newFD.depositAmount, Validators.required ],
      fdTenure: [ this.newFD.fdTenure, Validators.required ],
      fdYears: [ this.newFD.fdYears ],
      fdMonths: [ this.newFD.fdMonths ],
      fdDays: [ this.newFD.fdDays, Validators.required ],
    });
  }

  invalidateForm = () => {
    Object.keys(this.fdDetailsForm.controls).forEach(field => {
      const control = this.fdDetailsForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  submit = () => {
    if (this.fdDetailsForm.valid) {
      this.newFD = this.fdDetailsForm.value;
      console.log('newFD', this.newFD);
    } else {
      this.invalidateForm();
    }
    // service call to store the data
  }
}
