import {
  Component,
  EventEmitter,
  // EventEmitter,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  CashTransaction
} from '../shared/transactions.model';
import {
  UserService
} from '../shared/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  accountDropdown: any = [];
  storeAccountCategory = "";

  isSubmitted = false;
  transactionForm: FormGroup;
  get f() {
    return this.transactionForm.controls;
  }
  msg: string;
  //for radio button
  storeWithdrawl = false;
  storeDeposit = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.GetaccountDropdown();
    this.createTransactForm();
  }

  ngOnInit(): void {}

  //for checked box select those function which is clicked and unselect which is unselected
  public unselectCheckbox(event:any, opt:any) {
    //debugger;
    // console.log(event.target.checked);
    if (opt == 'Withdrawl') {
      this.storeWithdrawl = event.target.checked;
      this.storeDeposit = false;
    }
    if (opt == 'Deposit') {
      this.storeDeposit = event.target.checked;
      this.storeWithdrawl = false;
    }
  }



  createTransactForm() {
    this.transactionForm = this.formBuilder.group({
      accountBind: ['',Validators.required],
      transactionType: '',
      TransactionsAmount: '',
      C100: '',
      C200: '',
      C500: '',
      C2000: ''
    })
  }
  //user dropdown
  GetaccountDropdown() {
    //debugger;
    this.userService.getAccountList().subscribe(data => this.accountDropdown = data);
  }

  onTransactions() {
    if (this.transactionForm.valid) {
      debugger;
      const body: CashTransaction = {
        
        AccountId: this.transactionForm.value.accountBind,
        TransactionAmount: this.transactionForm.value.TransactionsAmount,
        transactionType:this.transactionForm.value.transactionType,
        C100: this.transactionForm.value.C100,
        C200: this.transactionForm.value.C200,
        C500: this.transactionForm.value.C500,
        C2000: this.transactionForm.value.C2000,
        CashTransaction:{
          C100: this.transactionForm.value.C100,
          C200: this.transactionForm.value.C200,
          C500: this.transactionForm.value.C500,
          C2000: this.transactionForm.value.C2000,
          Count : (this.transactionForm.value.C100+this.transactionForm.value.C500+this.transactionForm.value.C100+this.transactionForm.value.C2000)
        }
      }
      this.createTransactForm();
      //debugger;
      this.userService.RegisterTransaction(body)
        .subscribe((data: any) => {
          // if (data == "success") {
          //   
          // }
          this.msg = "Transaction Successfull!";
        })
    }

  }

}
