import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy load non-critical routes to reduce initial bundle size
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy'));
const TermsOfService = lazy(() => import('./pages/terms-of-service'));
const Contact = lazy(() => import('./pages/contact'));
const Studio = lazy(() => import('./pages/studio'));
const NotFound = lazy(() => import('./pages/not-found'));

// Simple loading fallback
const PageLoader = () => (
	<div className="min-h-screen flex items-center justify-center">
		<div className="animate-pulse text-muted-foreground">Loading...</div>
	</div>
);

export default function App() {
	return (
		<Router>
			<ScrollToTop />
			<Suspense fallback={<PageLoader />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
					<Route path="/tos" element={<TermsOfService />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/studio" element={<Studio />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</Router>
	);
}
