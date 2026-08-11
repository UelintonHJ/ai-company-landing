import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ShowcaseSection from './ShowcaseSection';
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
    features,
    testimonials,
    integrations,
    pricing,
    team,
    faqs,
}) {
    return (
        <main className="space-y-24">
            <HeroSection stats={stats} />

            <ServicesSection services={services} />

            <ShowcaseSection showcases={showcases} />

            <PartnersSection />

            <WorkflowSection workflowSteps={workflowSteps} />

            <FeaturesSection features={features} />

            <TestimonialsSection testimonials={testimonials} />

            <IntegrationsSection integrations={integrations} />

            <PricingSection pricing={pricing} />

            <AboutSection team={team} />

            <FAQSection faqs={faqs} />

            <CTASection />
        </main>
    );
}