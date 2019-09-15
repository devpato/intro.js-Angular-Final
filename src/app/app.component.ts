import { Component, OnInit } from '@angular/core';
import introJS from 'intro.js/intro.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    introJS().start();
  }
}
