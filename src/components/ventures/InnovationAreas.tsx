
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InnovationAreas = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Innovation Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <CardTitle className="text-xl text-white">AI & Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Intelligent workflows, predictive analytics, and AI-powered business tools.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">NC</span>
              </div>
              <CardTitle className="text-xl text-white">No-Code Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Empowering non-technical users to build powerful applications and workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">CE</span>
              </div>
              <CardTitle className="text-xl text-white">Creator Economy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Tools and platforms that help creators monetize and scale their content.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InnovationAreas;
