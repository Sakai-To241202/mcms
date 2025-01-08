import styles from "./page.module.css";
import Image from "next/image";

import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";
import { News } from '@/app/_libs/microcms';


// const data: {
//   contents: News[]} = {
//     contents: [
//       {
//         id: "1",
//         title: 
//         "渋谷にオフィスを移転しました。",
//         category: {
//           name: "更新情報",
//         },
//         publishedAt: "2025/01/01",
//         createdAt: "2025/01/01",
//       },
//     {
//       id:"2",
//       title: "当社CEOが業界リーダーTOP30に選出されました",
//       category: {
//         name: "更新情報",
//       },
//       publishedAt: "2025/01/01",
//       createdAt: "2025/01/01",
//     },
//       {
//         id:"3",
//         title: "テストの記事です",
//         category: {
//           name: "更新情報",
//         },
//       publishedAt: "2025/01/01",
//       createdAt: "2025/01/01",
//     },
//       {
//         id:"4",
//         title: "テストの記事です",
//         category: {
//           name: "更新情報",
//         },
//       publishedAt: "2025/01/01",
//       createdAt: "2025/01/01",
//     },
//     ],
//   };


export default function Home() {
  const name = "市場をリードしている、グローバルテックカンパニー";
  // const sliceData = data.contents.slice(0,4);
  // const sliceData = [];
  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
        <p className={styles.description}>私たちは{name}です</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
    <section className={styles.news}>
        {/* <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData}/>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div> */}
      </section>
    </>
  );
}




