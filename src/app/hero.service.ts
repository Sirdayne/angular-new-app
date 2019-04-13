import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const hero = HEROES.find(h => h.id === id)
    return of(hero);
  }

  addHero(name: string): void {
    const id = HEROES.length + 11;
    const hero: Hero = {
      id,
      name
    };
    HEROES.push(hero);
    this.messageService.add(`HeroService: added hero id=${id};name=${name}`);
  }

  deleteHero(id: number): void {
    const index = HEROES.findIndex(h => h.id === id);
    HEROES.splice(index, 1);
    this.messageService.add(`HeroService: removed hero id=${id};`);
  }

  constructor(private messageService: MessageService) { }
}
