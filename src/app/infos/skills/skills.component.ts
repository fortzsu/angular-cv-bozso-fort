import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  languages: string[] = [
    'English - Advanced', 'German - Upper intermediate', 'Spanish - Elementary'
  ]

  technicalSkills: string[] = [
    'Java SE', 'Spring Boot', 'SQL', 'JPA', 'Angular', 'Clean code', 'Testing', 'Agile - Scrum'
  ]

  personalSkills: string[] = [
    'Strong willingness to learn','Adaptability', 'Reliability'
  ]


}
