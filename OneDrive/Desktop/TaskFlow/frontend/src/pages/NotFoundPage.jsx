import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/dashboard" className="btn btn-primary mt-6 inline-block">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

