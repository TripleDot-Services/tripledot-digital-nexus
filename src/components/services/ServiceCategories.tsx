
import IconCard from "@/components/ui/icon-card";
import { servicesData } from "@/data/services";

const ServiceCategories = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="group">
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
