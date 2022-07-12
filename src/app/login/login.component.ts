import {
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import {
  ThisReceiver
} from '@angular/compiler';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Login
} from '../shared/login.model';
import {
  UserService
} from '../shared/user.service';
// import { JarwisService } from '../../services/jarwis.service';
// import { TokenService } from '../../services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
   
    private userService: UserService) {
    this.createLoginForm();
  }
  get f() {
    return this.loginForm.controls;
  }
  loginForm: FormGroup;
  Message = 'plz enter correct user name and password';
  userDisplayName: any = '';

  ngOnInit(): void {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
  }

  createLoginForm() {
    // debugger;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  onLogin() {
    debugger;
    if (this.loginForm.valid) {
      const body: Login = {
        UEmail: this.loginForm.value.email,
        Password: this.loginForm.value.password
      }
      this.createLoginForm();

      this.userService.LoginUser(body)
        .subscribe((data: any) => {
          debugger;
          if (data.Status == "success") {
            localStorage.setItem('dataSource', JSON.stringify(data.Data));
            //sessionStorage.setItem('UserId', data.UserId);

            //localStorage.setItem('userDetail', data.access_token);

            this.router.navigate(['/home'])
          }
          if (data.Status == "fail" || data.Status == "empty") {
           
            alert(data.Message);
          }
        });



    }


  }
}
