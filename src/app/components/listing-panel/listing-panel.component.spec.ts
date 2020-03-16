import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPanelComponent } from './listing-panel.component';

describe('ListingPanelComponent', () => {
  let component: ListingPanelComponent;
  let fixture: ComponentFixture<ListingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
