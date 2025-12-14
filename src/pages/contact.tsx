import { FloatingHeader } from '../components/ui/floating-header';
import { GetInTouch } from '../components/ui/get-in-touch';
import { Footer } from '../components/ui/large-name-footer';

export default function Contact() {
    return (
        <div className="relative w-full" style={{
            backgroundColor: '#3B5249',
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
            backgroundSize: '10px 10px',
            backgroundPosition: '0 0',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <FloatingHeader />
            <div className="pt-32 flex flex-col flex-grow justify-between">
                <main className="flex-grow flex items-center pb-48">
                    <GetInTouch
                        transparent={true}
                        title="Hello. We'd love to connect and hear about your ideas."
                        description=""
                    />
                </main>
                <Footer />
            </div>
        </div>
    );
}
