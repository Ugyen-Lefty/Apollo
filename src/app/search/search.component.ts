import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: any;

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer() {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  search() {
    this.router.navigate([`search/${this.searchForm.get('search').value}`]);
  }

}
