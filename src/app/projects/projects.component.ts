import { Component } from '@angular/core';

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string;
  siteLink: string;
  repoLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      image: 'assets/images/granromano.png',
      title: 'Site Gran Romano',
      description: 'Este projeto é um site corporativo desenvolvido para a empresa Gran Romano, especializada em produtos alimentícios. O site foi criado com o objetivo de fornecer informações detalhadas sobre a empresa e seus produtos, além de facilitar o contato com os clientes.',
      technologies: 'Angular, JavaScript, HTML e CSS',
      siteLink: 'https://site-gran-romano.vercel.app/',
      repoLink: 'https://github.com/ynfleozin/site-gran-romano'
    }
  ];
}
