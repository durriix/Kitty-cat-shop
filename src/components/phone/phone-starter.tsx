"use client";

import styles from "@/components/phone/phone-starter.module.css";
import SignalCellularAltRounded from "@mui/icons-material/SignalCellularAltRounded";
import WifiRounded from "@mui/icons-material/WifiRounded";
import Battery80Rounded from "@mui/icons-material/Battery80Rounded";
import "../../app/globals.css";

export default function PhoneStarter() {
  return (
    <>
      <div className={styles.dimensions}>
        <div className={styles.screen}>
          <div className={styles.top}>
            <p>9:59</p>
            <div className={styles.icons}>
              <SignalCellularAltRounded
                sx={{ color: "white", fontSize: "25px" }}
              ></SignalCellularAltRounded>
              <WifiRounded
                sx={{ color: "white", fontSize: "25px" }}
              ></WifiRounded>
              <Battery80Rounded
                sx={{ color: "white", fontSize: "25px", rotate: "90deg" }}
              ></Battery80Rounded>
            </div>
          </div>
          <div className={styles.bottom}>
            <h3 style={{ margin: 0, fontSize: "32px" }}>
              Fall in Love with your portable <br></br>
              E-Kitty
            </h3>
            <p style={{ margin: 12, color: "#E3E3E3" }}>
              Welcome a little kitty cat to your life to remove any stress from
              your life!
            </p>
            <button className={styles.button}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
