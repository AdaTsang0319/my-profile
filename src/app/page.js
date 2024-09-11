import Image from "next/image";
import styles from "./page.module.css";
import seaBg from "../../public/seaBg.jpg"
import { NavMenu } from "./styled-components/navMenu";

export default function Home() {
  const today = new Date().toDateString();
  return(
    <body> 
      <div >
      <Image
      // style={{zIndexindex:'-1'}} 
        alt="background image"
        src={seaBg}
        fill
        style={{
          objectFit: 'cover',
          zIndex:'-1'
        }}
        placeholder="blur"
        quality={100}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" -- affect performance cuz determine the size of image downloaded by browser
      />
      <NavMenu />
      {/* example of using tailwind
      <h1 className="text-3xl font-bold underline">hello world</h1> */}
      </div>
    </body>
  )
  // return (
  //   <main className={styles.main}>
  //     <div className={styles.description}>
  //       <div style={{flexDirection:'row'}}> 
  //         <p style={{border:'none'}}>
  //           Today is {today}
  //         </p>
  //         <p>
  //           Get started by editing&nbsp;
  //           <code className={styles.code}>src/app/page.js</code>
  //         </p>
  //       </div>
  //       <div>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{" "}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className={styles.vercelLogo}
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     <div className={styles.center}>
  //       <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>

  //     <div className={styles.grid}>
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Docs <span>-&gt;</span>
  //         </h2>
  //         <p>Find in-depth information about Next.js features and API.</p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Learn <span>-&gt;</span>
  //         </h2>
  //         <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Templates <span>-&gt;</span>
  //         </h2>
  //         <p>Explore starter templates for Next.js.</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Deploy <span>-&gt;</span>
  //         </h2>
  //         <p>
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // );
}
