import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  topTracks: any;
  loading = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.api.getTopTracks().subscribe(res => {
      this.topTracks = res;
      this.loading = false;
    });
  }

}
