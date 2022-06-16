import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  styleTitle: any;
  styleDescription: any;
  styleSpans: any;
  styleBackground: any;

  constructor() { }

  ngOnInit(): void {
  }


  hover() {


/*     this.styleTitle = {
      fontSize: '3em',
      backgroundColor: 'ivory',
      color: 'maroon'
    } */
  }
  mouseEnter() {
    this.styleTitle = {
      fontSize: '7rem',
      //'box-shadow': ' rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      'cursor': 'pointer',
    }




    this.styleBackground = {
    }

    let a = document.getElementsByClassName('a');
    a[0].setAttribute("style", "font-size:9rem")
    a[1].setAttribute("style", "font-size:9rem")
    
    let b = document.getElementsByClassName('b');
    b[0].setAttribute("style", "font-size:6.25rem")

  }

  mouseLeave() {
    this.styleTitle = {
      fontSize: '6rem',
    }


    let a = document.getElementsByClassName('a');
    a[0].setAttribute("style", "font-size:8rem")
    a[1].setAttribute("style", "font-size:8rem")

    let b = document.getElementsByClassName('b');
    b[0].setAttribute("style", "font-size:5.25rem")
  }

}
