import { FloatingHeader } from '../components/ui/floating-header';
import { Footer } from '../components/ui/large-name-footer';
import { GetInTouch } from '../components/ui/get-in-touch';

export default function Studio() {
    return (
        <div className="relative w-full min-h-screen">
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

                                {/* 2 Green boxes */}
                                <div className="flex flex-col gap-4 pt-4">
                                    <div
                                        className="w-full rounded-lg p-6 flex items-center"
                                        style={{ backgroundColor: '#3B5249' }}
                                    >
                                        <p className="text-sm text-white leading-relaxed font-bold">
                                            Resizing was founded out of a passion for technology. It operates as a multidisciplinary design studio based in Calgary, Alberta, Canada.
                                        </p>
                                    </div>
                                    <div
                                        className="w-full rounded-lg p-6 flex items-center"
                                        style={{ backgroundColor: '#3B5249' }}
                                    >
                                        <p className="text-sm text-white leading-relaxed font-bold">
                                            Monday - Friday, 8am - 6pm MST
                                        </p>
                                    </div>
                                </div>

                                {/* Studio Image */}
                                <div className="pt-4">
                                    <img
                                        src="/StudioLowPoly.webp"
                                        alt="Studio"
                                        className="w-full rounded-lg shadow-md"
                                    />
                                </div>
                            </div>

                            {/* Right side - paragraphs */}
                            <div className="space-y-6 md:pt-32">
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Resizing is a web design studio that blends aesthetic precision with business performance. We were founded on the belief that exceptional design should do more than look great — it should drive measurable growth for small and scaling businesses.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                    Our clients come to us for high-conversion websites built on modern, reliable technology stacks that align beautifully with their brand. Most of our growth has come organically through social channels, where we've built a community of founders, developers, and designers who believe in purposeful digital craftsmanship. <span className="font-medium text-gray-900">@resizing.studio</span>
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
