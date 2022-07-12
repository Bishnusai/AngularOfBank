import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // myImg:string="assets/pic1.jpg"
  fNameViewforEdit: any;
  LoginUser:any=Login;

  details: any = localStorage.getItem('dataSource');
  
  // convert: any = localStorage.setItem('details', JSON.parse(this.details));

  name: string = ""

  constructor(private router:Router) {
    // this.LoginUser=this.loggedUser.UEmail;
  }
 
  ngOnInit(): void {
    //console.log('details', JSON.parse(this.details));
    
    var userdetails = null;
    if (this.details)
      var userdetails = JSON.parse(this.details);
    this.name = userdetails.FirstName
    // console.log(userdetails);

    // console.log(this.convert);
    
    // this.myImg;

    // this.fNameViewforEdit=this.LoginUser.UEmail;
    
  }
  logout(){
    localStorage.removeItem('dataSource');
    this.router.navigate(['/login'])
  }
  

}
