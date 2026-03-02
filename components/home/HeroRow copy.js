
// import Link from 'next/link';
// import Image from 'next/image';
// import Container from '../common/Container';
// const HeroRow = ({ mainNews, bottomNews = [] }) => {
//     if (!mainNews) return null;

//     return (
//         <Container className="mt-6   ">
//             {/* Top Featured Story */}
//             <div className=" p-6  border border-gray-300 w-full">
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
//                     {/* Text Side */}
//                     <div className="md:col-span-5 space-y-4">
//                         <Link href={`/news/${mainNews.slug}`} className="group">
//                             <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] group-hover:text-primary transition-colors">
//                                 {mainNews.title}
//                             </h1>
//                         </Link>
//                         <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
//                             {mainNews.summary}
//                         </p>
//                         <div className="flex items-center gap-4 text-sm text-gray-500 font-bold uppercase">
//                             <span className="text-primary">{mainNews.category}</span>
//                             <span>{mainNews.time}</span>
//                         </div>
//                         <div className="flex gap-2 pt-4">
//                             <div className="px-3 py-1 bg-gray-100 text-xs font-bold text-gray-600">জাতীয়</div>
//                             <div className="px-3 py-1 bg-gray-100 text-xs font-bold text-gray-600">রাজনীতি</div>
//                         </div>
//                     </div>

//                     {/* Image Side */}
//                     <div className="md:col-span-7">
//                         <Link href={`/news/${mainNews.slug}`} className="block relative h-[300px] md:h-[450px] w-full overflow-hidden">
//                             <Image
//                                 src={mainNews.image}
//                                 alt={mainNews.title}
//                                 fill
//                                 priority
//                                 className="object-cover transition-transform duration-700 hover:scale-105"
//                             />
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Grid Below Hero */}
//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//                 {bottomNews.map((news) => (
//                     <Link key={news.id} href={`/news/${news.slug}`} className="group bg-white p-3 border border-transparent hover:border-slate-300 hover:shadow-md transition-all">
//                         <div className="relative h-40 w-full mb-3 overflow-hidden">
//                             <Image
//                                 src={news.image}
//                                 alt={news.title}
//                                 fill
//                                 className="object-cover group-hover:scale-105 transition-transform duration-500"
//                             />
//                         </div>
//                         <h3 className="text-md font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-3">
//                             {news.title}
//                         </h3>
//                         <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-gray-500 uppercase">
//                             <span className="text-primary">{news.category}</span>
//                             <span>{news.time}</span>
//                         </div>
//                     </Link>
//                 ))}
//             </div> */}
//         </Container>
//     );
// };

// export default HeroRow;
