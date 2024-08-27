import styles from "@/components/styles/catprofile.module.css";
import Image from "next/image";

export default function CatProfile({
  name,
  age,
  description,
  image,
}: CatProps) {
  return (
    <>
      <div className={styles.cat_profile}>
        <Image
          src={image}
          alt={""}
          className={styles.image}
          height={300}
          width={300}
        ></Image>
        <div className={styles.headings}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.age}>Age: {age}</h2>
          <p className={styles.description}>Description: {description}</p>
        </div>
      </div>
    </>
  );
}
