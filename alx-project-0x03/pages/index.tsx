const Home = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1> Welcome to Splash App </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your one-stop platform for all your needs. Connecting people, creating opportunities, and building amazing experiences.
          </p>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
              <p className="text-lg opacity-90">
                Join thousands of users who trust Splash App for their daily needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
