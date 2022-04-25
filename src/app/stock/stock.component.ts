import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedElementService } from '../shared/shared-element.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit, AfterViewInit {
  @ViewChild("item", {read: ElementRef, static: true}) item:ElementRef

  handoffDone: boolean = false

  constructor(private sharedElementService: SharedElementService, private renderer2: Renderer2) { }

  ngOnInit(): void {

  }

  async ngAfterViewInit() {
    try {
      console.log(this.item.nativeElement.getBoundingClientRect());

      await this.sharedElementService.runAnimation(this.item.nativeElement.getBoundingClientRect())
      console.log("resolved");
      this.handoffDone = true
    } catch (error) {
      console.log("rejected");
      this.handoffDone = true
      console.log(error);

    }
  }

  test (el) {
    console.log(el.getBoundingClientRect());

  }

}
