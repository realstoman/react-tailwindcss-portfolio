// Import images
import CRP from '../images/brands/crpjpg.jpg';
import Iphan from '../images/brands/iphanjpg.jpg';
import Freelancer from '../images/brands/freelancer.png';
import Nuvidio from '../images/brands/nuvidiojpg.jpg';
import UseJobs from '../images/brands/jobsjpg.jpg';
import Adapec from '../images/brands/adapec.jpg';

export const clientsHeading = 'Empresas que ja passei';

export interface ClientsData {
	id: number;
	title: string
	img: any;
}

export const clientsData = [
	{
		id: 1,
		title: 'CRP Tecnologia',
		img: CRP,
	},
	{
		id: 2,
		title: 'Nuvidio',
		img: Nuvidio,
	},
	{
		id: 3,
		title: 'Iphan',
		img: Iphan,
	},
	{
		id: 4,
		title: 'Logpay',
		img: Freelancer,
	},
	{
		id: 5,
		title: 'Go smartcity',
		img: Freelancer,
	},
	{
		id: 6,
		title: 'UseJobs',
		img: UseJobs,
	},
	{
		id: 7,
		title: 'Da um trato',
		img: Freelancer,
	},
	{
		id: 8,
		title: 'ADAPEC',
		img: Adapec,
	},
];
