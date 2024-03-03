import StaffCard from "../../components/staffCard/StaffCard";
import styles from "./Staff.module.css";

const data = [
  {
    name: "Aisha Ahmed",
    job: "Hair Stylist",
    totalCustomer: 43,
    status: "In Work",
  },
  {
    name: "Aisha Ahmed",
    job: "Hair Stylist",
    totalCustomer: 43,
    status: "In Work",
  },
  {
    name: "Aisha Ahmed",
    job: "Hair Stylist",
    totalCustomer: 43,
    status: "In Work",
  },
  {
    name: "Aisha Ahmed",
    job: "Hair Stylist",
    totalCustomer: 43,
    status: "In Work",
  },
  {
    name: "Aisha Ahmed",
    job: "Hair Stylist",
    totalCustomer: 43,
    status: "In Work",
  },
  {
    name: "Aisha Ahmed",
    job: "Hair Stylist",
    totalCustomer: 43,
    status: "In Work",
  },
];

const workHistory = [
  {
    name: "Aisha Ahmed",
    job: "Hair Cut - 28 JAN / 10:00 AM",
    status: "Completed",
  },
];

function Staff() {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        {data.map((item, index) => {
          return <StaffCard key={index} {...item} />;
        })}
      </div>
      <div className={styles.profile}>
        <div className={styles.userInfo}>
          <img src="https://via.placeholder.com/150" alt="staff" />
          <div className={styles.userNameContainer}>
            <h3>Aisha Ahmed</h3>
            <p>Hair Stylist</p>
          </div>
        </div>
        <div className={styles.workedHistory}>
          <h2>Work History</h2>
          {workHistory.map((item, index) => {
            return (
              <div key={index} className={styles.workedHistoryItem}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.job}</p>
                </div>
                <p className={styles.status}>{item.status}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Staff;
