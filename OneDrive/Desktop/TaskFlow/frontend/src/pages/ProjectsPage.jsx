const ProjectsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Projects
        </h1>
        <button className="btn btn-primary">New Project</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card cursor-pointer hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Sample Project
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Project description goes here
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

