export class FixedDeposit {
  public customerType: string;
  public fdType: string;
  public dateOfFD: Date;
  public depositAmount: number;
  public fdTenure: string;
  public fdYears: number;
  public fdMonths: number;
  public fdDays: number;

  constructor(
    _customerType: string,
    _fdType: string,
    _dateOfFD: Date,
    _depositAmount: number,
    _fdTenure: string,
    _fdYears: number,
    _fdMonths: number,
    _fdDays: number
  ) {
    this.customerType = _customerType;
    this.fdType = _fdType;
    this.dateOfFD = _dateOfFD;
    this.depositAmount = _depositAmount;
    this.fdTenure = _fdTenure;
    this.fdYears = _fdYears;
    this.fdMonths = _fdMonths;
    this.fdDays = _fdDays;
  }
}

