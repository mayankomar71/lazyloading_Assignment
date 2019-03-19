import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mydata = Array(25);
  Loader = false;
  Heading = 'Lazy Loading';

  constructor() { }

  ngOnInit() {
  }


  @HostListener('window:scroll', ['$event']) scrollEvent(event) {

    if ((window.innerHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
      this.Loader = true;
      setTimeout(() => {
        this.Loader = false;
        this.mydata.length += 10;
      }, 1000);

    }
  }

}
