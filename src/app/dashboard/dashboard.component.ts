import { Component, OnInit } from '@angular/core';
import { ChoreService } from '../chore.service';
import { Chore } from '../chore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chores: Chore[];

  constructor(private choreService: ChoreService) { }

  ngOnInit() {
    this.loadChores();
  }


  private loadChores() {
    this.choreService.getChores().subscribe(chores => this.chores = chores.slice(1, 5));
  }
}
