import Layout from "@/components/layout";
import styles from "@/pages/styles/features.module.css";
import { Sora } from "next/font/google";
import Image from "next/image";
import cat_1 from "@/assets/cat 1.jpg";
import kitty_love from "@/assets/kitty-love.gif";
import PhoneStarter from "@/components/phone/phone-starter";

const sora = Sora({ subsets: ["latin"] });

export default function Features() {
  return (
    <div className={sora.className}>
      <Layout>
        <div className={styles.main}>
          <ul className={styles.list}>
            <li className={styles.list_element1}>
              <div className={styles.headings}>
                <h3 className={styles.heading3changed}>VERY</h3>
                <h1 className={styles.heading1}>Unique Features</h1>
                <h3 className={styles.heading3}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci asperiores assumenda libero laudantium
                  exercitationem, aliquam consequuntur, dolor dignissimos
                  veritatis pariatur soluta provident, laboriosam quisquam vel
                  totam et ut. Optio, consequatur! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Adipisci asperiores assumenda
                  libero laudantium exercitationem, aliquam consequuntur, dolor
                  dignissimos veritatis pariatur soluta provident, laboriosam
                  quisquam vel totam et ut. Optio, consequatur! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Adipisci
                  asperiores assumenda libero laudantium exercitationem, aliquam
                  consequuntur, dolor dignissimos veritatis pariatur soluta
                  provident, laboriosam quisquam vel totam et ut. Optio,
                  consequatur!
                </h3>
              </div>
              <div className={styles.image}>
                <Image
                  style={{
                    width: "440px",
                    height: "620px",
                    borderRadius: "80px",
                  }}
                  src={cat_1}
                  alt={""}
                ></Image>
              </div>
            </li>
            <li className={styles.list_element2}>
              <div className={styles.mask}></div>
              <h1 className={styles.heading1_variant} style={{ zIndex: 1 }}>
                Interactive Demos
              </h1>
              <div className={styles.section1}>
                <h1 className={styles.heading1}>Get familiar with your CAT</h1>
                <h3 className={styles.section_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia voluptatum esse non est vel. Voluptatum a rerum quia
                  soluta incidunt, laborum, veniam id molestias, ducimus ratione
                  eveniet provident iusto nihil? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Beatae eveniet ipsum in neque
                  deleniti nesciunt dignissimos, aliquam autem temporibus error?
                  Ab quisquam placeat repellat sapiente natus voluptate maiores
                  esse fuga.
                </h3>
              </div>
            </li>
            <li className={styles.list_element3}>
              <h1 className={styles.heading1}>
                BE<span style={{ marginInline: "80px" }}>NEFI</span>TS
              </h1>

              <div className={styles.section2}>
                <h3 className={styles.section_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia voluptatum esse non est vel. Voluptatum a rerum quia
                  soluta incidunt, laborum, veniam id molestias, ducimus ratione
                  eveniet provident iusto nihil?
                </h3>
                <Image src={kitty_love} alt={""} className={styles.gif}></Image>
              </div>
            </li>
          </ul>
          <footer className={styles.footer}>
            <h1>All rights reserved © Dmytro Cherniuk 2024</h1>
          </footer>
        </div>
      </Layout>
    </div>
  );
}
