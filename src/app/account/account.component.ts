import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,Validators
} from '@angular/forms';
import {
  Account
} from '../shared/account.model';
import {
  UserService
} from '../shared/user.service';
// import { Branch } from '../shared/branch.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  //for user dropdown
  userDropdown: any = [];
  storeUserCategory = "";
  // hasError:any;

  //for branching dropdown
  branchDropdown: any = [];
  storeBranchCategory = "";

  accountForm: FormGroup;

  get f() {
    return this.accountForm.controls;
  }

  // for getting branch data
  // branchDrop: FormGroup;
  //for getting user data
  // userDrop: FormGroup;
  msg: string;
  submitted:false;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    //user dropdown
    this.GetUserDropdown();
    //branch dropdown
    this.GetBranchDropdown();
    this.createAccountForm();
  }

  ngOnInit(): void {
    // if(this.submitted==false){
    //   this.submitted=true;
    // }
  }

  createAccountForm() {
    debugger;
    this.accountForm = this.formBuilder.group({
      AccountNumber: ['',Validators.required],
      MinimumBalance: ['',Validators.required],
      WithdrwaLimit: ['',Validators.required],
      AccountBalance: '',
      userBind:['', Validators.required],
      branchBind:['', Validators.required]
      
    })
  }


  //user dropdown
  GetUserDropdown() {
    //debugger;
    this.userService.getUserList().subscribe(data => this.userDropdown = data);
  }

  //branch dropdown
  GetBranchDropdown() {
    // debugger;
    this.userService.getBranchList().subscribe(data => this.branchDropdown = data);
  }

  //adding account data binding with user and branch
  onAccount() {
    
    // debugger;
    // if (this.branchDrop.valid) {
    if (this.accountForm.valid) {

      //debugger;
      const body: Account = {
        UserId: this.accountForm.value.userBind,
        BranchId: this.accountForm.value.branchBind,
        AccountNumber: this.accountForm.value.AccountNumber,
        MinimumBalance: this.accountForm.value.MinimumBalance,
        WithdrwaLimit: this.accountForm.value.WithdrwaLimit,
        AccountBalance: this.accountForm.value.AccountBalance
      }
      this.createAccountForm();
      debugger;
      this.userService.RegisterAccount(body)
        .subscribe((data: any) => {
          // if (data == "success") {
          //   
          // }
          this.msg = "Account Added Successfully!";
        })

    }
    //}
  }

}
