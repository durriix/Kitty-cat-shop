import Image from "next/image";
import styles from "@/components/styles/catCard.module.css";

interface Cat {
  name: string;
  description: string;
  image: string;
  // Add other properties as needed
}

export default function CatCard({ cat }: { cat: Cat }) {
  return (
    <div className={styles.card} style={{ borderRadius: "32px" }}>
      <Image
        src={cat.image}
        alt={cat.name}
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: "32px" }}
      />
      <div className={styles.overlay}>
        <div className="wrap">
          <h3 className={styles.name}>{cat.name}</h3>
          <p className={styles.description}>{cat.description}</p>
        </div>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
}
