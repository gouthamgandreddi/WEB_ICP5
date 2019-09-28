import { Component } from '@angular/core';
import {Post} from './app.model';
import {MatExpansionModule} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // define list of items
    id = 4;
    posts: Post [] = [{id: 1, title: 'Ios launch', content: 'apple ios 13 launch'}, {
    id: 2,
    title: 'Ipad launch',
    content: 'Ipad pro launch'
  }];
  postContent: any;
  postTitle: any;


  // Write code to push new item   new Hero(15, 'Magneta'),
  submitNewItem(postTitle, postContent) {

    this.id++;
    const obj = {
      id: this.id,
      title: postTitle,
      content: postContent
    };
    this.posts.push(obj);
    this.postTitle = '';
    this.postContent = '';
  }

  // Write code to complete item
  completeItem() {

  }

  // Write code to delete item
  deleteItem(postId: number) {

    for (const post of this.posts) {
      if (postId === post.id) {
        this.posts.splice(this.posts.indexOf(post), 1);
        break;
      }
    }
  }

}
