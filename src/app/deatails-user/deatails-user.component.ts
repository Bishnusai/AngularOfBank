import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deatails-user',
  templateUrl: './deatails-user.component.html',
  styleUrls: ['./deatails-user.component.css']
})
export class DeatailsUserComponent implements OnInit {

  email:string=''
  firstName:string='';
  mobile:any
  address:any 

  details: any=localStorage.getItem('dataSource');
  constructor( private router:Router) { }

  ngOnInit(): void {
    var userdetails = null;
    if (this.details)
      var userdetails = JSON.parse(this.details);
    this.firstName = userdetails.FirstName,
    this.email = userdetails.UEmail,
    this.mobile=userdetails.UMobileNumber,
    this.address=userdetails.UAddress
    // console.log(this.address);

  }

}
