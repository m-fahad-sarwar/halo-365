import styles from "./Sidebar.module.css";
import { SIDE_BAR_ITEMS } from "../../constants/sidebar/sidebar.constants";
import moment from "moment";
import { useAppSelector } from "../../redux/store";

export default function Sidebar() {
  const isSidebarOpen = useAppSelector((state) => state.app.isSidebarOpen);
  return (
    <div className={`${styles.main} ${isSidebarOpen && styles.open}`}>
      <div className={styles.general}>
        <h3>General</h3>
        <p>{moment().format("dddd, D MMMM YYYY")}</p>
      </div>
      {SIDE_BAR_ITEMS?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${styles.item} ${item?.active && styles.active}`}
          >
            <div className={styles.icon}>{item.icon}</div>
            <p className={styles.text}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
