import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-filtered-videos',
  templateUrl: './filtered-videos.component.html',
  styleUrls: ['./filtered-videos.component.scss']
})
export class FilteredVideosComponent implements OnInit {

  results: any;
  loading = true;
  apiKey = 'AIzaSyA1eCXG_0cGYvjEriR8dlla8h4HaYNAHMY';
  showVideoDetails = false;
  videoInfo: any;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer() {
    this.api.getYoutubeVideo(this.route.snapshot.params['query'], this.apiKey).subscribe((res: any) => {
      this.results = res['items'];
      this.loading = false;
    },
      (error) => {
        if (error.status === 403) {
          this.apiKey = 'AIzaSyBKgEs60v2Yi-EZzGGq8Bu0j8AuUr2J3gc';
          this.api.getYoutubeVideo(this.route.snapshot.params['query'], this.apiKey).subscribe((res: any) => {
            this.results = res['items'];
            this.loading = false;
          }
          );
        }
      });
  }

  getVideoDetails(res: any) {
    this.videoInfo = res;
    this.showVideoDetails = true;
  }

}
