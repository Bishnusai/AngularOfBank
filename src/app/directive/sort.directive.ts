import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  HostListener
} from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() appSort: Array < any > ;

  constructor(private targetElem: ElementRef, private renderer: Renderer2) {}
  @HostListener("click")
  sortData() {
    const sort = new Sort();
    const elem = this.targetElem.nativeElement;
    const order = elem.getAttribute("data-order");
    const type = elem.getAttribute("data-type");
    const property = elem.getAttribute("data-name");
    if (order === "desc") {
      this.appSort.sort(sort.startsort(property, order, type));
      elem.setAttribute("data-order", "asc");
    } else {
      this.appSort.sort(sort.startsort(property, order, type));
      elem.setAttribute("data-order", "desc");
    }
  }

}
