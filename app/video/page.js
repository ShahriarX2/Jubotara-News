import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer';
import Container from '@/components/common/Container';
import { getVideoNews } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { getYoutubeThumbnail } from '@/utils/youtube';

export const metadata = {
    title: 'ভিডিও নিউজ | বাংলা স্টার নিউজ',
    description: 'দেশের সর্বশেষ ভিডিও সংবাদ ও প্রতিবেদন',
};

export default async function VideoListPage() {
    const videoNews = await getVideoNews();

    return (
        <div className="flex flex-col min-h-screen bg-[#eff3f6]">


            <main className="py-12">
                <Container>
                    <div className="flex items-center justify-between border-b border-red-600 pb-6 mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-secondary">
                            <span className="w-2 h-10 bg-red-600"></span>
                            ভিডিও নিউজ আর্কাইভ
                        </h1>
                        <span className="text-gray-500 font-medium">{videoNews.length} টি ভিডিও পাওয়া গেছে</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {videoNews.map((video) => (
                            <Link key={video.id} href={`/video/${video.slug}`} className="group block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                                    <Image
                                        src={getYoutubeThumbnail(video.videoUrl)}
                                        alt={video.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* Views Tag */}
                                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                        {video.views} ভিউ
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-red-600 text-xs font-bold uppercase tracking-wider">{video.category}</span>
                                        <span className="text-gray-400">•</span>
                                        <span className="text-gray-400 text-xs font-medium">{video.date}</span>
                                    </div>
                                    <h3 className="text-gray-900 text-lg md:text-xl font-bold line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                                        {video.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Empty State */}
                    {videoNews.length === 0 && (
                        <div className="text-center py-24 bg-white rounded-xl border-2 border-dashed border-slate-300">
                            <p className="text-gray-500 text-xl font-medium">কোনো ভিডিও সংবাদ পাওয়া যায়নি।</p>
                        </div>
                    )}
                </Container>
            </main>


        </div>
    );
}
