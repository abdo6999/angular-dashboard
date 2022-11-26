import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkMangeComponent } from './bookmark-mange.component';

describe('BookmarkMangeComponent', () => {
  let component: BookmarkMangeComponent;
  let fixture: ComponentFixture<BookmarkMangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkMangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkMangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
