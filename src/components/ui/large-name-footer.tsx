"use client";
import { useState, useEffect } from "react";



function Footer() {
    const [activity, setActivity] = useState("");

    useEffect(() => {
        const updateActivity = () => {
            const date = new Date();
            const calgaryTime = date.toLocaleString("en-US", { timeZone: "America/Edmonton" });
            const hour = new Date(calgaryTime).getHours();

            if (hour >= 0 && hour < 7) {
                setActivity("Sleeping");
            } else if (hour >= 7 && hour < 9) {
                setActivity("Powering Up");
            } else if (hour >= 9 && hour < 18) {
                setActivity("Working");
            } else if (hour >= 18 && hour < 21) {
                setActivity("Eating");
            } else {
                setActivity("Powering Up");
            }
        };

        updateActivity();
        const interval = setInterval(updateActivity, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="py-12 px-6 md:px-6" style={{ backgroundColor: '#F6F6F6', color: '#1a1a1a' }}>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-8 md:mb-0 flex flex-col justify-between h-full">
                        <div>
                            <h1 className="text-left text-3xl md:text-5xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none mb-4 md:mb-0 pb-2" style={{ lineHeight: 1 }}>
                                Resizing
                            </h1>
                            <div className="mt-4 space-y-1">
                                <p className="text-sm font-medium" style={{ color: '#666' }}>
                                    Currently {activity}, In Calgary, AB
                                </p>
                                <a href="mailto:contact@resizing.ca" className="text-sm block hover:underline" style={{ color: '#666' }}>contact@resizing.ca</a>
                            </div>
                        </div>
                        <p className="text-sm mt-5" style={{ color: '#666' }}>
                            © {new Date().getFullYear()} Resizing. All rights reserved.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4" style={{ color: '#1a1a1a' }}>Stuff</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/#services" className="hover:text-black hover:underline" style={{ color: '#666' }}>
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="/studio" className="hover:text-black hover:underline" style={{ color: '#666' }}>
                                        Studio
                                    </a>
                                </li>
                                <li>
                                    <a href="/#work" className="hover:text-black hover:underline" style={{ color: '#666' }}>
                                        Work
                                    </a>
                                </li>
                                <li>
                                    <a href="/#contact" className="hover:text-black hover:underline" style={{ color: '#666' }}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4" style={{ color: '#1a1a1a' }}>Socials</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://instagram.com/resizing" className="hover:text-black hover:underline" style={{ color: '#666' }}>
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/company/resizing" className="hover:text-black hover:underline" style={{ color: '#666' }}>
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4" style={{ color: '#1a1a1a' }}>Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/privacy-policy" className="hover:text-black hover:underline" style={{ color: '#666' }}>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/tos" className="hover:text-black hover:underline" style={{ color: '#666' }}>
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
