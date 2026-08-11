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

export default function LandingSections() {
    return (
        <main className="space-y-24">
            <HeroSection />

            <ServicesSection />

            <ShowcaseSection />

            <PartnersSection />

            <WorkflowSection />

            <FeaturesSection />

            <TestimonialsSection />

            <IntegrationsSection />

            <PricingSection />

            <AboutSection />

            <FAQSection />

            <CTASection />
        </main>
    );
}