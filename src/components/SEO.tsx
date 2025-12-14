import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    noIndex?: boolean;
}

const defaultMeta = {
    title: 'Resizing - Web Design Studio',
    description: 'Budget-friendly web design and development studio. Quality websites at affordable prices - projects start from $400. Modern, responsive designs that won\'t break the bank.',
    siteUrl: 'https://resizing.ca',
    ogImage: 'https://resizing.ca/socialshare.png',
};

export function SEO({
    title = defaultMeta.title,
    description = defaultMeta.description,
    canonical,
    ogType = 'website',
    ogImage = defaultMeta.ogImage,
    noIndex = false,
}: SEOProps) {
    const fullTitle = title === defaultMeta.title ? title : `${title} | Resizing`;
    const canonicalUrl = canonical || defaultMeta.siteUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}
