// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { divisions, districts, upazilas } from '@/lib/locations';

// const SearchIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="18"
//     height="18"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="11" cy="11" r="8"></circle>
//     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//   </svg>
// );

// const LocationSearch = () => {
//   const router = useRouter();

//   const [selectedDivision, setSelectedDivision] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');
//   const [selectedUpazila, setSelectedUpazila] = useState('');

//   // ✅ Derived data (NO useEffect needed)
//   const availableDistricts = selectedDivision
//     ? districts[selectedDivision] || []
//     : [];

//   const availableUpazilas = selectedDistrict
//     ? upazilas[selectedDistrict] || []
//     : [];

//   const handleSearch = () => {
//     const params = new URLSearchParams();

//     if (selectedDivision) params.append('division', selectedDivision);
//     if (selectedDistrict) params.append('district', selectedDistrict);
//     if (selectedUpazila) params.append('upazila', selectedUpazila);

//     router.push(`/search?${params.toString()}`);
//   };

//   return (
//     <div className="border border-slate-300 p-2 md:p-3 lg:p-5 rounded-sm shadow-sm h-full flex flex-col justify-between">
//       <div>
//         <h3 className="text-xl md:text-2xl font-bold text-secondary  border-b  border-gray-100 flex items-center justify-center">
//           খুঁজুন
//         </h3>

//         <div className="space-y-3">
//           {/* Division */}
//           <div>
//             <label className=" text-base md:text-lg font-semibold text-secondary mb-1">
//               বিভাগ
//             </label>
//             <select
//               value={selectedDivision}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 setSelectedDivision(value);
//                 setSelectedDistrict('');
//                 setSelectedUpazila('');
//               }}
//               className="w-full p-2.5 bg-[#eff3f6] border border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block focus:outline-none"
//             >
//               <option value="">বিভাগ নির্বাচন করুন</option>
//               {divisions.map((div) => (
//                 <option key={div.id} value={div.id}>
//                   {div.bnName}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* District */}
//           <div>
//             <label className="text-base md:text-lg font-semibold text-secondary mb-1">
//               জেলা
//             </label>
//             <select
//               value={selectedDistrict}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 setSelectedDistrict(value);
//                 setSelectedUpazila('');
//               }}
//               disabled={!selectedDivision}
//               className="w-full p-2.5 bg-[#eff3f6] border border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block disabled:opacity-50 focus:outline-none"
//             >
//               <option value="">জেলা নির্বাচন করুন</option>
//               {availableDistricts.map((dist) => (
//                 <option key={dist.id} value={dist.id}>
//                   {dist.bnName}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Upazila */}
//           <div>
//             <label className="text-base md:text-lg font-semibold text-secondary mb-1">
//               উপজেলা
//             </label>
//             <select
//               value={selectedUpazila}
//               onChange={(e) => setSelectedUpazila(e.target.value)}
//               disabled={!selectedDistrict}
//               className="w-full p-2.5 bg-[#eff3f6] border border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block disabled:opacity-50 focus:outline-none"
//             >
//               <option value="">উপজেলা নির্বাচন করুন</option>
//               {availableUpazilas.map((up) => (
//                 <option key={up.id} value={up.id}>
//                   {up.bnName}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={handleSearch}
//         className="mt-3 md:mt-6 w-full bg-secondary hover:bg-secondary text-white font-bold py-2 px-3 md:py-3 md:px-4 flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
//       >
//         <SearchIcon />
//         অনুসন্ধান করুন
//       </button>
//     </div>
//   );
// };

// export default LocationSearch;