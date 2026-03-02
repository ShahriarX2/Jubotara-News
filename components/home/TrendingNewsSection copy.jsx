// import Image from "next/image";

// const newsData = [
//   {
//     id: 1,
//     title: "সোহরাওয়ার্দী উদ্যান অভিযানে মারধর: চার পুলিশ সদস্য প্রত্যাহার",
//     desc: "রাজধানীর সোহরাওয়ার্দী উদ্যানে মাদকবিরোধী অভিযান চালাকালে...",
//     image:  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "রাষ্ট্রপতির প্রেস সচিব পদে আবারও সরওয়ার আলম",
//     desc: "সাবেক অতিরিক্ত সচিব সরওয়ার আলম আবারও রাষ্ট্রপতির প্রেস সচিব পদে...",
//     image:   "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "নতুন আইজিপি হলেন আলী হোসেন ফকির",
//     image:   "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     title: "শেষপর্যন্ত হচ্ছে না গণভোট, ২ এপ্রিল দুই আসনে উপনির্বাচন: ইসি",
//     image:   "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     title: "১০ মার্চ ফ্যামিলি কার্ড বিতরণ উদ্বোধন করবেন তারেক রহমান",
//     image:   "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: 6,
//     title: "২৬ ফেব্রুয়ারি শুরু অমর একুশে বইমেলা, উদ্বোধন করবেন প্রধানমন্ত্রী",
//     image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: 7,
//     title: "মেয়াদ অনুযায়ী ধাপে ধাপে সিটি করপোরেশন নির্বাচন হবে: মির্জা ফখরুল",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
//   },
//   {
//     id: 8,
//     title: "ফের এলপি গ্যাসের দাম নির্ধারণ, কমলো ১৫ টাকা",
//     image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop"
//   },
// ];

// export default function TrendingNewsSection() {
//   return (
//     <section className="bg-white py-6">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {newsData.map((news) => (
//             <div
//               key={news.id}
//               className="flex gap-4 border-b pb-4 hover:bg-[#eff3f6] transition duration-200 cursor-pointer"
//             >
//               {/* Image */}
//               <div className="w-28 h-20 relative flex-shrink-0">
//                 <Image
//                   src={news.image}
//                   alt={news.title}
//                   fill
//                   className="object-cover rounded"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex flex-col">
//                 <h3 className="text-[16px] font-semibold text-gray-900 leading-snug hover:text-red-600 transition">
//                   {news.title}
//                 </h3>

//                 {news.desc && (
//                   <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                     {news.desc}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }