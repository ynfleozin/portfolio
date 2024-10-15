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
      siteLink: 'https://granromano.com.br/',
      repoLink: ''
    },
    {
      image: 'assets/images/shtecnologia.png',
      title: 'Site SH Tecnologia',
      description: 'Este projeto é um site desenvolvido para a empresa SH Tecnologia, do setor de tecnologia. O objetivo do site é apresentar os produtos e serviços da empresa, proporcionando uma experiência de usuário intuitiva e responsiva.',
      technologies: 'Angular, JavaScript, HTML e CSS',
      siteLink: '',
      repoLink: 'https://github.com/ynfleozin/site-shtecnologia'
    }
  ];
}
