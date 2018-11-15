import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderMessageComponent } from './placeholder-message.component';

describe('PlaceholderMessageComponent', () => {
  let component: PlaceholderMessageComponent;
  let fixture: ComponentFixture<PlaceholderMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
