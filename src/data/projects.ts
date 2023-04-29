import WebImage1 from '../images/brands/adapec.jpg';
import GoLogo from '../images/brands/goLogo.png';
import Freelancer from '../images/brands/freelancer.png';
import Aurus from '../images/brands/aurus.png';
import EasyShop from '../images/brands/easy-shop.png';
import Edoo from '../images/brands/edoot.svg';
import Tonolucro from '../images/brands/tonolucro.png';
import Goinfra from '../images/brands/goinfra.png';
import SaudePremier from '../images/brands/saudepremier.jpg';
import Nuvidio from '../images/brands/nuvidiojpg.jpg';
import Jobs from '../images/brands/jobsjpg.jpg';
import Bamex from '../images/brands/logo_bamex1.png';

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
      title: 'Sistema de gerenciamento de RH',
      publishDate: 'Ago de 2017',
      tags: 'Monolito / Asp Classico',
    },
  },
  {
    id: 2,
    title: 'Sistema de gerenciamento de patrimônio',
    category: 'Aplicações web',
    img: WebImage1,
    ProjectHeader: {
      title: 'Sistema de gerenciamento de patrimônio',
      publishDate: 'Mar de 2018',
      tags: 'Monolito / Asp Classico',
    },
  },
  {
    id: 3,
    title: 'Backoffice interno Go marketplace smartcity',
    category: 'Aplicações web',
    img: GoLogo,
    ProjectHeader: {
      title: 'Sistema para gerenciamento interno da plataforma',
      publishDate: 'Jan de 2017',
      tags: 'Frontend / Firebase / React Js',
    },
  },
  {
    id: 4,
    title: 'Site para captura de leads Go marketplace smartcity',
    category: 'Aplicações web',
    img: GoLogo,
    ProjectHeader: {
      title: 'Site para captura de leads',
      publishDate: 'Fev de 2018',
      tags: 'Frontend / Firebase / Excel / React Js',
    },
  },
  {
    id: 5,
    title: 'Aplicativo motoboy Go marketplace smartcity',
    category: 'Aplicações mobile',
    img: GoLogo,
    ProjectHeader: {
      title: 'Aplicativo para o motoboy realizar as entregas de pedidos',
      publishDate: 'Mai de 2019',
      tags: 'Mobile / Flutter / Dart / Flutter',
    },
  },
  {
    id: 6,
    title: 'Aplicativo DUT Da um trato',
    category: 'Aplicações mobile',
    img: Freelancer,
    ProjectHeader: {
      title: 'Aplicativo para gerenciamento de salões de beleza',
      publishDate: 'Ago de 2018',
      tags: 'Mobile / React Native / Javascript',
    },
  },
  {
    id: 7,
    title: 'Auros Service Center',
    category: 'Aplicações web',
    img: Aurus,
    ProjectHeader: {
      title: 'Plataforma para gerenciamento de Serviços e processos de negócios',
      publishDate: 'Dez de 2019',
      tags: 'WEB / C# / SQL Server',
    },
  },
  {
    id: 8,
    title: 'Easy Shop Cliente',
    category: 'Aplicações mobile',
    img: EasyShop,
    ProjectHeader: {
      title: 'Aplicativo de delivery',
      publishDate: 'Mar de 2019',
      tags: 'Mobile / React Native / React / Play Store / App Store / Javascript',
    },
  },
  {
    id: 9,
    title: 'Easy Shop Varejista',
    category: 'Aplicações mobile',
    img: EasyShop,
    ProjectHeader: {
      title: 'Aplicativo de delivery',
      publishDate: 'Abr de 2019',
      tags: 'Mobile / React Native / React / Play Store / App Store / Javascript',
    },
  },
  {
    id: 10,
    title: 'Easy Shop Entregador',
    category: 'Aplicações mobile',
    img: EasyShop,
    ProjectHeader: {
      title: 'Aplicativo de delivery',
      publishDate: 'Abr de 2019',
      tags: 'Mobile / React Native / React / Play Store / App Store / Javascript',
    },
  },
  {
    id: 11,
    title: 'Edu Job (EDOO)',
    category: 'Aplicações web',
    img: Edoo,
    ProjectHeader: {
      title: 'Aplicação para contratação de jovem aprendiz',
      publishDate: 'Jun de 2020',
      tags: 'Frontend / Angular / Html / CSS / Typescript',
    },
  },
  {
    id: 12,
    title: 'Edu Job (EDOO)',
    category: 'Backend',
    img: Edoo,
    ProjectHeader: {
      title: 'Aplicação para contratação de jovem aprendiz',
      publishDate: 'Jun de 2020',
      tags: 'API / Backend / Express / Sequelize / Mysql / Javascript',
    },
  },
  {
    id: 13,
    title: 'Painel interno To no lucro',
    category: 'Aplicação web',
    img: Tonolucro,
    ProjectHeader: {
      title: 'Painel para gerenciamento interno',
      publishDate: 'Dez de 2020',
      tags: 'Frontend / Hasura / Apolo / Graphql / Javascript / React',
    },
  },
  {
    id: 14,
    title: 'CLI To no lucro',
    category: 'Scripts',
    img: Tonolucro,
    ProjectHeader: {
      title: 'CLI (Command line interface) para geração de Frontends/Cruds',
      publishDate: 'Set de 2020',
      tags: 'Typescript / Nodejs',
    },
  },
  {
    id: 15,
    title: 'Go Infra',
    category: 'Aplicação mobile',
    img: Goinfra,
    ProjectHeader: {
      title: 'Aplicativo para manutenção e cadastro de problemas em rodovias Goianas',
      publishDate: 'Dez de 2020',
      tags: 'Flutter / Hasura / Graphql / App Store / Play Store',
    },
  },
  {
    id: 16,
    title: 'Saúde Premier',
    category: 'Aplicação mobile',
    img: SaudePremier,
    ProjectHeader: {
      title: 'Aplicativo para agendamento de consultas',
      publishDate: 'Mar de 2021',
      tags: 'Flutter / Hasura',
    },
  },
  {
    id: 17,
    title: 'Nuvidio',
    category: 'Aplicação web',
    img: Nuvidio,
    ProjectHeader: {
      title: 'Aplicaçãos para gerenciamento de empresas e vídeo atendimento',
      publishDate: 'Jun de 2021',
      tags: 'React Js / Typescript / Web socket',
    },
  },
  {
    id: 18,
    title: 'Nuvidio',
    category: 'Aplicação mobile',
    img: Nuvidio,
    ProjectHeader: {
      title: 'Aplicativo para video atendimento',
      publishDate: 'Jun de 2021',
      tags: 'React Native / Web socket',
    },
  },
  {
    id: 19,
    title: 'Nuvidio',
    category: 'Backend',
    img: Nuvidio,
    ProjectHeader: {
      title: 'Backend',
      publishDate: 'Jun de 2021',
      tags: 'Typescript / Express / MongoDb / Web Socket',
    },
  },
  {
    id: 20,
    title: 'Nuvidio',
    category: 'Aplicação web',
    img: Nuvidio,
    ProjectHeader: {
      title: 'Plugin para Google Chrome',
      publishDate: 'Jun de 2021',
      tags: 'Typescript / Post Message / Chrome / Plugin / Extensão / React',
    },
  },
  {
    id: 21,
    title: 'Jobs',
    category: 'Aplicação mobile',
    img: Jobs,
    ProjectHeader: {
      title: 'Aplicativo para regate de produtos com base em pontuação por abastecimento',
      publishDate: 'Ago de 2021',
      tags: 'Typescript / React Native / Play Store / App Store / One Signal',
    },
  },
  {
    id: 22,
    title: 'Bamex Manutenção',
    category: 'Aplicação mobile',
    img: Bamex,
    ProjectHeader: {
      title: 'Aplicativo para gerencimento de oficinas de veículos',
      publishDate: 'Set de 2022',
      tags: 'Typescript / React Native / Play Store / App Store',
    },
  },
  {
    id: 23,
    title: 'Bot para geração de figurinhas',
    category: 'Bots',
    img: Freelancer,
    ProjectHeader: {
      title: 'Bot para geração de figurinhas para o Whatsapp',
      publishDate: 'Mar de 2023',
      tags: 'Typescript',
    },
  },
];
