import { Link } from 'react-router-dom';

function DiagonalCard() {
    // Calculate current quarter based on month
    const getCurrentQuarter = () => {
        const month = new Date().getMonth(); // 0-11
        if (month >= 0 && month <= 2) return 'Q1'; // Jan-Mar
        if (month >= 3 && month <= 5) return 'Q2'; // Apr-Jun
        if (month >= 6 && month <= 8) return 'Q3'; // Jul-Sep
        return 'Q4'; // Oct-Dec
    };

    const currentQuarter = getCurrentQuarter();
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full pt-0 pb-6 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="max-w-md mx-auto">
                    <Link
                        to="/studio"
                        className="relative overflow-hidden rounded-xl bg-white shadow-md block cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
                        style={{
                            minHeight: '160px',
                        }}
                    >
                        {/* Diagonal lines background pattern */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.03) 10px, rgba(0, 0, 0, 0.03) 11px)`,
                                backgroundSize: '100% 100%',
                            }}
                        />

                        {/* Secondary diagonal lines for depth */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(0, 0, 0, 0.02) 20px, rgba(0, 0, 0, 0.02) 21px)`,
                                backgroundSize: '100% 100%',
                            }}
                        />

                        {/* Content overlay */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[160px] px-8 py-8 text-center">
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 mb-3">
                                See the studio ↗
                            </h3>
                            <p className="text-sm text-gray-600 max-w-xl leading-relaxed">
                                Limited Openings in <span className="font-semibold text-gray-900">{currentQuarter}</span> {currentYear}
                            </p>
                        </div>

                        {/* Subtle gradient overlay for depth */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.02) 100%)',
                            }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { DiagonalCard };
