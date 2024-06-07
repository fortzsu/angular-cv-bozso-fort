import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageElementComponent } from './info-page-element.component';

describe('InfoPageElementComponent', () => {
  let component: InfoPageElementComponent;
  let fixture: ComponentFixture<InfoPageElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoPageElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
