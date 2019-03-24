import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Observer, TeardownLogic } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { Chore } from '../chore';
import { ChoreService } from '../chore.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/public_api';

@Component({
  selector: 'app-chore-search',
  templateUrl: './chore-search.component.html',
  styleUrls: ['./chore-search.component.css']
})
export class ChoreSearchComponent implements OnInit {
  suggestions$: Observable<Chore[]>;
  selected: string;

  constructor(private choreService: ChoreService, private location: Location ) { }

  ngOnInit() {
    this.suggestions$ = Observable.create((observer: Observer<string>): TeardownLogic => {
      observer.next(this.selected);
    })
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      mergeMap((term: string) => this.choreService.searchChores(term))
    );
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    const chore = e.item as Chore;
    location.href = `/detail/${chore.id}`;
  }

}
