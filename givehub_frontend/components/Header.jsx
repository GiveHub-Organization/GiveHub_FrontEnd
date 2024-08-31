//import Image from 'next/image';
import Image from "next/image";

import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-white p-5 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between width-full">
          <div className="flex items-center">
            
            <Image src="/icons/circle2.png" className="" width={20} height={20} alt="icon Image" style={{marginRight:'10px'}}  />
              <Link href="/home" className="text-purple font-bold text-lg">GiveHub</Link>
          </div>
          <div className="invisible sm:visible  flex space-x-5 grow-1" style={{display: 'flex', alignItems: 'center'}}>
            
              <Link href="/home" passHref className="text-black">Home</Link>
              <Link href="/how" passHref className="text-black">How it works</Link>
            <Link href="/home" passHref className="text-black">Contact</Link>
            <Link href="/auth/login" passHref className="text-black">Login</Link>  
          
          </div>
          <Link href="/auth/login" passHref className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 " style={{ backgroundColor: '#5F2EEA' }}>Partner with us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;