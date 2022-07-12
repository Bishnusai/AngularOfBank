import { Component,OnInit} from '@angular/core';
import { UserService} from 'src/app/shared/user.service';

@Component({
  selector: 'app-branchlist',
  templateUrl: './branchlist.component.html',
  styleUrls: ['./branchlist.component.css']
})
export class BranchlistComponent implements OnInit {

  constructor(private userService: UserService) {}
  p:any;//
  pageSize:number=5;
  branchList: any = [];
  branchNameForSearch:string=this.branchList.branchName;
  branchNumberForSearch:string=this.branchList.branchNumber;
  // collection:any[]=[{itme:"sambhu",age:23},{itme:"hari",age:23},{itme:"nath",age:23},{itme:"kalyan",age:23}];
  ModalTitle: string;

  ngOnInit(): void {
    this.branch_list();
  }
  branch_list() {
    this.userService.getBranchList().subscribe(data => {
      this.branchList = data;
    })
  }

  deleteBranch(branch: any) {
    if (confirm('are you sure ?>')) {
      debugger;
      const body = {
        BranchId: branch.BranchId,
        BranchNumber: branch.BranchNumber,
        BranchName: branch.BranchName,
        
      }
      this.userService.deleteBranch(body).subscribe((data: any) => {
        debugger;
        if (data.Status == "success") {
          this.branch_list();
          alert(data.Message);
        }
      })
    }

  }
}
