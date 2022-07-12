import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/src/operators';
import 'rxjs/internal/operators/map';
import { User } from './user.model';
import { Login } from './login.model';
import { Branch } from './branch.model';
import { Account } from './account.model';
import { CashTransaction } from './transactions.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  //mvc root path
  readonly rootUrl = 'http://localhost:63382';

  constructor(private http: HttpClient) { }
  registerUser(user: User) {

    //mvc api path
    return this.http.post(this.rootUrl + '/api/BankingApi/RegisterUserInApi', user)//
  }

  LoginUser(user: Login) {
     debugger;
    return this.http.post(this.rootUrl + '/api/BankingApi/LoginUser', user);
  }

  RegisterBranch(branch: Branch) {
    return this.http.post(this.rootUrl + '/api/BankingApi/AddBranchApi', branch)
  }

  RegisterAccount(account: Account) {
    return this.http.post(this.rootUrl + '/api/BankingApi/AddAccountApi', account)
  }

  getBranchList(): Observable<any[]> {
    //debugger;
    return this.http.get<any>(this.rootUrl + '/api/BankingApi/BranchListApi');
  }
  getSingleBranchDetails(BranchId: any): Observable<any> {
    //debugger;
    return this.http.get(this.rootUrl + `/api/BankingApi/GetSingleDetailBranchApi/${BranchId}`)
    // debugger;
  }

  UpdateBranchData(branch: Branch) {
    //debugger;
    return this.http.put(this.rootUrl + '/api/BankingApi/BranchUpdateApi', branch);
  }
  deleteBranch(branch: Branch){
    debugger;
    return this.http.post(this.rootUrl + '/api/BankingApi/delBranchApi',branch);
  }
 
  getUserList(): Observable<any[]> {
    //debugger;
    return this.http.get<any>(this.rootUrl + '/api/BankingApi/UserListApi');
  }

  getAccountList(): Observable<any[]> {
    return this.http.get<any>(this.rootUrl + '/api/BankingApi/AccountListApi');
  }
 
  getSingleAccountDetails(AccountId: any): Observable<any> {
    //debugger;
    return this.http.get(this.rootUrl + `/api/BankingApi/GetSingleDetailAccountApi/${AccountId}`)
    // debugger;
  }

  UpdateAccountData(account: Account) {
    //debugger;
    return this.http.put(this.rootUrl + '/api/BankingApi/AccountUpdateApi', account);
  }
 

  RegisterTransaction(transact: CashTransaction) {
    //debugger;
    return this.http.post(this.rootUrl + '/api/BankingApi/AddTransactionApi', transact)
  }


  getTransactionList(): Observable<any[]> {
    return this.http.get<any>(this.rootUrl + '/api/BankingApi/TransactionListApi');

  }

  deleteAccount(account: Account){
    debugger;
    return this.http.post(this.rootUrl + '/api/BankingApi/delAccountApi',account)
  }

}