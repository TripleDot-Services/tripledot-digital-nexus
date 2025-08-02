
const GrowthRoadmap = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services Growth Roadmap</h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Stage 1: Launch Core Offerings</h3>
              <p className="text-gray-300 mb-2">Establish our fundamental services and build initial client relationships.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Microsoft 365 administration and basic hosting</li>
                <li>• Strategic consulting and workflow optimization</li>
                <li>• Building our first success stories and case studies</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Stage 2: Productize with Automation</h3>
              <p className="text-gray-300 mb-2">Add automation tools and premium add-ons to enhance service delivery.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Custom dashboard development and monitoring tools</li>
                <li>• Advanced integration services and API development</li>
                <li>• White-label solutions for partners and resellers</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Stage 3: Scale with Partnerships</h3>
              <p className="text-gray-300 mb-2">Build a distributed team and strategic partnerships for global reach.</p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Partner network for specialized services and local support</li>
                <li>• Enterprise-grade solutions and dedicated account management</li>
                <li>• Integration with ventures for next-generation tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthRoadmap;
