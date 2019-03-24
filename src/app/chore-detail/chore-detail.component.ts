import { Component, OnInit, Input } from '@angular/core';
import { Chore } from '../chore';
import { ActivatedRoute } from '@angular/router';
import { ChoreService } from '../chore.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chore-detail',
  templateUrl: './chore-detail.component.html',
  styleUrls: ['./chore-detail.component.css']
})
export class ChoreDetailComponent implements OnInit {

  @Input() chore: Chore;

  constructor(private route: ActivatedRoute,
              private choreService: ChoreService,
              private location: Location) { }

  ngOnInit() {
    this.loadChore();
  }

  private loadChore(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.choreService.getChore(id).subscribe(chore => this.chore = chore);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.choreService.updateChore(this.chore).subscribe(() => this.goBack());
  }

}
