import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Superhero } from './superheros';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  superheros: Superhero[]   

  constructor() {
    this.superheros = [
      { name: "Antman", power: "Shrinking; Changes size at will", rank: 12, rows: 1, cols:1},
      { name: "Black Panther", power: "superhumanly acute senses, enhanced strength, speed, agility, stamina, durability, healing, and reflexes", rank: 24, rows: 1, cols:1 },
      { name: "Captain Marvel", power: "superhuman strength, endurance, stamina, physical durability, a limited precognitive seventh sense and a perfectly amalgamated human/Kree phycology, resisitance to toxins/poisons ", rank: 10, rows: 1 , cols:1},
      { name: "Doctor Strange", power: "ability to tap into the mystical energy, manipulate forces of the universe, controls time", rank: 7, rows: 1, cols:1},
      { name: "Groot", power: "absorbs wood as food, ability to regenerate,immune to fire, controls nature",rank: 16, rows: 1, cols:1},
      { name: "Hulk", power: "Transformation, Unlimited anger, superhuman abilities", rank: 1, rows: 1 , cols:1},
      { name: "Iron Man", power: "super strength, the ability to fly, durability, and a number of weapons", rank: 13, rows: 1, cols:1},
      { name: "Scarlet Witch", power: "superhuman ability to manipulate chaos magic, supherhuman abilities", rank: 5, rows: 1, cols:1},
      { name: "Spidermans", power: "Wall-crawling, enhanced strength, speed, reflexes, durability, stamina, healing, agility, spidersense",rank: 20, rows: 1, cols:1},
      { name: "Thanos", power: "superhuman strength, speed, stamina, immortality, invulnerability, telekinesis, telepathy, vast amounts of cosmic energy", rank: 4, rows: 1, cols:1},
      { name: "Thor", power: "superhuman strength, endurance, quest for battle, & resistance to ingury, weilds enchanted hammer(Mjolnir), master of thunder and lightning ", rank: 2, rows: 1, cols:1},
      { name: "Vision", power: "superhuman senses, superhuman stamina, reflexes, speed, agility, strength, superhuman analytical capabilities, ability to process information and make calculations with superhuman speed and accuracy", rank: 17, rows: 1, cols:1}
    ];
  }
}