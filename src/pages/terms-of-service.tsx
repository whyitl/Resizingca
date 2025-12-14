import { FloatingHeader } from '../components/ui/floating-header';
import { Footer } from '../components/ui/large-name-footer';
import { SEO } from '../components/SEO';

export default function TermsOfService() {
    return (
        <div className="relative w-full min-h-screen flex flex-col">
            <SEO
                title="Terms of Service"
                description="Read Resizing's terms and conditions for using our website and web design services. Understand your rights and responsibilities."
                canonical="https://resizing.ca/tos"
            />
            <FloatingHeader />

            <main className="flex-grow pt-32 pb-16 px-4 bg-gray-100" style={{
                backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
                backgroundSize: '10px 10px',
                backgroundPosition: '0 0'
            }}>
                <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-white/20">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                    <div className="space-y-8 text-gray-800 leading-relaxed">
                        <section>
                            <p className="mb-4">
                                Welcome to Resizing (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms and Conditions govern your use of our website located at www.resizing.ca (&ldquo;Website&rdquo;). By accessing or using our Website, you agree to comply with and be bound by these terms. If you do not agree with these terms, please do not use our Website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Use of the Website</h2>
                            <p>
                                You agree to use our Website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the Website. You must not misuse or interfere with our Website by introducing viruses, malware, or any harmful technology.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
                            <p>
                                All content on this Website, including text, graphics, logos, and designs, is the property of Resizing or its content providers and is protected by intellectual property laws. You may not reproduce, distribute, or exploit any content from our Website without prior written consent from us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                            <p>
                                Some areas of our Website may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and up-to-date information when registering and using your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Services</h2>
                            <p>
                                Resizing offers design and development services. Our services and pricing details are outlined separately and subject to change. All services provided are subject to a separate agreement or contract.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                            <p>
                                Resizing is not responsible for any direct, indirect, incidental, or consequential damages arising from your use of our Website or services. We make no warranties regarding the accuracy, reliability, or availability of the Website or any content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
                            <p>
                                Our Website may contain links to third-party websites that are not controlled by us. We are not responsible for the content or practices of these third-party sites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
                            <p>
                                Your use of our Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Changes to These Terms</h2>
                            <p>
                                We reserve the right to modify or update these Terms at any time. Any changes will be posted on this page with the updated effective date. Please review these Terms periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
                            <p>
                                These Terms and Conditions are governed by and construed in accordance with the laws of Alberta, Canada, without regard to its conflict of law principles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about these Terms and Conditions, please contact us at:
                                <br />
                                Email: <a href="mailto:contact@resizing.ca" className="text-blue-600 hover:underline">contact@resizing.ca</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
