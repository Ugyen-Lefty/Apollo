import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredVideosComponent } from './filtered-videos.component';

describe('FilteredVideosComponent', () => {
  let component: FilteredVideosComponent;
  let fixture: ComponentFixture<FilteredVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
