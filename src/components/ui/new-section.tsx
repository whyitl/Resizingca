
function NewSection() {
    return (
        <div className="w-full pt-6 pb-24 bg-gray-100" style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)',
            backgroundSize: '10px 10px',
            backgroundPosition: '0 0'
        }}>
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-6">
                        Showcased Work
                    </h2>
                    <div className="w-full">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr className="border-b border-gray-300">
                                    <th className="text-left py-1 px-3 md:px-8 text-xs font-medium text-muted-foreground uppercase tracking-wider">Year</th>
                                    <th className="text-left py-1 px-3 md:px-8 text-xs font-medium text-muted-foreground uppercase tracking-wider">Client</th>
                                    <th className="text-left py-1 px-3 md:px-8 text-xs font-medium text-muted-foreground uppercase tracking-wider">Niche</th>
                                    <th className="text-left py-1 px-3 md:px-8 text-xs font-medium text-muted-foreground uppercase tracking-wider">Technology</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="py-2 px-3 md:px-8 text-sm text-muted-foreground">2025</td>
                                    <td className="py-2 px-3 md:px-8 text-sm text-muted-foreground">
                                        <a href="https://tucnmedia.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            TUCN Media
                                        </a>
                                    </td>
                                    <td className="py-2 px-3 md:px-8 text-sm text-muted-foreground">Marketing</td>
                                    <td className="py-2 px-3 md:px-8 text-sm text-muted-foreground">React, Vite, Tailwind</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-2 px-3 md:px-8 text-sm text-muted-foreground">2025</td>
                                    <td className="py-2 px-3 md:px-8 text-sm text-muted-foreground">
                                        <a href="https://pureglowelectric.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            PureGlow Electric
                                        </a>
                                    </td>
                                    <td className="py-2 px-3 md:px-8 text-sm text-muted-foreground">Trades (Electrical)</td>
                                    <td className="py-2 px-3 md:px-8 text-sm text-muted-foreground">React, TypeScript, Tailwind</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { NewSection };
