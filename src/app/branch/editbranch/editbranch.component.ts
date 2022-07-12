import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Branch
} from 'src/app/shared/branch.model';
import {
  UserService
} from 'src/app/shared/user.service';
import {
  BranchlistComponent
} from '../branchlist/branchlist.component';

@Component({
  selector: 'app-editbranch',
  templateUrl: './editbranch.component.html',
  styleUrls: ['./editbranch.component.css']
})
export class EditbranchComponent implements OnInit {

  updateBranchForm: FormGroup;
  displaySingleRecord: any = [];
  Branchid: any;
  branchname: string;
  branchnumber: string;
  msg: string;
  // branchList: Branch[]=[];
  get f() {
    return this.updateBranchForm.controls;
  }

  DisplayEditBranchDetails() {
    this.updateBranchForm = new FormGroup({
      BranchName: new FormControl(this.displaySingleRecord.BranchName),
      BranchNumber: new FormControl(this.displaySingleRecord.BranchNumber)
    })
    this.branchname = this.displaySingleRecord.Branchname;
    this.branchnumber = this.displaySingleRecord.BranchNumber;
    this.cdr.detectChanges();

  }

  constructor(public userservice: UserService, private formbuilder: FormBuilder, private cdr: ChangeDetectorRef,
    private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    debugger;
    this.createAccountForm();
    debugger;
    this.Branchid = this.route.snapshot.params['BranchId'];
    this.getSingleRecordOfBranch(this.Branchid);
  }

  getSingleRecordOfBranch(id: any): void {
    debugger;
    this.userservice.getSingleBranchDetails(id).subscribe(data => {
      this.displaySingleRecord = data;
      this.DisplayEditBranchDetails();
      // console.log('JSON Response = ', JSON.stringify(this.displaySingleRecord));
      // console.log(this.displaySingleRecord);
    })
  }

  createAccountForm() {
    debugger;
    this.updateBranchForm = this.formbuilder.group({
      BranchId: '',
      BranchNumber: ['', Validators.required],
      BranchName: ['', Validators.required],

    })
  }


  updateBranch() {
    debugger;
    if (this.updateBranchForm.valid) {
      debugger;
      const body: Branch = {
        BranchId: this.displaySingleRecord.BranchId,
        BranchNumber: this.updateBranchForm.value.BranchNumber,
        BranchName: this.updateBranchForm.value.BranchName,
      }

      // this.createAccountForm();
      // debugger;
      this.userservice.UpdateBranchData(body).subscribe((data: any) => {
        // debugger;
        //this.testData = data;
        //console.log(this.testData);
        if (data.Status == "success") {
          alert("Branch Updated Successfully!");
          this.router.navigate(['branchlist']);
        
        }
      })
    }

  }

}
