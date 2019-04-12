import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-id',
  templateUrl: './hero-id.component.html',
  styleUrls: ['./hero-id.component.css']
})
export class HeroIdComponent implements OnInit {

  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
