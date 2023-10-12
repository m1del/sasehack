"use client";
import Image from 'next/image';


export default function Home() {

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
