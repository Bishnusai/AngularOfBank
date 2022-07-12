import {
  Component,
  OnInit,
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  UserService
} from 'src/app/shared/user.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})


export class ListAccountComponent implements OnInit {

  constructor(private userService: UserService) {}
  p: any;
  accountPageSize: number = 5;
  accountlist: any = [];
  searchByAcc: any = this.accountlist.AccountNumber
  
  ModalTitle: string;
  act: any;
  name: string;
  @Pipe({
    name: 'filter'
  })
  searchTerm: string = "";
  direction: string = "asc";
  column: string = "first";
  type: string = "string";
  ngOnInit(): void {

    this.account_list();
    
  }

  setSortParams(param: any) {
    this.direction = param.dir;
    this.column = param.col;
    this.type = param.typ;
  }
  account_list() {
    this.userService.getAccountList().subscribe(data => {
      this.accountlist = data;
    })
  }
  EditAndUpdate(obj: any) {
    this.act = obj;
  }

  deleteAccount(account: any) {
    if (confirm('are you sure ?>')) {
      debugger;
      const body = {

        AccountId: account.AccountId,
        AccountNumber: account.AccountNumber,
        MinimumBalance: account.MinimumBalance,
        WithdrwaLimit: account.WithdrwaLimit,
        AccountBalance: account.AccountBalance
      }
      this.userService.deleteAccount(body).subscribe((data: any) => {
        if (data.Status == "success") {
          this.account_list();
          alert(data.Message);
        }
      })
    }

  }

}
