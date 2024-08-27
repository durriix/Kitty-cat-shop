"use client";

import Layout from "@/components/layout";
import "@/app/globals.css";
import styles from "@/pages/styles/cats.module.css";
import Image from "next/image";
import cat5 from "@/assets/cat 5.jpg";
import cat4 from "@/assets/cat 4.jpg";
import cat3 from "@/assets/cat 3.jpg";
import cat2 from "@/assets/cat 2.jpg";
import cat1 from "@/assets/cat 1.jpg";
import CatProfile from "@/components/catprofile";

import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });

export default function Cats() {
  const cats = [
    {
      name: "Wimston Jr.",
      age: 25,
      image: cat5,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus deserunt maiores eius omnis iusto quasi sunt harum et, debitis mollitia explicabo odio soluta at, blanditiis odit repudiandae. A, ab animi.",
    },
    {
      name: "Wimston Jr.",
      age: 25,
      image: cat4,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus deserunt maiores eius omnis iusto quasi sunt harum et, debitis mollitia explicabo odio soluta at, blanditiis odit repudiandae. A, ab animi.",
    },
    {
      name: "Wimston Jr.",
      age: 25,
      image: cat3,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus deserunt maiores eius omnis iusto quasi sunt harum et, debitis mollitia explicabo odio soluta at, blanditiis odit repudiandae. A, ab animi.",
    },
    {
      name: "Wimston Jr.",
      age: 25,
      image: cat2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus deserunt maiores eius omnis iusto quasi sunt harum et, debitis mollitia explicabo odio soluta at, blanditiis odit repudiandae. A, ab animi.",
    },
    {
      name: "Wimston Jr.",
      age: 25,
      image: cat1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus deserunt maiores eius omnis iusto quasi sunt harum et, debitis mollitia explicabo odio soluta at, blanditiis odit repudiandae. A, ab animi.",
    },
  ];

  return (
    <>
      <Layout>
        <div className={`${styles.container} ${sora.className}`}>
          <h1>Choose a kitty-cat for yourself</h1>
          {cats.map((e) => (
            <CatProfile
              name={e.name}
              age={e.age}
              description={e.description}
              image={e.image.src}
            ></CatProfile>
          ))}
        </div>
      </Layout>
    </>
  );
}
