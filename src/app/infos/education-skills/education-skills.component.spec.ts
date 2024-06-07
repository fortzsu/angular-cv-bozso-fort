import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSkillsComponent } from './education-skills.component';

describe('EducationSkillsComponent', () => {
  let component: EducationSkillsComponent;
  let fixture: ComponentFixture<EducationSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
