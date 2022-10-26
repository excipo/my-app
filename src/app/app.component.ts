import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router) {
  }
  links = ['dashboard', 'heroes'];
  title = 'Tour of Heroes';
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  dash= '/'
  goTo(path: string) {
    var patho=this.dash.concat(path.toString())
    this.router.navigateByUrl(patho);
  }
}