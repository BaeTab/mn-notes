import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'profile';
    publishedTime?: string;
    author?: string;
    structuredData?: Record<string, any>;
}

export default function SEO({
    title,
    description,
    keywords,
    image = '/images/og-image.png',
    url = '/',
    type = 'website',
    publishedTime,
    author,
    structuredData,
}: SEOProps) {
    const siteTitle = '멍냥수첩 - 강아지 고양이 나이 계산기 | 비만도 측정 | 칼로리 계산';
    const defaultDescription = '우리 집 강아지, 고양이의 사람 나이 환산, 비만도(BCS) 측정, 그리고 하루 권장 칼로리 계산까지 한 번에! 멍냥수첩으로 반려동물 건강을 관리하세요.';
    const defaultKeywords = '강아지 나이 계산, 고양이 나이 계산, 반려동물 비만도, 강아지 다이어트, 고양이 다이어트, 사료 양 계산, 멍냥수첩';

    const fullTitle = title ? `${title} | 멍냥수첩` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const absoluteUrl = `https://mn-notes.web.app${url}`;
    const absoluteImage = image.startsWith('http') ? image : `https://mn-notes.web.app${image}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={absoluteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={absoluteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:locale" content="ko_KR" />
            <meta property="og:site_name" content="멍냥수첩" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={absoluteUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={absoluteImage} />

            {/* Article Specific */}
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {author && <meta property="article:author" content={author} />}

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
}
