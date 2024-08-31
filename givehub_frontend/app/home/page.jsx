import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Image from 'next/image';



export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Give Hub - End Food Wastage</title>
        <meta name="description" content="Join us in reducing food wastage and facilitating donations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ... flex-grow flex items-center justify-center px-4 py-8">
        <div className="flex items-center">
          <div className="text-center w-1/2 mr-8">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Discover. Support. Transform</h1>
            <p className="text-lg text-gray-700 mb-6">
              GiveHub connects organizations and CSR efforts with impactful drives, simplifying support and engagement. It offers tools for organizers to foster meaningful contributions, bridging passion with action.
            </p>
            <div className="flex space-x-4 ">
                <Link href="/auth/ngo-reg">
                
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-orange-600">REGISTER AS NGO</button>
                </Link>
                <Link href="/auth/org-reg">
                
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">REGISTER AS ORG.</button>
                </Link>
            </div>
          </div>
          <div className="w-1/2">
            <Image src="/donate.png" alt="Image description" width={200} height={200} className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Give Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
