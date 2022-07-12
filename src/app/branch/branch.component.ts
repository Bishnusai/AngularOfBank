import {
  Component,
  OnInit
} from '@angular/core';
import {
  UserService
} from '../shared/user.service';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from '@angular/forms';
import {
  Branch
} from '../shared/branch.model';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branchForm: FormGroup;
  msg: string;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {}
  
  get f() {
    return this.branchForm.controls;
  }
  ngOnInit(): void {
    this.createBranchForm();
  }

  createBranchForm() {
    //debugger;
    this.branchForm = this.formBuilder.group({
      BranchName: ['', Validators.required],
      BranchNumber: ['', Validators.required]
    });
  }

  onBranch() {
    // debugger;
    if (this.branchForm.valid) {
      const body: Branch = {
        BranchId:this.branchForm.value.BranchId,
        BranchName: this.branchForm.value.BranchName,
        BranchNumber: this.branchForm.value.BranchNumber,
      }
      this.createBranchForm();
      // debugger;

      this.userService.RegisterBranch(body)
        .subscribe((data: any) => {
          // if (data == "success") {
          //   
          // }
          this.msg = "Branch Added Successfully!";
        })
    }

  }
}
