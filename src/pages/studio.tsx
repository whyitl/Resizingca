import { FloatingHeader } from '../components/ui/floating-header';
import { Footer } from '../components/ui/large-name-footer';
import { GetInTouch } from '../components/ui/get-in-touch';
import { SEO } from '../components/SEO';

export default function Studio() {
    return (
        <div className="relative w-full min-h-screen">
            <SEO
                title="The Studio"
                description="Resizing is a multidisciplinary web design studio based in Calgary, Alberta, Canada. We blend aesthetic precision with business performance for measurable growth."
                canonical="https://resizing.ca/studio"
            />
            <FloatingHeader />

            {/* Main content with diagonal lines background */}
            <div
                className="w-full min-h-screen pt-32 pb-24"
                style={{
                    backgroundColor: '#f3f4f6',
                }}
            >
                {/* Diagonal lines background pattern */}
                <div
                    className="fixed inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.03) 10px, rgba(0, 0, 0, 0.03) 11px)`,
                        backgroundSize: '100% 100%',
                    }}
                />

                {/* Secondary diagonal lines for depth */}
                <div
                    className="fixed inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0, 0, 0, 0.02) 20px, rgba(0, 0, 0, 0.02) 21px)`,
                        backgroundSize: '100% 100%',
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                            {/* Left side - heading, boxes, and image */}
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                                    The Studio
                                </h1>

                                {/* Studio Image */}
                                <div className="pt-4">
                                    <img
                                        src="/StudioLowPoly.webp"
                                        alt="Resizing web design studio workspace in Calgary, Alberta"
                                        className="w-full rounded-lg shadow-md"
                                    />
                                </div>

                                {/* Pricing Options */}
                                <div className="mt-6">
                                    <p className="text-lg md:text-xl text-gray-600 mb-4">Our model is simple and flexible:</p>
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-gray-900 pl-4 py-3 bg-gray-50 rounded-r-lg">
                                            <p className="text-lg md:text-xl font-semibold text-gray-900">$500 one-time build fee</p>
                                            <p className="text-base text-gray-600 mt-1">Then optionally add $30/month for ongoing changes when you need them</p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <span className="text-gray-400 text-sm font-medium">— OR —</span>
                                        </div>
                                        <div className="border-l-4 border-gray-900 pl-4 py-3 bg-gray-50 rounded-r-lg">
                                            <p className="text-lg md:text-xl font-semibold text-gray-900">$175/month with no upfront cost</p>
                                            <p className="text-base text-gray-600 mt-1">Includes 24/7 changes and continuous updates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - paragraphs */}
                            <div className="space-y-6 md:pt-32">
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Resizing is a web design studio that blends aesthetic precision with business performance, built specifically for small and scaling businesses that want a professional online presence without the overhead of managing a complex website stack. Most of our clients aren't looking to run a content operation or constantly tweak a CMS — they just need a fast, trustworthy site that represents the business well, generates leads, and stays out of the way while they focus on delivering their service.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Technically, we specialize in static HTML websites because they're inherently more secure and stable than database-driven builds. With no server-side database layer, there's far fewer moving parts to exploit — which significantly reduces the attack surface compared to traditional WordPress/CMS setups. The result is a site that loads quickly, stays reliable, and requires minimal maintenance.
                                </p>
                                
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Professionally, I've spent over 1.5 years designing and developing websites across industries — from local startups to mid-sized companies expanding across the Calgary Metropolitan Area.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GetInTouch />

            <Footer />
        </div>
    );
}
