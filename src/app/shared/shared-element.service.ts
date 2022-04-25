import { EventEmitter, Injectable } from '@angular/core';
import { GhostComponent } from '../ghost/ghost.component';

@Injectable({
  providedIn: 'root'
})
export class SharedElementService {
  sharedElement_: HTMLElement;
  sharedElementPosition_: any;
  newElem = new EventEmitter<{element: HTMLElement, data: any} | null>()
  // ghostContainer_: GhostComponent;

  constructor() { }


clearGhostContainer_() {
		this.sharedElement_ = null;
		this.sharedElementPosition_ = null;
		// this.ghostContainer_ = null;
    this.newElem.emit(null)
	}





  addSharedElement(element, cardBoundingRect) {
		this.sharedElement_ = element;
    this.sharedElementPosition_ = cardBoundingRect;
    this.sharedElement_.classList.add('shared-element');
		this.sharedElement_.style.top = `${cardBoundingRect.top}px`;
		this.sharedElement_.style.left = `${cardBoundingRect.left}px`;
		this.sharedElement_.style.height = `${cardBoundingRect.height}px`;
		this.sharedElement_.style.width = `${cardBoundingRect.width}px`;
		this.sharedElement_.style.transitionDuration = '500ms';
		// this.ghostContainer_.appendChild(this.sharedElement_);
    this.newElem.emit({element: this.sharedElement_, data: this.sharedElementPosition_})
	}






  // async runAnimation(top) {
  runAnimation({ top, left = 0 }) {
    return new Promise((resolve, reject) => {
			try {

        const verticalTravelDistance = top - this.sharedElementPosition_.top;
        const horizontalTravelDistance = left - this.sharedElementPosition_.left;
        console.log('verticalTravelDistance: ', verticalTravelDistance);
        console.log('horizontalTravelDistance: ', horizontalTravelDistance);
				// this.ghostContainer_.addEventListener('transitionend', () => {
          setTimeout(() => {
            this.sharedElement_ && this.sharedElement_.remove();
						this.clearGhostContainer_();
            // return
            return resolve(true)
					}, 500);
				// }, { once: true });
				requestAnimationFrame(() => {
					this.sharedElement_.style.transform = `translateY(${verticalTravelDistance}px) translateX(${horizontalTravelDistance}px)`;
				});
			}
			catch (e) {
        console.error(e);
				this.clearGhostContainer_();
				reject()
      }
    });
  }




}
