import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators
} from '@angular/forms';
import {
  User
} from '../shared/user.model';
import {
  UserService
} from '../shared/user.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm:FormGroup;
  // userForm = new FormGroup({
  //   FirstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   UEmail: new FormControl('', [Validators.required, Validators.email]),
  //   Password:new FormControl('',[Validators.required])
  // });
  get f() {
    return this.userForm.controls;
  }

  msg: string;
  firstName: any;
  eMail: any;
  mobileNumber: any;
  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    //debugger;
  }

  ngOnInit(): void {
    this.createUserForm()
  }

  createUserForm() {
    //debugger;
    this.userForm = this.formBuilder.group({
      FirstName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      LastName: [''],
      Email: ['', Validators.required,Validators.email],
      Address: [''],
      MobileNumber: ['',Validators.required],
      Password: ['', Validators.required]
    });
  }

  onSubmit() {
    // console.log(this.userForm.value);
    debugger;
    if (this.userForm.valid) {
      debugger;
      const body: User = {
        FirstName: this.userForm.value.FirstName,
        LastName: this.userForm.value.LastName,
        UEmail: this.userForm.value.Email,
        UMobileNumber: this.userForm.value.MobileNumber,
        Password: this.userForm.value.Password,
        UAddress: this.userForm.value.Address,
        
        
      }
      // if(this.userForm.valid){
      //   console.log(this.userForm.value);
      // }

      this.createUserForm();
      // debugger;

      this.userService.registerUser(body)
        .subscribe((data: any) => {
          this.msg = "User Registration Successfully!";
        })
    }

  }


}
