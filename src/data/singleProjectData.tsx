// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
import Adapec from '../images/brands/adapec.jpg'
import React, { ReactElement } from "react";

export interface SingleProjectData {
  id: number;
  ProjectHeader: { title: string, publishDate: string, tags: string },
  ProjectImages: { id: number, title: string, img: any }[],
  ProjectInfo: {
    ClientHeading: string,
    CompanyInfo: {
      id: number,
      title: string,
      details: string,
    }[],
    ObjectivesHeading: string,
    ObjectivesDetails: string;
    Technologies: {
      title: string,
      techs: string[],
    }[],
    ProjectDetailsHeading: string,
    ProjectDetails: {
      id: number,
      details: string;
    }[],
    SocialSharingHeading?: string,
    SocialSharing?: {
      id: number,
      name: string,
      icon: ReactElement<any, any>,
      url: string,
    }[],
  },
  RelatedProject?: {
    title: string,
    Projects: {
      id: number,
      title: string,
      img: any,
    }[],
  }
}

export const projectsData: SingleProjectData[] = [
  {
    id: 1,
    ProjectHeader: {
      title: 'Sistema de gerenciamento de RH',
      publishDate: 'Ago de 2017',
      tags: 'Monolito | Backend | Frontend | Asp Clássico | CSS | JavaScript | HTML',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Sistema de gerenciamento de RH',
        img: Adapec,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Sobre',
      CompanyInfo: [
        {
          id: 1,
          title: 'Nome',
          details: 'Agência de Defesa Agropecuária do estado do Tocantins',
        },
        {
          id: 2,
          title: 'Atuação',
          details: 'Desenvolvedor Fullstack Asp Classico',
        },
      ],
      ObjectivesHeading: 'Objetivo',
      ObjectivesDetails:
        'Refazer o sistema de gerenciamento de recursos humanos, trazendo mais facilidade e contornando bugs e problemas.',
      Technologies: [
        {
          title: 'Tecnologias e Ferramentas',
          techs: [
            'HTML',
            'CSS',
            'JavaScript',
            'Asp Classic',
            'Css',
            'Bootstrap',
          ],
        },
      ],
      ProjectDetailsHeading: 'Desafio',
      ProjectDetails: [
        {
          id: 1,
          details:
            'De início, quando fui contratado para o cargo, não sabia ao certo com o que iria trabalhar,' +
            ' mas sabia que era como programador. Foi o primeiro emprego que consegui na área, era um contrato com estado.',
        },
        {
          id: 2,
          details:
            'Na época, estava cursando o 5 período de Ciência da computação e nunca havia trabalhado com Asp Classic,' +
            ' até o momento não sabia nem da existência dessa linguagem (sendo bem semelhante com PHP). Mas topei e comecei a trabalhar.',
        },
        {
          id: 3,
          details:
            'A ideia geral era reestruturar um projeto legado, este que era escrito em C#. No ' +
            'início, eu não tinha noção de praticamente nada com relação ao desenvolvimento do software,' +
            ' a única coisa que sabia era: eu preciso aprender Asp Classico.',
        },
        {
          id: 4,
          details:
            'Depois de muita dor de cabeça, noites sem dormir direito e aprendendo' +
            ' tudo sozinho eu começava a entender a linguagem e as suas nuances. Então' +
            ' comecei a reestruturar o projeto. Foram cerca de 6 meses entre aprender a linguagem, desenvolver o projeto e a entrega.',
        },
        {
          id: 4,
          details:
            'Falando um pouco mais sobre o sistema, era um monolito (Backend + Frontend) tudo junto,' +
            ' sem framework (não me orgulho muito disso, mas foi o que consegui fazer sem orientação e ' +
            'sob pressão para entregar o sistema pronto) usando um banco de dados existente modelado em SQL. O sistema era hospedado numa maquina Windows Server que por vezes dava pau.',
        },
        {
          id: 5,
          details:
            'Algumas curiosidades: não existia versionamento de código, o que era uma coisa negativa tendo em' +
            ' vista que fomos atacados mais de uma vez por ransomware (sim eu perdi todo meu' +
            ' trabalho e tive que refazer algumas features que ja tinha implementando); não existia padrão ou boas práticas de implementação de código; segurança? ...',
        },
      ],
    },
    RelatedProject: {
      title: 'Projetos relacionados',
      Projects: [
        {
          id: 1,
          title: 'Sistema de gerenciamento de patrimônio',
          img: Adapec,
        },
      ],
    },
  },
  {
    id: 2,
    ProjectHeader: {
      title: 'Sistema de gerenciamento de patrimônio',
      publishDate: 'Ago de 2017',
      tags: 'Monolito | Backend | Frontend | Asp Clássico | CSS | JavaScript | HTML',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Sistema de gerenciamento de patrimônio',
        img: Adapec,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Sobre',
      CompanyInfo: [
        {
          id: 1,
          title: 'Nome',
          details: 'Agência de Defesa Agropecuária do estado do Tocantins',
        },
        {
          id: 2,
          title: 'Atuação',
          details: 'Desenvolvedor Fullstack Asp Classico',
        },
      ],
      ObjectivesHeading: 'Objetivo',
      ObjectivesDetails:
        'Desenvolver um sistema para melhorar a entrada e saída de equipamentos do setor de manutenção.',
      Technologies: [
        {
          title: 'Tecnologias e Ferramentas',
          techs: [
            'HTML',
            'CSS',
            'JavaScript',
            'Asp Classic',
            'Css',
            'Bootstrap',
          ],
        },
      ],
      ProjectDetailsHeading: 'Desafio',
      ProjectDetails: [
        {
          id: 1,
          details:
            'O sistema foi criado devido uma demanda relacionada ao gerenciamamento de entrada e saida de patrimónios, foi desenvolvido em cerca de 2 meses, usando basicamente a mesma stack do sistema de RH.',
        },
      ],
    },
    RelatedProject: {
      title: 'Projetos relacionados',
      Projects: [
        {
          id: 1,
          title: 'Sistema de gerenciamento de RH',
          img: Adapec,
        },
      ],
    },
  },
  {
    id: 3,
    ProjectHeader: {
      title: 'Sistema de gerenciamento de RH',
      publishDate: 'Ago de 2017',
      tags: 'Frontend',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Kabul Project Management UI',
        img: Image1,
      },
      {
        id: 2,
        title: 'Kabul Project Management UI',
        img: Image2,
      },
      {
        id: 3,
        title: 'Kabul Project Management UI',
        img: Image3,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        {
          id: 1,
          title: 'Name',
          details: 'Company Ltd',
        },
        {
          id: 2,
          title: 'Services',
          details: 'UI Design & Frontend Development',
        },
        {
          id: 3,
          title: 'Website',
          details: 'https://company.com',
        },
        {
          id: 4,
          title: 'Phone',
          details: '555 8888 888',
        },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
            'TailwindCSS',
            'AdobeXD',
          ],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details:
            'De início, quando fui contratado para o cargo não sabia ao certo com o que iria trabalhar.',
        },
        {
          id: 2,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
        },
        {
          id: 3,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
        },
        {
          id: 4,
          details:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
        },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        {
          id: 1,
          title: 'Mobile UI',
          img: Image4,
        },
        {
          id: 2,
          title: 'Web Application',
          img: Image5,
        },
        {
          id: 3,
          title: 'UI Design',
          img: Image6,
        },
        {
          id: 4,
          title: 'Kabul Mobile App UI',
          img: Image3,
        },
      ],
    },
  }
];
