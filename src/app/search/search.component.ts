import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: any;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer() {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  search() {
    this.api.getYoutubeVideo(this.searchForm.get('search').value).subscribe();
  }

}
