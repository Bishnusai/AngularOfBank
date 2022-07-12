import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { EditComponent } from './account/edit/edit.component';
import { ListTransactionsComponent } from './transactions/list-transactions/list-transactions.component';
import { BranchComponent } from './branch/branch.component';
import { BranchlistComponent } from './branch/branchlist/branchlist.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth/auth.guard';
import { DeatailsUserComponent } from './deatails-user/deatails-user.component';
import { EditbranchComponent } from './branch/editbranch/editbranch.component';

const routes: Routes = [
  {path:'detailsUsr',component:DeatailsUserComponent,canActivate:[AuthGuard]},

  {path:'home',component:HomepageComponent,canActivate:[AuthGuard]},
  // {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'header',component:HeaderComponent, canActivate:[AuthGuard]},
  {path:'branch',component:BranchComponent, canActivate:[AuthGuard]},
  {path:'editbranch/:BranchId',component:EditbranchComponent, canActivate:[AuthGuard]},

  {path:'account',component:AccountComponent, canActivate:[AuthGuard]},
  {path:'edit/:AccountId',component:EditComponent, canActivate:[AuthGuard]},
  {path:'branchlist',component:BranchlistComponent, canActivate:[AuthGuard]},
  {path:'accountlist',component:ListAccountComponent, canActivate:[AuthGuard]},
  {path:'transactions',component:TransactionsComponent, canActivate:[AuthGuard]},
  {path:'transactionlist',component:ListTransactionsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
