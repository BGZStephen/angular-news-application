import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainstreamNewsComponent } from './mainstream-news.component';

describe('MainstreamNewsComponent', () => {
  let component: MainstreamNewsComponent;
  let fixture: ComponentFixture<MainstreamNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainstreamNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainstreamNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
