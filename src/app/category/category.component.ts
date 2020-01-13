import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  posts: Array<Post>;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.loadPosts();
  }
  loadPosts(){
    this.postService.loadPosts().subscribe(
        response => {
            this.posts = response;
        }
    );
}
}
