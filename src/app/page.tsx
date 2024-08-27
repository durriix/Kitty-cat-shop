"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout";
import styles from "@/app/page.module.css";
import CatCard from "@/components/catcard";
import cat4 from "@/assets/cat 4.jpg";
import cat5 from "@/assets/cat 5.jpg";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
      router.push("/first-time-page");
    }
  }, []);

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.heading1}>
              Welcome to Our Virtual Cat Shop!
            </h1>
            <h3 className={styles.heading3}>Discover your fluffy companion.</h3>
            <section className={styles.featuredCats}>
              <h2 className={styles.heading2}>Featured Cats</h2>
              <div className={styles.catGrid}>
                <details className={styles.details}>
                  <summary className={styles.summary}>First model</summary>
                  <div className={styles.catCard}>
                    <CatCard
                      cat={{
                        name: "Whiskers",
                        description:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, commodi aut aliquam, recusandae fugiat dolor esse maiores cupiditate, dignissimos beatae pariatur? Fugiat nesciunt tenetur ad fugit reiciendis. Architecto, facere aut.",
                        image: cat4.src,
                      }}
                    ></CatCard>
                  </div>
                </details>
                <details className={styles.details}>
                  <summary className={styles.summary}>Second model</summary>
                  <div className={styles.catCard}>
                    <CatCard
                      cat={{
                        name: "Whiskers",
                        description:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, commodi aut aliquam, recusandae fugiat dolor esse maiores cupiditate, dignissimos beatae pariatur? Fugiat nesciunt tenetur ad fugit reiciendis. Architecto, facere aut.",
                        image: cat4.src,
                      }}
                    ></CatCard>
                  </div>
                </details>
              </div>
              <div className={styles.catGrid}>
                <details className={styles.details}>
                  <summary className={styles.summary}>Third model</summary>
                  <div className={styles.catCard}>
                    <CatCard
                      cat={{
                        name: "Whiskers",
                        description:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, commodi aut aliquam, recusandae fugiat dolor esse maiores cupiditate, dignissimos beatae pariatur? Fugiat nesciunt tenetur ad fugit reiciendis. Architecto, facere aut.",
                        image: cat4.src,
                      }}
                    ></CatCard>
                  </div>
                </details>
                <details className={styles.details}>
                  <summary className={styles.summary}>Fourth model</summary>
                  <div className={styles.catCard}>
                    <CatCard
                      cat={{
                        name: "Whiskers",
                        description:
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, commodi aut aliquam, recusandae fugiat dolor esse maiores cupiditate, dignissimos beatae pariatur? Fugiat nesciunt tenetur ad fugit reiciendis. Architecto, facere aut.",
                        image: cat4.src,
                      }}
                    ></CatCard>
                  </div>
                </details>
              </div>
            </section>
          </main>
          <footer className={styles.footer}>
            <p>&copy; 2023 Your Virtual Cat Shop</p>
          </footer>
        </div>
      </Layout>
    </>
  );
}
