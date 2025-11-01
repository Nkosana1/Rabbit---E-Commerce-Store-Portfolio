const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Active Projects
          </h3>
          <p className="text-3xl font-bold text-primary-600">0</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Tasks in Progress
          </h3>
          <p className="text-3xl font-bold text-primary-600">0</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Completed Tasks
          </h3>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Team Members
          </h3>
          <p className="text-3xl font-bold text-primary-600">0</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

