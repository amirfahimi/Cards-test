import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts=[
  {
      imageurl:'../assets/Images/omen-1.jpg',
      title:'test1',
      content:'Some quick example text to build on the card title and make up the bulk of the card',
      btnName:'btn1'
  },
  {
    imageurl:'../assets/Images/omen.jpg',
    title:'test2',
    content:'Some quick example text to build on the card title and make up the bulk of the card',
    btnName:'btn2'
  },
  {
    imageurl:'../assets/Images/OMEN.png',
    title:'test3',
    content:'Some quick example text to build on the card title and make up the bulk of the card',
    btnName:'btn3'
  }
]
getposts(){
  return this.posts;
}
}
