import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className={`${styles.flexContainer} flex-col min-h-screen bg-white text-black`}>
      <Head>
        <title>Anthony Shuey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`${styles.flexContainer} bg-white p-4 justify-end space-x-4`}>
        <a href="#home">Home</a>
       
        <Link href="/projects">Projects</Link>
    
        <Link href = "/Items">Items for Sale</Link>
        
      </nav>

      <main className={`${styles.flexContainer} flex-grow p-6 flex-col items-center justify-center text-center`}>
        <h1 className="text-4xl font-bold">Hello!</h1>
        <p>{`I'm Michael Ilsasa (the guy with the red tie standing next to RFK Jr.), and I have a profound passion for filmmaking and visual effects. I'm deeply engaged in politics, relishing in debates about future presidential candidates. An avid news watcher, I also take pleasure in creating and reselling political memorabilia and movie memorabilia, merging my interests in history, theater, and commerce. `}</p>
        
        <Image src="/mike_photo.jpg" alt="Your Image" width={400} height={400} className="rounded-full mt-4"/>
        <div className={`${styles.flexContainer} mt-2 items-center`}>
          <a href="https://www.linkedin.com/in/michael-lisasa-5779b124a/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
            <Image src="/linkedin_logo.jpg" alt="LinkedIn Logo" width={30} height={30} className="mx-1"/>
          </a>
          <a href="https://www.instagram.com/realdimaggio/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
            <Image src="/instagram_logo.jpg" alt="Instagram Logo" width={48} height={48} className="mx-1"/>
          </a>
          
          
        </div>
      </main>

      <footer className={`${styles.flexContainer} bg-white p-4 justify-around`}>
        <div className="w-1/2 p-4">
          <h2 className="font-bold">Currently</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li style={{ whiteSpace: 'nowrap' }}>Interning for the senate</li>
          <li style={{ whiteSpace: 'nowrap' }}>Making films</li>
          <li style={{ whiteSpace: 'nowrap' }}>Working with RFK Jr Students for Kennedy Campaign of Massachusetts </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
