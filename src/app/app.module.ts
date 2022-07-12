import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
// import {MatRadioModule} from '@angular/material/radio';
import { UserService } from './shared/user.service';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { BranchComponent } from './branch/branch.component';
import { AccountComponent } from './account/account.component';
import { BranchlistComponent } from './branch/branchlist/branchlist.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ListTransactionsComponent } from './transactions/list-transactions/list-transactions.component';
import { EditComponent } from './account/edit/edit.component';
import { AuthGuard } from './auth/auth.guard';
import { DeatailsUserComponent } from './deatails-user/deatails-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortDirective } from './directive/sort.directive';
import { EditbranchComponent } from './branch/editbranch/editbranch.component';
// import { SortDirective } from './directive/sort.directive';
// import { filter } from 'rxjs-compat/operator/filter';
// import { pipe } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    BranchComponent,
    AccountComponent,
    BranchlistComponent,
    ListAccountComponent,
    TransactionsComponent,
    ListTransactionsComponent,
    EditComponent,
    DeatailsUserComponent,
    SortDirective,
    EditbranchComponent,
    // UserRegistrationDirective,
    // SortDirective,
    // filter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
    
    
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
