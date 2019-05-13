import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {Post} from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: string;
  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
  }

  onIncrement (index : number) {    
    this.postService.incrementLoveIts (index);
  }

  onDecrement (index : number) {
    this.postService.decrementLoveIts (index);
  }

  onDelete (post: Post) {
    this.postService.removePost(post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

  getBackgroundColor (post: Post) {
    if (this.postLoveIts > 0) {
      return 'green';
    }
    else {
      return 'red';
    }

  }


}
