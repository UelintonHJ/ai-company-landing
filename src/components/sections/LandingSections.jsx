import HeroSection from './HeroSection';
import PartnersSection from './PartnersSection';
import WorkflowSection from './WorkflowSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import IntegrationsSection from './IntegrationsSection';
import PricingSection from './PricingSection';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

export default function LandingSections({
    stats,
    workflowSteps,
    services,
    showcases,
    activeShowcase,
    setActiveShowcase,
    features,
    testimonials,
    activeTestimonial,
    setActiveTestimonial,
    integrations,
    pricing,
    annualBilling,
    setAnnualBilling,
    team,
    faqs,
    openFaq,
    setOpenFaq
}) {
    return (
        <main className="space-y-24">
            <HeroSection 
                stats={stats}
                services={services}
                showcases={showcases}
                activeShowcase={activeShowcase}
                setActiveShowcase={setActiveShowcase}
            />

            <PartnersSection />

            <WorkflowSection workflowSteps={workflowSteps} />

            <FeaturesSection features={features} />

            <TestimonialsSection 
                testimonials={testimonials}
                activeTestimonial={activeTestimonial}
                setActiveTestimonial={setActiveTestimonial}
            />

            <IntegrationsSection integrations={integrations} />

            <PricingSection 
                pricing={pricing}
                annualBilling={annualBilling}
                setAnnualBilling={setAnnualBilling}
            />

            <AboutSection team={team} />

            <FAQSection 
                faqs={faqs}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
            />

            <CTASection />
        </main>
    );
}