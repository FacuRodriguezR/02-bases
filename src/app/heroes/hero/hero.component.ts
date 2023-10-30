import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    
    return `${this.name} - ${this.age}`;
  }


  changeHero():String {
    return this.name = 'Spiderman'

  }

  changeAge(): number {
    return this.age = 23;
  }

  resetForm() {
   this.name = 'Ironman';
    
   this.age = 45;
  }
}
