import { Component, OnInit } from '@angular/core';
import { Chore } from '../chore';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-chores',
  templateUrl: './chores.component.html',
  styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {

  chore: Chore = {
    id: 1,
    name: 'Do dishes'
  };

  chores: Chore[];

  constructor(private choreService: ChoreService) { }

  ngOnInit() {
    this.loadChores();
  }

  private loadChores() {
    this.choreService.getChores().subscribe(chores => this.chores = chores);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.choreService.addChore({ name } as Chore).subscribe(chore => {
      this.chores.push(chore);
    });
  }

  delete(chore: Chore): void {
    this.chores = this.chores.filter(c => c !== chore);
    this.choreService.deleteChore(chore).subscribe();
  }

}
