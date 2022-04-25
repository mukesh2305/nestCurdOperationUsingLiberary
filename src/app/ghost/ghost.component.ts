import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedElementService } from '../shared/shared-element.service';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnInit, OnDestroy {
  @ViewChild("ghost", {read: ElementRef, static: true}) ghost:ElementRef

  sharedE: HTMLElement
  rectData: any
  subscription: Subscription

  constructor(
    private sharedElementService: SharedElementService,
   private renderer2: Renderer2,
   private router: Router
   ) {
    this.subscription = this.sharedElementService.newElem.subscribe(
      (state: {element: HTMLElement, data: any} | null) =>
      {
        if(state?.element) {
          console.log('react in ghost: ', state.data)
          this.sharedE = state.element
          this.rectData = state.data
          this.renderer2.appendChild(this.ghost.nativeElement, this.sharedE)
          this.router.navigate(["/", "detail"])
        }
    })
   }

  ngOnInit(): void {
    //   this.renderer2.appendChild(this.ghost, this.sharedE)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
