import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyBanana } from '../app.state';
import { EatBanana, GetNewBanana, PeelBanana } from './state';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  // template: `<h1> Banana Placeholder </h1>`,
  styleUrls: ['./banana.component.scss'],
})
export class BananaComponent implements OnInit {
  banana$!: Observable<any>;

  title = 'NgRx Banana App';

  constructor(private store: Store<AppState>) {
    this.newBanana();
    this.banana$ = this.store.select(getMyBanana);
    }

  ngOnInit() {}

  newBanana() {
    this.store.dispatch(new GetNewBanana(null));
  }

  peelBanana() {
    this.store.dispatch(new PeelBanana(null));
  }

  eatBanana() {
    this.store.dispatch(new EatBanana(3));
  }

}
