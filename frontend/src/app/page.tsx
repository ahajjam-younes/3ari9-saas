import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PricingSection } from '@/components/home/PricingSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero section with full width */}
      <div className="w-full">
        <HeroSection />
      </div>
      
      {/* Features section with background color */}
      <div className="w-full">
        <FeaturesSection />
      </div>
      
      {/* How it works section */}
      <div className="w-full bg-white dark:bg-gray-800">
        <HowItWorksSection />
      </div>
      
      {/* Testimonials section with background color */}
      <div className="w-full bg-gray-50 dark:bg-gray-900">
        <TestimonialsSection />
      </div>
      
      {/* Pricing section */}
      <div className="w-full bg-white dark:bg-gray-800">
        <PricingSection />
      </div>
      
      {/* FAQ section with background color */}
      <div className="w-full bg-gray-50 dark:bg-gray-900">
        <FAQSection />
      </div>
      
      {/* CTA section */}
      <div className="w-full bg-primary-50 dark:bg-primary-900/20">
        <CTASection />
      </div>
    </main>
  );
}