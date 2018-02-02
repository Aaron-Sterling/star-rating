# Star Rating

Star Rating component for Ionic-Angular. Show up to 5 clickabe stars, so the user can set or change a rating, for example as part of a product review. Default is 5 gold stars. Options allow changing the number, color and type of icon used.

## Sample Usage

Default Use in Template:
```
<star-rating (newRating)="setNewRating($event)"></star-rating>
```

Advanced Use in Template:
```
<star-rating    (newRating)="setNewRating($event)"
                [initialRating]="3"
                [maxStars]="4"
                [iconColor]="colorToUse"
                [activeIconName]="altActiveIcon"
                [inactiveIconName]="altInactiveIcon">
</star-rating>
```

Sample handler in ts file:
```
setNewRating(rating: number) {
    console.log(rating);
}
```

## Setup

In ```app.component.ts``` or in your page's module file, include:

```import { StarRatingComponentModule } from 'path where you put this';```

You must import ```StarRatingComponentModule``` after ```IonicModule```.

## Output: newRating

The component emits a number (from 1 to max number of stars, inclusive) when the user clicks one of the star icons.

## Optional Inputs

#### initialRating

Rating to start with. May be a number from 0 to 5 inclusive, will be turned into an integer with ```Math.floor```. Default value is 0.

#### maxStars

Total number of stars to display. May be a number from 0 to 5 inclusive, will be turned into an integer with ```Math.floor```. Default value is 5.

#### iconColor

HTML color of the stars. Default value is gold (#FFD700).

#### activeIconName

Name of ion-icon to use instead of filled-in stars. Default value is "ios-star".

#### inactiveIconName

Name of ion-icon to use instead of outlined stars. Default value is "ios-star-outline".
