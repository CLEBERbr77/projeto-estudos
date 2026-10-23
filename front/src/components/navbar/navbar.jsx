const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800 dark:text-white">My App</div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;