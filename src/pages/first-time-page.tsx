import styles from "@/pages/styles/first-time-page.module.css";
import { Sora } from "next/font/google";
import "../pages/styles/globals.css";
import PhoneStarter from "@/components/phone/phone-starter";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });

export default function FirstTimePage() {
  return (
    <div className={`${styles.page} ${sora.className}`}>
      <div className={styles.introduction}>
        <div className={styles.main}>
          <h1 style={{ paddingLeft: "32px" }}>WELCOME TO Kitty-CAT PROJECT</h1>
          <ol className={styles.list} style={{ padding: "32px" }}>
            <li className={styles.list_element}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              aperiam, ullam delectus velit non unde at minima magnam quia neque
              ab! Iusto enim voluptatibus quas, aperiam eos iure ad commodi.
            </li>
            <li className={styles.list_element}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              aperiam, ullam delectus velit non unde at minima magnam quia neque
              ab! Iusto enim voluptatibus quas, aperiam eos iure ad commodi.
            </li>
            <li className={styles.list_element}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              aperiam, ullam delectus velit non unde at minima magnam quia neque
              ab! Iusto enim voluptatibus quas, aperiam eos iure ad commodi.
            </li>
            <li className={styles.list_element}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              aperiam, ullam delectus velit non unde at minima magnam quia neque
              ab! Iusto enim voluptatibus quas, aperiam eos iure ad commodi.
            </li>
          </ol>
          <h2 style={{ padding: "32px" }}>
            Made with absolute love to KATS ❤️
          </h2>
          <div className={styles.button}>
            <Link className={styles.link} href="/">
              <button className={styles.get_started}>
                <p>GET STARTED</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.phones}>
          <PhoneStarter></PhoneStarter>
          <PhoneStarter></PhoneStarter>
        </div>
        <div className={styles.phones}>
          <PhoneStarter></PhoneStarter>
          <PhoneStarter></PhoneStarter>
        </div>
        <div className={styles.phones}>
          <PhoneStarter></PhoneStarter>
          <PhoneStarter></PhoneStarter>
        </div>
        <div className={styles.phones}>
          <PhoneStarter></PhoneStarter>
          <PhoneStarter></PhoneStarter>
        </div>
        <div className={styles.phones}>
          <PhoneStarter></PhoneStarter>
          <PhoneStarter></PhoneStarter>
        </div>
        <div className={styles.phones}>
          <PhoneStarter></PhoneStarter>
          <PhoneStarter></PhoneStarter>
        </div>
        <div className={styles.phones}>
          <PhoneStarter></PhoneStarter>
          <PhoneStarter></PhoneStarter>
        </div>
        <div className={styles.phones}>
          <PhoneStarter></PhoneStarter>
          <PhoneStarter></PhoneStarter>
        </div>
      </div>
    </div>
  );
}
