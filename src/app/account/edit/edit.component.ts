import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Account
} from 'src/app/shared/account.model';
import {
  UserService
} from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateAccountForm: FormGroup;
  displaySingleRecord: any = [];
  ModalTitle: string;
  AccountId: any;
  AccountNum: any;
  MinBal: any;
  withdrawlLim: any;
  AccBal: any;
  msg:string;
  fNameViewforEdit: any;
  bNameViewForEdit: any;


  get f() {
    return this.updateAccountForm.controls;
  }
  DisplayEditDetails() {
    this.updateAccountForm = new FormGroup({
      AccountNumber: new FormControl(this.displaySingleRecord.AccountNumber),
      MinimumBalance: new FormControl(this.displaySingleRecord.MinimumBalance),
      WithdrawlLimit: new FormControl(this.displaySingleRecord.WithdrawlLimit),
      AccountBalance: new FormControl(this.displaySingleRecord.AccountBalance),
    })
    this.AccountNum = this.displaySingleRecord.AccountNumber;
    this.MinBal = this.displaySingleRecord.MinimumBalance;
    this.withdrawlLim = this.displaySingleRecord.WithdrwaLimit;
    this.AccBal = this.displaySingleRecord.AccountBalance;
    this.fNameViewforEdit = this.displaySingleRecord.User.FirstName;
    this.bNameViewForEdit = this.displaySingleRecord.Branch.BranchName;
    this.cdr.detectChanges();
    //debugger
  }


  constructor(public userservice: UserService, private formbuilder: FormBuilder, private cdr: ChangeDetectorRef,
    private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.createAccountForm()
    // console.log("ng on init")
    // console.log(this.route.snapshot.params['AccountId'])
    // console.log(this.route.snapshot.paramMap.get('id'))
    this.AccountId = this.route.snapshot.params['AccountId'];
    this.getSingleRecordAccount(this.AccountId);
  }


  getSingleRecordAccount(id: any): void {

    this.userservice.getSingleAccountDetails(id).subscribe(data => {
      this.displaySingleRecord = data;
      this.DisplayEditDetails();

      // console.log('JSON Response = ', JSON.stringify(this.displaySingleRecord));
      // console.log(this.displaySingleRecord);
    })
  }


  createAccountForm() {
    this.updateAccountForm = this.formbuilder.group({
      AccountNumber: ['',Validators.required],
      MinimumBalance: '',
      WithdrawlLimit: '',
      AccountBalance: '',
      userBind: '',
      branchBind: ''
    })
  }


  updateAccount() {

    if (this.updateAccountForm.valid) {
      // debugger;
      const body: Account = {
        AccountId: this.displaySingleRecord.AccountId,
        UserId: this.displaySingleRecord.UserId,
        BranchId: this.displaySingleRecord.BranchId,
        AccountNumber: this.updateAccountForm.value.AccountNumber,
        MinimumBalance: this.updateAccountForm.value.MinimumBalance,
        WithdrwaLimit: this.updateAccountForm.value.WithdrawlLimit,
        AccountBalance: this.updateAccountForm.value.AccountBalance
      }

      this.createAccountForm();
      // debugger;
      this.userservice.UpdateAccountData(body).subscribe((data: any) => {
        // debugger;
        //this.testData = data;
        //console.log(this.testData);
        if (data.Status == "success") {
          alert( "Account Updated Successfully!");
          this.router.navigate(['accountlist']);
        }
      })
    }

  }
}
