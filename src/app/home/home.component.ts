import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SharedElementService } from '../shared/shared-element.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
@ViewChildren("item", {read: ElementRef}) listele:QueryList<ElementRef>

exitCardIndex: number = -1
handoffDone: boolean = false
  constructor(private router: Router, private sharedElementService: SharedElementService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  completeHandoff = () => {
			handoffDone: true
	}

  navigate(elem: HTMLElement, index: number) {
    const bRect = elem.getBoundingClientRect()
    console.log(bRect);
    const cloned = elem.cloneNode(true)
    this.sharedElementService.addSharedElement(cloned, bRect)
    this.exitCardIndex = index
    // console.log(this.listele.toArray()[0].nativeElement.getBoundingClientRect())
    // console.log(this.listele.toArray()[0].nativeElement.getBoundingClientRect())
    // this.listele.toArray().forEach(i=>{
    //   if (i.nativeElement.id == id) {
    //     console.log(id);
    //     console.log(i.nativeElement.getBoundingClientRect());
    //   } else {
    //     console.log(null);

    //   }
    // })
    // "/detail"
  }

}
