import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
    return (
        <section className="max-container flex flex-wrap gap-9 justify-center items-center">
            {services.map((service, index) => (
                // <ServiceCard key={index} {...service}/>
                <ServiceCard key={index} {...service} />
            ))}
        </section>
    )
};

export default Services;
