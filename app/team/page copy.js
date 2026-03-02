// import Header from '@/components/common/Header/Header';
// import Footer from '@/components/common/Footer';
// import Container from '@/components/common/Container';
// import { getTeamMembers } from '@/lib/api';
// import Image from 'next/image';

// export const metadata = {
//     title: 'আমাদের টিম | বাংলা স্টার নিউজ',
//     description: 'বাংলা স্টার নিউজ পরিবারের সদস্যবৃন্দ',
// };

// export default async function TeamPage() {
//     const teamMembers = await getTeamMembers();

//     return (
//         <div className="flex flex-col min-h-screen bg-[#eff3f6]">
//             <Header />

//             <main className="py-12">
//                 <Container>
//                     <div className="mb-12 text-center">
//                         <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4">আমাদের টিম</h1>
//                         <div className="w-34 h-1 bg-secondary mx-auto"></div>
//                         <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg md:text-2xl">
//                             বাংলা স্টার নিউজ পরিবারের একঝাঁক তরুণ ও অভিজ্ঞ সংবাদকর্মীদের সাথে পরিচিত হোন। যারা দিনরাত পরিশ্রম করছেন আপনাদের কাছে বস্তুনিষ্ঠ সংবাদ পৌঁছে দিতে।
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {teamMembers.map((member) => (
//                             <div key={member.id} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
//                                 <div className="relative h-80 w-full overflow-hidden">
//                                     <Image
//                                         src={member.image}
//                                         alt={member.name}
//                                         fill
//                                         className="object-cover group-hover:scale-110 transition-transform duration-500"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                                         <div className="flex gap-4">
//                                             {member.social?.facebook && (
//                                                 <a href={member.social.facebook} className="text-white hover:text-primary transition-colors">
//                                                     <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33A5.21,5.21,0,0,0,9,5.71V7.46H6.33v4.41H9V23.5h5.5V11.87h3.75Z" /></svg>
//                                                 </a>
//                                             )}
//                                             {member.social?.twitter && (
//                                                 <a href={member.social.twitter} className="text-white hover:text-primary transition-colors">
//                                                     <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.44,4.47a9.53,9.53,0,0,1-2.74.75,4.73,4.73,0,0,0,2.1-2.64,9.4,9.4,0,0,1-3,1.15,4.74,4.74,0,0,0-8.08,4.32,13.44,13.44,0,0,1-9.76-4.94,4.74,4.74,0,0,0,1.47,6.32,4.75,4.75,0,0,1-2.15-.59v.06a4.74,4.74,0,0,0,3.8,4.65,4.74,4.74,0,0,1-2.14,0.08,4.74,4.74,0,0,0,4.43,3.29,9.51,9.51,0,0,1-7.06,2.4,13.41,13.41,0,0,0,7.26,2.13c8.71,0,13.47-7.22,13.47-13.47,0-.2,0-.41,0-.61a9.6,9.6,0,0,0,2.37-2.45Z" /></svg>
//                                                 </a>
//                                             )}
//                                             {member.social?.linkedin && (
//                                                 <a href={member.social.linkedin} className="text-white hover:text-primary transition-colors">
//                                                     <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447,20.452h-3.554v-5.569c0-1.328-0.027-3.037-1.852-3.037c-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h0.046 c0.477-0.9,1.637-1.85,3.37-1.85c3.601,0,4.267,2.37,4.267,5.455V20.452z M5.337,7.433c-1.144,0-2.063-0.926-2.063-2.065 c0-1.138,0.92-2.063,2.063-2.063c1.14,0,2.064,0.925,2.064,2.063C7.403,6.507,6.477,7.433,5.337,7.433z M7.119,20.452H3.554V9h3.565 V20.452z" /></svg>
//                                                 </a>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="p-6">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                                     <p className="text-primary font-semibold text-xl mb-4">{member.designation}</p>
//                                     <p className="text-lg text-gray-600 leading-relaxed">
//                                         {member.bio}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
//                         <div className="flex-1">
//                             <h2 className="text-3xl font-bold text-gray-900 mb-4">আমাদের সাথে যোগ দিন</h2>
//                             <p className="text-gray-600 text-lg">
//                                 আপনি কি সাংবাদিকতায় আগ্রহী? বাংলা স্টার নিউজ সবসময় মেধাবী ও সৃজনশীল সংবাদকর্মীদের স্বাগত জানায়। আপনার সিভি পাঠিয়ে দিন আমাদের ইমেইলে।
//                             </p>
//                         </div>
//                         <a href="mailto:career@banglastar.com" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-colors shadow-lg shadow-red-100 whitespace-nowrap">
//                             আবেদন করুন
//                         </a>
//                     </div> */}
//                 </Container>
//             </main>

//             <Footer />
//         </div>
//     );
// }
