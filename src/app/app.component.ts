import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  introJS = introJs();
  constructor() {
    this.introJS.setOptions({
      steps: [
        {
          element: '#step1',
          intro: 'Welcome to your new app!',
          position: 'bottom'
        },
        {
          element: '#step2',
          intro: "Ok, wasn't that fun?",
          position: 'right'
        },
        {
          element: '#step3',
          intro: "let's keep going",
          position: 'top'
        },
        {
          element: '#step4',
          intro: 'More features, more fun.',
          position: 'right'
        }
      ],
      showProgress: true
    });
  }

  ngOnInit(): void {
    this.introJS.start();
  }
}
