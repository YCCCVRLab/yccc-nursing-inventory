const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b bg-blue-50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-800">YCCC Nursing Inventory</h1>
              <p className="text-sm text-gray-600">York County Community College</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">Welcome to YCCC Nursing Inventory</h2>
          <p className="text-gray-600 mb-4">
            This is the nursing lab inventory management system for York County Community College.
          </p>
          <p className="text-sm text-gray-500">
            ✅ Successfully deployed to GitHub Pages!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            The full application features are being migrated. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;