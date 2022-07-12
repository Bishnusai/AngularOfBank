import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {

  constructor(private userService:UserService) { }

  transactionlist:any=[];
  p:any;
  pageSize:any=5
  ModalTitle:string;

  ngOnInit(): void {
    this.transactions_list();
  }

  transactions_list(){
    this.userService.getTransactionList().subscribe(data=>  {
      this.transactionlist=data;
    })
  }
}
