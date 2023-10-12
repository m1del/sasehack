"use client";
import Image from 'next/image';
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    const timerId = setTimeout(() => {
      window.location.href = '/grocerylist'
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);
    
  
  return (
    <div className='home-page'>
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className='home-logo'
      />
    </div>
  );
}
