import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist."
                noIndex={true}
            />
            <h1 className="text-8xl font-bold text-white mb-4">404</h1>
            <p className="text-xl text-gray-400 mb-8">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-[#4ade80] text-black font-semibold rounded-lg hover:bg-[#22c55e] transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
}
