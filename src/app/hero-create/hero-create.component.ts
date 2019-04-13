import { Component, OnInit } from '@angular/core';
import { HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {

  name = ''

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  addHero() {
    this.heroService.addHero(this.name);
  }

}
