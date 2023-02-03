import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  hero: Hero = {
    superkraft: 'Kochen',
    name: "Big Boy"
  };

  
};
