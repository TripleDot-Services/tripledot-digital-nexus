
import IconCard from "@/components/ui/icon-card";
import { servicesData } from "@/data/services";

const ServiceCategories = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-neo-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-neo-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-secondary">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="group transform hover:scale-105 transition-all duration-300">
              <IconCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
