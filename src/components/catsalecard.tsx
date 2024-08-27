import Image from "next/image";
import styles from "@/components/styles/catSaleCard.module.css";

export default function CatsaleCard({
  name,
  age,
  image,
  description,
}: CatProps) {
  return (
    <>
      <div className={styles.catContainer}>
        <div className={styles.data}>
          <h1 className={styles.h1}>{name}</h1>
          <h2 className={styles.h2}>{age}</h2>
          <h3 className={styles.h3}>{description}</h3>
        </div>
        <Image
          className={styles.catImage}
          src={image}
          alt={name}
          width={200}
          height={200}
        ></Image>
      </div>
    </>
  );
}
