// import Link from 'next/link';
// import Container from '../Container';
// import { TrendingUp } from 'lucide-react';

// const trendingTopics = [
//     { id: 1, name: "নির্বাচন", slug: "/search?q=guthrie" },
//     { id: 2, name: "বাজেট ২০৫", slug: "/search?q=olympics" },
//     { id: 3, name: "ক্রিকেট", slug: "/search?q=minnesota" },
//     { id: 4, name: "আবহাওয়া", slug: "/search?q=iran" },
// ];

// const TrendingBar = () => {
//     return (
//         <div className="bg-white border-b border-slate-300 py-3.5 hidden md:block">
//             <Container className="flex items-center justify-between relative">
//                 <div className="flex items-center gap-4 ml-[120px] lg:ml-[150px] text-[13px] sm:text-sm md:text-lg ">

//                     {/* Trending Text + Icon */}
//                     <div className="flex items-center gap-2">
//                         <span className="text-[#EE1D23] font-black  ">
//                             ট্রেন্ডিং
//                         </span>
//                         <TrendingUp
//                             size={16}
//                             className="text-[#EE1D23]"
//                             strokeWidth={2.5}
//                         />
                        
//                     </div>

//                     <div className="h-3 w-[1px] bg-gray-300 mx-2"></div>

//                     <div className="flex items-center gap-6">
//                         {trendingTopics?.map((topic) => (
//                             <Link
//                                 key={topic.id}
//                                 href={topic.slug}
//                                 className="text-[#003366] font-black  hover:text-[#EE1D23] transition-colors uppercase tracking-tight"
//                             >
//                                 {topic.name}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default TrendingBar;