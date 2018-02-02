import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  iconName = "ios-star-outline";
  currentRatingDefault = 0;
  currentRatingOptions = 3;
  colorToUse = "blue";
  altActiveIcon = "ios-flask";
  altInactiveIcon = "ios-flask-outline";

  constructor(public navCtrl: NavController) {}

  setNewRatingDefault(rating: number) {
    this.currentRatingDefault = rating;
  }

  setNewRatingOptions(rating: number) {
    this.currentRatingOptions = rating;
  }

}
