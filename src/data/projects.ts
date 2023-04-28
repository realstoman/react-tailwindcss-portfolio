import WebImage1 from '../images/brands/adapec.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';

export interface ProjectsData {
  id?: number,
  title?: string,
  category?: string,
  img?: any,
  ProjectHeader?: { title: string, publishDate: string, tags: string }
}

export const projectsData = [
  {
    id: 1,
    title: 'Sistema de gerenciamento de RH',
    category: 'Aplicações web',
    img: WebImage1,
    ProjectHeader: {
      title: 'Sistema de gerenciamento de RH - Asp Classico',
      publishDate: 'Ago de 2017',
      tags: 'Frontend',
    },
  },
  {
    id: 2,
    title: 'Phoenix Digital Agency',
    category: 'Mobile Application',
    img: MobileImage2,
  },
];
