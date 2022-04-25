import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterEvent, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedElementService } from './shared/shared-element.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'test';
  el: any
  subscription: Subscription

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sharedElementService: SharedElementService) {
    this.subscription = this.sharedElementService.newElem.subscribe((state)=> {
      if (state) {
        this.el = true
      } else {
        this.el = false
      }
      })
  }

  ngOnInit(): void {
    this.router.events.subscribe((e)=>{
      if (e instanceof NavigationEnd) {
      //  console.log(true);

      }
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
