import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myImg:string="assets/pic1.jpg"
  constructor() {}

  ngOnInit(): void {}

}
