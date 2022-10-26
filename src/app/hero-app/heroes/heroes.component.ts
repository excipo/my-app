import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../core/hero/hero';
import { HeroService } from '../../core/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService,
    private router: Router) { }

  heroes: Hero[] = [];  
  displayedColumns: string[] = ['id', 'name', 'lastName', 'delete'];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string,lastName: string): void {
    name = name.trim();
    lastName = lastName.trim();
    if (!name) { return; }
    if (!lastName) { return; }
    this.heroService.addHero({ name, lastName } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  
  delete(id: number): void {
    this.heroes = this.heroes.filter(h => h.id !== id);
    this.heroService.deleteHero(id).subscribe();
  }
  
  rowClicked(column: any, cell: Hero) {
    if(column.columnDef === 'delete') {
      this.delete(cell.id);
    } else {
      this.router.navigateByUrl(`/detail/${cell.id}`);
    }
  }

}
