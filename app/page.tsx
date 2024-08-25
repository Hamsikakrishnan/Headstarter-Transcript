'use client'
// import React, { useEffect } from "react";
// import Link from 'next/link';
import { useRouter } from 'next/navigation'
// export default function Home() {
//   useEffect(() => {
//     const element = document.getElementById("someElement");
//     if (element) {
//       // Safely manipulate the element
//       element.remove();
//     }
//   }, []); // Empty dependency array means this effect runs only once after the component mounts

//   return (
//     <main>
//       <h1>Welcome to My Next.js App</h1>
//       <p>This is a simple Next.js application with a custom title and description.</p>
//       <div id="someElement">This element will be removed on mount.</div>
//     </main>
//   );
// }

// import React from "react";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1 className={styles.title}>Welcome to My Next.js App</h1>
//       <p className={styles.description}>
//         This is a simple Next.js application with a custom title and description.
//       </p>
//     </main>
//   );
// }

import Image from "next/image";
import styles from "./page.module.css";
const LeftMiddleButton = () => {
  const router = useRouter()
  function handleClick() {
    
    router.push('/editor')
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/2.png" // Replace with the path to your image
          alt="Description of Image"
          width={500} // Adjust width as needed
          height={400} // Adjust height as needed
          className={styles.image}
        />
      </div>
        {/* <h1 className={styles.title}>TRANSCRIPT<br />WIZARD</h1> */}
        <p className={styles.description}>
          Effortlessly manage your transcripts.<br /> Add comments, attach files, and use AI to create <br/>quick summaries, all in one place.
        </p>
        {/* <Link href="/componets/mainpage"> */}
          <button onClick={handleClick} className={styles.button}>
            Get Started
          </button>
        {/* </Link> */}
        
      </div>
    </div>
    
  );
};

export default LeftMiddleButton;
// export default function Home() {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };
//   return (
//     <main className={styles.main}>
      
//       <h1 className={styles.title}>HEADSTARTER-TRANSCRIPT</h1>
//       <p>Effortlessly manage your sales transcripts. Add comments, attach files, and use AI to create quick summaries, all in one place.</p>
//       <button className={styles.button} onClick={handleClick}>
//         Get Started
//       </button>
//       import React from 'react';


      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
//     </main>
//   );
// }
