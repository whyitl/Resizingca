import { FloatingHeader } from '../components/ui/floating-header';
import { Footer } from '../components/ui/large-name-footer';
import { SEO } from '../components/SEO';

export default function PrivacyPolicy() {
    return (
        <div className="relative w-full min-h-screen flex flex-col">
            <SEO
                title="Privacy Policy"
                description="Learn how Resizing collects, uses, and protects your personal information. Read our privacy policy for details on data handling and your rights."
                canonical="https://resizing.ca/privacy-policy"
            />
            <FloatingHeader />

            <main className="flex-grow pt-32 pb-16 px-4 bg-gray-100" style={{
                backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
                backgroundSize: '10px 10px',
                backgroundPosition: '0 0'
            }}>
                <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-white/20">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                    <div className="space-y-8 text-gray-800 leading-relaxed">
                        <section>
                            <p className="mb-4">
                                Resizing (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, use our services, or interact with us.
                            </p>
                            <p>
                                Please read this policy carefully to understand how we handle your information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                            <p className="mb-2">We collect the following types of information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Personal Information:</strong> This includes data you provide directly, such as your name, business name, email address, and any other details you submit through our contact forms, newsletter sign-ups, or other website interactions.
                                </li>
                                <li>
                                    <strong>Usage Data:</strong> This includes information collected automatically, such as IP address, browser type, pages visited, and time spent on the site. We collect this data through tools like Google Analytics and Microsoft Clarity.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                            <p className="mb-2">We use your information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Respond to inquiries submitted through our contact forms</li>
                                <li>Send newsletters or marketing communications (only if you’ve opted in)</li>
                                <li>Analyze site usage to improve functionality and user experience</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
                            <p className="mb-2">
                                We use cookies and similar technologies to enhance your experience. Cookies help us analyze traffic and personalize content. You can set your browser to block cookies, but some features of the site may not work properly.
                            </p>
                            <p className="text-sm text-gray-600 italic">
                                Note: We use services like Google Analytics and Microsoft Clarity for session insights and user behavior analysis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. How We Protect Your Data</h2>
                            <p>
                                We take reasonable technical and organizational measures to safeguard your information, including encryption and secure servers. However, no online method is 100% secure, and we cannot guarantee absolute protection.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Sharing Your Information</h2>
                            <p className="mb-2">We do not sell your data. We may share information only with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Service Providers:</strong> Third-party vendors who help operate our website and services. They are required to keep your data secure and confidential.
                                </li>
                                <li>
                                    <strong>Legal Requirements:</strong> If required by law, or to respond to lawful requests from public authorities.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                            <p className="mb-2">Depending on where you live, you may have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access, update, or delete your personal information</li>
                                <li>Object to or restrict how we use your data</li>
                                <li>Withdraw consent for future processing</li>
                            </ul>
                            <p className="mt-4">
                                To exercise your rights, contact us at <a href="mailto:contact@resizing.ca" className="text-blue-600 hover:underline">contact@resizing.ca</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
                            <p>
                                Our website may link to other sites we don’t control. We’re not responsible for the privacy practices of those sites. We recommend reviewing their privacy policies before providing any personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h2>
                            <p>
                                Our website is not intended for children under 13. We do not knowingly collect personal data from children. If we become aware of such data, we will delete it promptly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
                            <p>
                                We may update this policy from time to time. Changes will be reflected with a new “Effective Date” at the top. We encourage you to review this page periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this policy, feel free to reach out:
                                <br />
                                • Email: <a href="mailto:contact@resizing.ca" className="text-blue-600 hover:underline">contact@resizing.ca</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
