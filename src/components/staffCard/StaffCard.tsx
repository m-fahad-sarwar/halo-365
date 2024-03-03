import styles from "./StaffCard.module.css";

interface StaffCardProps {
  name: string;
  job: string;
  totalCustomer: number;
  status: string;
}

export default function StaffCard(props: StaffCardProps) {
  const { name, job, totalCustomer, status } = props;
  return (
    <div className={styles.main}>
      <div className={styles.userInfoContainer}>
        <img src="https://via.placeholder.com/150" alt="staff" />
        <div>
          <h3>{name}</h3>
          <p>{job}</p>
        </div>
      </div>
      <div className={styles.cardTextContainer}>
        <p>Total Customer</p>
        <p>{totalCustomer}</p>
      </div>
      <div className={styles.cardTextContainer}>
        <p>Status</p>
        <p className={styles.status}>{status}</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.completeWorkButton}>Complete Work</button>
        <button className={styles.cancel}>Cancel</button>
      </div>
    </div>
  );
}
