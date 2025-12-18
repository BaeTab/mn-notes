import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogListPage() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Helmet>
                <title>멍냥수첩 블로그 - 반려동물 건강 상식</title>
                <meta name="description" content="강아지, 고양이 건강 관리, 다이어트, 나이 계산 등 유용한 정보를 확인하세요." />
            </Helmet>

            <header className="text-center space-y-4 py-8">
                <span className="text-orange-500 font-bold tracking-wider text-sm uppercase">Blog</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800">멍냥 지식 창고</h1>
                <p className="text-stone-500 max-w-lg mx-auto">
                    수의학적 기준에 맞춘 정확하고 유용한 반려동물 상식을 전해드립니다.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                    <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col"
                    >
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
                                <span className="text-orange-600 bg-orange-50 px-2 py-1 rounded-full font-bold">
                                    {post.category}
                                </span>
                                <div className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={12} />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                                {post.title}
                            </h2>

                            <p className="text-stone-500 text-sm line-clamp-3 mb-6 flex-1">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-stone-400 text-sm pt-4 border-t border-stone-50">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center">
                                        <User size={14} className="text-stone-500" />
                                    </div>
                                    <span>멍냥박사</span>
                                </div>
                                <span className="flex items-center gap-1 text-orange-500 font-medium group-hover:translate-x-1 transition-transform">
                                    읽기 <ChevronRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
