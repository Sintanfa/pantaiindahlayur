import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
    const router = useRouter()
    const isActive = (path) => router.pathname === path;

    return (
        <div className="flex overflow-y-auto">
            <div className="h-full bg-primary text-white w-[300px] shadow-xl flex flex-col">
                <h2 className='text-[36px] font-bold pt-10 pl-6 pb-[45px]'>Incantare</h2>
                    <Link href="/dasboard" className={`py-4 flex flex-row ${isActive('/dasboard') || isActive('/')  ? 'bg-white pr-[233px] text-primary font-bold' : 'hover:bg-[#1A2C5B] hover:text-white pr-[233px]'}`}>
                        <div className='ml-6 mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill={`${isActive('/dasboard') || isActive('/') ? `#295F98` : `white`}`}>
                                <rect x="8" y="12" width="32" height="4" rx="2"/>
                                <rect x="8" y="22" width="24" height="4" rx="2"/>
                                <rect x="8" y="32" width="16" height="4" rx="2"/>
                            </svg>
                        </div>
                        <span>Dashboard</span>
                    </Link>
                    <Link href="/modal" className={`py-4 flex flex-row ${isActive('/modal') || isActive('/modal/create') ? 'bg-white pr-[233px] text-primary font-bold' : 'hover:bg-[#1A2C5B] hover:text-white pr-[233px]' }`}>
                        <div className='ml-6 mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M3 5v6c0 1.65 4 3 9 3s9-1.35 9-3V5"></path>
                                <path d="M3 11v6c0 1.65 4 3 9 3s9-1.35 9-3v-6"></path>
                                <path d="M3 17v2c0 1.65 4 3 9 3s9-1.35 9-3v-2"></path>
                            </svg>
                        </div>
                        <span>Modal</span>
                    </Link>
                    <Link href="/penjualan" className={`py-4 flex flex-row ${ isActive('/penjualan') || isActive('/penjualan/create') ? 'bg-white text-primary pr-[233px] font-bold' : 'hover:bg-[#1A2C5B] hover:text-white pr-[233px] ' }`}>
                        <div className='ml-6 mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.59 13.41L13.41 20.59a2 2 0 0 1-2.83 0L3 13V3h10l7.59 7.59a2 2 0 0 1 0 2.82z"></path>
                                <circle cx="7.5" cy="7.5" r="1.5"></circle>
                            </svg>
                        </div>
                        <span>
                            Penjualan
                        </span>
                    </Link>
                    <Link href="/pengeluaran" className={`flex flex-row py-4 ${ isActive('/pengeluaran') || isActive('/pengeluaran/create') ? 'bg-[#FFFFFF] text-[#295F98] pr-[233px] font-bold' : 'hover:bg-[#1A2C5B] hover:text-white' }`}>
                        <div className='ml-6 mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"></path>
                                <path d="M16 13h-4"></path>
                                <path d="M16 10l-3 3 3 3"></path>
                                <path d="M4 5v2a2 2 0 0 0 2 2h12"></path>
                            </svg>
                        </div>
                        <span>Pengeluaran</span>
                    </Link>                    
                    <Link href="/labarugi" className={`flex flex-row py-4 ${ isActive('/labarugi') ? 'bg-[#FFFFFF] text-[#295F98] pr-[233px] font-boldss' : 'hover:bg-[#1A2C5B] hover:text-white' }`}>
                        <div className='ml-6 mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="16 2 16 8 22 8"></polyline>
                                <line x1="8" y1="13" x2="10" y2="13"></line>
                                <line x1="8" y1="17" x2="14" y2="17"></line>
                                <line x1="10" y1="13" x2="10" y2="17"></line>
                                <line x1="14" y1="13" x2="14" y2="15"></line>
                                <line x1="14" y1="15" x2="16" y2="15"></line>
                            </svg>
                        </div>
                        <span>
                            LaporanLabaRugi
                        </span>
                    </Link>
                    <Link href="/perubahanmodal"  className={`flex flex-row py-4 ${ isActive('/perubahanmodal') ? 'bg-[#FFFFFF] text-[#295F98] pr-[233px] font-bold' : 'hover:bg-[#1A2C5B] hover:text-white' }`}>
                        <div className='ml-6 mr-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="16 2 16 8 22 8"></polyline>
                                <path d="M8 13h4"></path>
                                <path d="M10 15l-2-2 2-2"></path>
                                <path d="M14 11h4"></path>
                                <path d="M16 9l2 2-2 2"></path>
                            </svg>
                        </div>
                        <span>
                            LaporanPerubahanModal
                        </span>
                    </Link>
                    <Link  href="/posisikeuangan" className={`flex flex-row py-4 ${ isActive('/posisikeuangan') ? 'bg-[#FFFFFF] text-[#295F98] pr-60 font-bold' : 'hover:bg-[#1A2C5B] hover:text-white' }`}>
                        <div className='ml-6 mr-3'> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="16 2 16 8 22 8"></polyline>
                                <line x1="12" y1="10" x2="12" y2="20"></line>
                                <polyline points="9 12 12 10 15 12"></polyline>
                                <circle cx="9" cy="16" r="2"></circle>
                                <circle cx="15" cy="16" r="2"></circle>
                            </svg>
                        </div>
                        <span>
                            LaporanPosisiKeuangan
                        </span>
                    </Link>
            </div>
        </div>
    )

}

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   // Utility function to check if the route is active
//   const isActive = (path) => router.pathname === path;

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div
        // className={`${
        //   isOpen ? 'w-64' : 'w-20'
        // } bg-gray-800 text-white flex flex-col transition-all duration-300`}
//       >
//         {/* Toggle Button */}
//         <button
//           className="p-4 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? '←' : '☰'}
//         </button>

//         {/* Menu Items */}
//         <nav className="flex flex-col gap-4 mt-4">
//           <Link href="/"
           
//               className={`p-4 rounded ${
//                 isActive('/') ? 'bg-gray-700' : 'hover:bg-gray-700'
//               }`}
//             >
//               Home
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
