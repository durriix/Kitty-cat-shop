import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "@/components/styles/layout.module.css";
import { Sora } from "next/font/google";
import "../app/globals.css";

const sora = Sora({ subsets: ["latin"] });
const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Features", href: "/features" },
  { id: 3, title: "CATS", href: "/cats" },
  { id: 4, title: "Download", href: "/download" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={`${styles.menu} ${sora.className}`}>
        <div className={styles.logo_menu}>
          <p style={{ fontSize: "32px" }}>Kitty-CAT</p>
          <nav className={`${styles.nav}`}>
            <ul className={styles.list}>
              {links.map((e) => (
                <li key={e.id} style={{ color: "white" }}>
                  <Link className={styles.link} href={e.href}>
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.buttons}>
          <button className={styles.log_in}>Log in</button>
          <button className={styles.sign_up}>Sign up</button>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}
