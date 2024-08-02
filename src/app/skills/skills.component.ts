import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'fa-brands fa-angular' },
    { name: 'Java', icon: 'fa-brands fa-java' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'Node.js', icon: 'fa-brands fa-node' },
    { name: 'SQL e NoSQL', icon: 'fa-solid fa-database' },
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css3-alt' }
  ];

  currentSkill = 0;

  get prevSkillIndex() {
    return (this.currentSkill - 1 + this.skills.length) % this.skills.length;
  }

  get nextSkillIndex() {
    return (this.currentSkill + 1) % this.skills.length;
  }

  nextSkill() {
    this.currentSkill = this.nextSkillIndex;
  }

  prevSkill() {
    this.currentSkill = this.prevSkillIndex;
  }
}
