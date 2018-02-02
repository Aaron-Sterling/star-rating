import { Component, Input, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import * as defaults from './defaults';
import { normalizeNumberOfStars, normalizeString } from './helper-functions';

/*
  Star Rating component
  by Aaron Sterling
  https://github.com/Aaron-Sterling/star-rating

  Main function:
    Input: a number from 0 to 5
    Output: a number from 1 to 5 once the user clicks on a star icon to select a rating

  Options:
    maxStars: wil show from 0 to 5 stars, default = 5
    activeIconName: name of active icon, default = 'ios-star'
    inactiveIconName: name inactive icon, default = 'ios-star-outline'
    iconColor: color of icons, default color is gold
*/

@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.html'
})
export class StarRatingComponent implements OnInit, OnDestroy {

  private numStarsStream: BehaviorSubject<number> = new BehaviorSubject<number>(defaults.INITIAL_RATING);
  numberOfStars = defaults.INITIAL_RATING;
  numberOfStarsListener = new Subscription();

  private _activeIconName = defaults.ACTIVE_ICON_NAME;
  private _inactiveIconName = defaults.INACTIVE_ICON_NAME;
  private _iconColor = defaults.ICON_COLOR;

  private _maxStars = defaults.MAX_NUMBER_OF_STARS;

  // process inputs

  @Input()
    set initialRating(initialRating: number) {
      this.numStarsStream.next(normalizeNumberOfStars(initialRating, defaults.INITIAL_RATING));
    }
    get initialRating(): number {
      return this.numStarsStream.getValue();
    }

  @Input()
    set activeIconName(activeIconName: string) {
      this._activeIconName = normalizeString(activeIconName, defaults.ACTIVE_ICON_NAME);
      console.log(this._activeIconName);
    }
    get activeIconName(): string {
      return this._activeIconName;
    }

  @Input()
    set inactiveIconName(inactiveIconName: string) {
      this._inactiveIconName = normalizeString(inactiveIconName, defaults.INACTIVE_ICON_NAME);
    }
    get inactiveIconName(): string {
      return this._inactiveIconName;
    }

  @Input()
    set maxStars(maxStars: number) {
      this._maxStars = normalizeNumberOfStars(maxStars, defaults.MAX_NUMBER_OF_STARS);
      console.log(this._maxStars);
    }
    get maxStars(): number {
      return this._maxStars;
    }

  @Input()
    set iconColor(iconColor: string) {
      this._iconColor = normalizeString(iconColor, defaults.ICON_COLOR);
    }
    get iconColor(): string {
      return this._iconColor
    }
    get iconColorExpression(): object {
      return {'color': this.iconColor};
    }

  // emit output

  @Output() newRating: EventEmitter<number> = new EventEmitter<number>();

  // main logic of the component starts here

  constructor() {}

  ngOnInit() {
    this.numberOfStarsListener = this.numStarsStream.subscribe(num => this.numberOfStars = num);
  }

  ngOnDestroy() {
    this.numberOfStarsListener.unsubscribe();
  }

  starIconName(starNumber: number): string {
    let returnString: string = '';
    let valueToTest = this.initialRating - starNumber;
    if (valueToTest < 1) {
      returnString = this.inactiveIconName;
    }
    else if (valueToTest >= 1) {
      returnString = this.activeIconName;
    }
    return returnString;
  }

  emitRating(rating: number) {
    this.numStarsStream.next(rating);
    this.newRating.emit(rating);
  }

}
