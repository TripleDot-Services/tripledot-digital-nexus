
const VentureProcess = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">From Idea to Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-emerald-400">Identify</h3>
            <p className="text-gray-300 text-sm">Spot problems in our client work and market gaps</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-blue-400">Prototype</h3>
            <p className="text-gray-300 text-sm">Build minimal viable solutions and test internally</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-purple-400">Validate</h3>
            <p className="text-gray-300 text-sm">Test with select clients and gather feedback</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold">4</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-orange-400">Scale</h3>
            <p className="text-gray-300 text-sm">Launch as products or spin out as separate ventures</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentureProcess;
