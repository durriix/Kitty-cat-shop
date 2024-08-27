import Layout from "@/components/layout";
import "@/app/globals.css";
import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });
import styles from "@/pages/styles/donwload.module.css";
import CatsaleCard from "@/components/catsalecard";
import cat1 from "@/assets/cat 1.jpg";
import cat2 from "@/assets/cat 2.jpg";
import cat3 from "@/assets/cat 3.jpg";
import cat4 from "@/assets/cat 4.jpg";
import cat5 from "@/assets/cat 5.jpg";

const exampleData = [
  {
    name: "Johnatan",
    age: 12,
    image: cat1,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est debitis vitae perferendis explicabo minima, ipsam consequatur et numquam magni iusto quos ab iure voluptate dignissimos accusamus sequi fuga temporibus. Voluptatum, voluptatibus delectus corporis iusto blanditiis unde iste facilis aut officia fuga, reprehenderit pariatur autem itaque, cumque sint ex quasi. Ducimus assumenda illum neque, ratione placeat quibusdam voluptatem eaque quo!",
  },
  {
    name: "Whiskers",
    age: 3,
    image: cat2,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est debitis vitae perferendis explicabo minima, ipsam consequatur et numquam magni iusto quos ab iure voluptate dignissimos accusamus sequi fuga temporibus. Voluptatum, voluptatibus delectus corporis iusto blanditiis unde iste facilis aut officia fuga, reprehenderit pariatur autem itaque, cumque sint ex quasi. Ducimus assumenda illum neque, ratione placeat quibusdam voluptatem eaque quo!",
  },
  {
    name: "Helicopter",
    age: 4,
    image: cat3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est debitis vitae perferendis explicabo minima, ipsam consequatur et numquam magni iusto quos ab iure voluptate dignissimos accusamus sequi fuga temporibus. Voluptatum, voluptatibus delectus corporis iusto blanditiis unde iste facilis aut officia fuga, reprehenderit pariatur autem itaque, cumque sint ex quasi. Ducimus assumenda illum neque, ratione placeat quibusdam voluptatem eaque quo!",
  },
  {
    name: "Brown",
    age: 11,
    image: cat4,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est debitis vitae perferendis explicabo minima, ipsam consequatur et numquam magni iusto quos ab iure voluptate dignissimos accusamus sequi fuga temporibus. Voluptatum, voluptatibus delectus corporis iusto blanditiis unde iste facilis aut officia fuga, reprehenderit pariatur autem itaque, cumque sint ex quasi. Ducimus assumenda illum neque, ratione placeat quibusdam voluptatem eaque quo!",
  },
  {
    name: "Collins",
    age: 1,
    image: cat5,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est debitis vitae perferendis explicabo minima, ipsam consequatur et numquam magni iusto quos ab iure voluptate dignissimos accusamus sequi fuga temporibus. Voluptatum, voluptatibus delectus corporis iusto blanditiis unde iste facilis aut officia fuga, reprehenderit pariatur autem itaque, cumque sint ex quasi. Ducimus assumenda illum neque, ratione placeat quibusdam voluptatem eaque quo!",
  },
];

export default function Download() {
  return (
    <>
      <Layout>
        <div className={`${styles.container} ${sora.className}`}>
          <div className={styles.catGrid}>
            {exampleData.map((e) => (
              <div className={styles.catGridItem}>
                <CatsaleCard
                  name={e.name}
                  age={e.age}
                  description={e.description}
                  image={e.image.src}
                ></CatsaleCard>
                <div className={styles.buttonWrapper}>
                  <button className={styles.button}>Download Now!</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
