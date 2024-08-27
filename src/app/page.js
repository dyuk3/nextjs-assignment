import FilterSection from '@/components/FilterSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainSection from '@/components/MainSection';
import Path from '@/components/Path';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=' min-h-screen'>
      <div className='max-w-[1300px] mx-auto'>
        <Header />
        <Path />
        <MainSection />
      </div>
      <Footer />
    </main>
  );
}
