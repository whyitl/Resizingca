import { useState } from "react";
import { Button } from "./button";


interface GetInTouchProps {
    transparent?: boolean;
    title?: string;
    description?: string;
    simplified?: boolean;
}

function GetInTouch({
    transparent = false,
    title = "Get in touch",
    description = "Interested in working together? We'd love to hear from you.",
    simplified = false
}: GetInTouchProps) {
    const [formData, setFormData] = useState({
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        role: '',
        website: '',
        budget: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        const fieldMap: { [key: string]: string } = {
            'name': 'name',
            'first-name': 'firstName',
            'last-name': 'lastName',
            'email': 'email',
            'company': 'company',
            'role': 'role',
            'website': 'website',
            'budget': 'budget',
            'how-can-we-help': 'message'
        };
        const fieldName = fieldMap[id] || id;
        setFormData(prev => ({ ...prev, [fieldName]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const recipientEmail = 'contact@resizing.ca';
        const subject = `New Inquiry from ${simplified ? formData.name : `${formData.firstName} ${formData.lastName}`}`;

        let bodyParts: string[] = [];

        if (simplified) {
            if (formData.name) bodyParts.push(`Name: ${formData.name}`);
        } else {
            if (formData.firstName || formData.lastName) bodyParts.push(`Name: ${formData.firstName} ${formData.lastName}`);
            if (formData.role) bodyParts.push(`Role: ${formData.role}`);
            if (formData.budget) bodyParts.push(`Budget: ${formData.budget}`);
        }

        if (formData.email) bodyParts.push(`Email: ${formData.email}`);
        if (formData.company) bodyParts.push(`Company: ${formData.company}`);
        if (formData.website) bodyParts.push(`Website: ${formData.website}`);
        if (formData.message) bodyParts.push(`\nMessage:\n${formData.message}`);

        const body = bodyParts.join('\n');

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const backgroundStyle = transparent ? {} : {
        backgroundColor: '#3B5249',
        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
        backgroundSize: '10px 10px',
        backgroundPosition: '0 0'
    };

    return (
        <div className={`w-full ${transparent ? 'py-0' : 'py-24'}`} style={backgroundStyle}>
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-6" style={{ color: '#F6F6F6' }}>
                        {title}
                    </h2>
                    {description && (
                        <p className="max-w-xl mx-auto text-lg leading-relaxed mb-12" style={{ color: '#F6F6F6' }}>
                            {description}
                        </p>
                    )}

                    <form className="max-w-xl mx-auto text-left space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {simplified ? (
                                <>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                            First Name
                                        </label>
                                        <input
                                            id="first-name"
                                            type="text"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                            Last Name
                                        </label>
                                        <input
                                            id="last-name"
                                            type="text"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                        />
                                    </div>
                                </>
                            )}

                            {!simplified && (
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                    Company
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    placeholder="Your Company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                />
                            </div>

                            {!simplified && (
                                <div className="space-y-2">
                                    <label htmlFor="role" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                        Role
                                    </label>
                                    <input
                                        id="role"
                                        type="text"
                                        placeholder="Your Role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="website" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                    Website URL
                                </label>
                                <input
                                    id="website"
                                    type="url"
                                    placeholder="https://your-website.com"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                />
                            </div>

                            {!simplified && (
                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="budget" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                        What is the budget for your project?
                                    </label>
                                    <input
                                        id="budget"
                                        type="text"
                                        placeholder="e.g. $5k - $10k"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                    />
                                </div>
                            )}

                            <div className="space-y-2 md:col-span-2">
                                <label htmlFor="how-can-we-help" className="text-sm font-medium" style={{ color: '#F6F6F6' }}>
                                    How can we help?
                                </label>
                                <textarea
                                    id="how-can-we-help"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="flex min-h-[120px] w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    style={{ backgroundColor: '#F6F6F6', color: '#3B5249', border: 'none' }}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full md:w-auto font-semibold"
                                style={{ backgroundColor: '#F6F6F6', color: '#3B5249' }}
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { GetInTouch };
