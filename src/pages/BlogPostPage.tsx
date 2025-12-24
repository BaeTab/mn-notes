import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, ChevronLeft, User, Share2 } from 'lucide-react';
import SEO from '../components/SEO';
import ReactMarkdown from 'react-markdown';
import AdFit from '../components/AdFit';

export default function BlogPostPage() {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <article className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-700">
            <SEO
                title={`${post.title} - 멍냥수첩`}
                description={post.excerpt}
                url={`/blog/${id}`}
                type="article"
                publishedTime={post.date}
                author="멍냥박사"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.excerpt,
                    "author": {
                        "@type": "Person",
                        "name": "멍냥박사"
                    },
                    "datePublished": post.date,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://mn-notes.web.app/blog/${id}`
                    }
                }}
            />

            {/* Navigation Back */}
            <Link
                to="/blog"
                className="inline-flex items-center text-stone-500 hover:text-orange-500 transition-colors"
            >
                <ChevronLeft size={20} />
                <span className="font-medium">목록으로 돌아가기</span>
            </Link>

            {/* Header */}
            <header className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-bold text-xs">
                        {post.category}
                    </span>
                    <span className="text-stone-400 flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                    </span>
                    <span className="text-stone-400 flex items-center gap-1">
                        <Clock size={14} /> {post.readTime}
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center justify-between border-b border-stone-100 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-stone-800 text-sm">멍냥박사</p>
                            <p className="text-xs text-stone-500">Pet Health Specialist</p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: post.title,
                                    text: post.excerpt,
                                    url: window.location.href,
                                });
                            } else {
                                alert('URL이 복사되었습니다!');
                                navigator.clipboard.writeText(window.location.href);
                            }
                        }}
                        className="p-2 rounded-full hover:bg-stone-100 text-stone-400 transition-colors"
                    >
                        <Share2 size={20} />
                    </button>
                </div>
            </header>

            {/* Content */}
            <div className="prose prose-stone prose-lg max-w-none prose-headings:font-bold prose-a:text-orange-500 prose-img:rounded-3xl prose-strong:text-orange-600">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* AdFit for Monetization */}
            <div className="py-8 flex justify-center">
                <AdFit
                    unit="DAN-syt3g8tXIocYLBy1"
                    width={300}
                    height={250}
                />
            </div>

            {/* Footer Navigation */}
            <div className="border-t border-stone-100 pt-8 flex justify-between items-center">
                <Link to="/blog" className="text-stone-800 font-bold hover:underline">
                    다른 글 더 보기
                </Link>
                <Link to="/calculator" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-orange-200">
                    계산기 써보기
                </Link>
            </div>
        </article>
    );
}
