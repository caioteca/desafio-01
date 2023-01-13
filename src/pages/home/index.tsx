import styles from "./styles.module.css";
import Wrapper from "../../assets/img/wrapper.svg";
import { Controls } from "../../components/controls";
export function Home() {
  return (
    <div id={styles.app}>
      <div id={styles["player-1"]} className={styles.player}>
        <div className={styles.wrapper}>
          <img src={Wrapper} alt="" />
          <div className={styles.info}>
            <h1>Acorda Devinho</h1>
            <p>Banda Rocketseat</p>
          </div>

          <Controls />

          <div className={styles["track-time"]}>
            <div className={styles["track"]}></div>
            <div className={styles["time"]}>
              <div className={styles["total-time"]}>03:20</div>
              <div className={styles["last-time"]}>00:12</div>
            </div>
          </div>
        </div>
      </div>
      <div id={styles["player-2"]} className={styles['player-horizontal']}>
        <div className={styles.wrapper}>
          <div className={styles["info-wrapper"]}>
            <img src={Wrapper} alt="" />
            <div className={styles.info}>
              <h1>Acorda Devinho</h1>
              <p>Banda Rocketseat</p>
            </div>
          </div>

          <Controls />

          <div className={styles["track-time"]}>
            <div className={styles["track"]}></div>
            <div className={styles["time"]}>
              <div className={styles["total-time"]}>03:20</div>
              <div className={styles["last-time"]}>00:12</div>
            </div>
          </div>
        </div>
      </div>
      <div id={styles["player-3"]} className={styles['player-horizontal']}>
        <div className={styles.wrapper}>
          <div className={styles["info-wrapper"]}>
            <img src={Wrapper} alt="" />
            <div className={styles.info}>
              <h1>Acorda Devinho</h1>
              <p>Banda Rocketseat</p>
            </div>
          </div>

          <Controls />
        </div>
      </div>
    </div>
  );
}
