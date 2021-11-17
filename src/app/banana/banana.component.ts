import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyBanana } from '../app.state';
import { GetNewBanana } from './state';

@Component({
    selector: 'app-banana',
    templateUrl: './banana.component.html',
    // template: `<h1> Banana Placeholder </h1>`,
    styleUrls: ['./banana.component.scss']
})
export class BananaComponent implements OnInit {
  banana$!: Observable<any>;

    title = 'My NgRx Banana App';

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
      this.newBanana();
      console.log(this.store);

      this.banana$ = this.store.pipe(select(getMyBanana));
    }

    newBanana() {
      this.store.dispatch(new GetNewBanana(null))
    }

    peelBanana() {

    }

    eatBanana() {

    }

    timeHop() {

    }
}
