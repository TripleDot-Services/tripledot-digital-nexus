
const VentureRoadmap = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ventures Growth Roadmap</h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Stage 1: Build Internal Tools & Prototypes</h3>
              <p className="text-gray-300">Develop solutions for our own operations and validate concepts.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Stage 2: Launch Testable MVPs</h3>
              <p className="text-gray-300">Release minimum viable products and pilot use cases with select partners.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Stage 3: Spin Out Validated Products</h3>
              <p className="text-gray-300">Scale successful ventures into standalone products or independent brands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureRoadmap;
