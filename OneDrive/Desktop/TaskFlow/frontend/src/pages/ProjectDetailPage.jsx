import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Project Detail - {id}
      </h1>
      <div className="card">
        <p className="text-gray-600 dark:text-gray-400">
          Project details will be displayed here
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

