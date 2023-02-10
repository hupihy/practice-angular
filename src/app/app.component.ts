import {Component, Input} from '@angular/core';

export interface Post{
  title:string
  text:string
  id?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts:Post[]=[
    {title:'матьебал', text:'1231231', id:1},
    {title:'zxcgouhl', text:'rfrjq ghtrhfcysq ltym ', id:2},
    {title:'lbvf cvkbmhbyjd ', text:'1dfsdfsdfs', id:3},
    {title:'мать', text:'lorem10', id:4},
  ]


}

