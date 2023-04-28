import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";

export interface ProjectSingleProps {
	id?: number
}

const ProjectSingle = () => {
	const { id } = useParams<{ id: string }>();
	
	return (
		<motion.div
			initial={{ opacity: 0 }}
			// @ts-ignore
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader id={Number(id)} />
				<ProjectGallery id={Number(id)} />
				<ProjectInfo id={Number(id)} />
				<ProjectRelatedProjects id={Number(id)} />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
