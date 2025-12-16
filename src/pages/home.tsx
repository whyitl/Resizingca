import { FloatingHeader } from '../components/ui/floating-header';
import { Hero } from '../components/ui/hero';
import { Services } from '../components/ui/services-section';
import { NewSection } from '../components/ui/new-section';
import { GetInTouch } from '../components/ui/get-in-touch';
import { Footer } from '../components/ui/large-name-footer';
import { SEO } from '../components/SEO';

export default function Home() {
    return (
        <div className="relative w-full">
            <SEO
                canonical="https://resizing.ca/"
            />
            <FloatingHeader />

            <Hero />

            {/* Services Section */}
            <section id="services" className="w-full">
                <Services />
            </section>

            {/* Showcased Work Section */}
            <section id="work" className="w-full">
                <NewSection />
            </section>

            {/* Get In Touch Section */}
            <section id="contact" className="w-full">
                <GetInTouch simplified={true} />
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

