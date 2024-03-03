import { memo, useEffect, useState } from "react";
import styles from "./Header.module.css";
import useHeader from "./useHeader";

export default function Header() {
  const { isSidebarOpen, handleToggleSidebar } = useHeader();
  return (
    <div className={styles.main}>
      <div className={styles.logoContainer}>
        <div className={styles.hamburger} onClick={handleToggleSidebar}>
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="#47619b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3.75 4.75l8.5 8.5m0-8.5l-8.5 8.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="#47619b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              />
            </svg>
          )}
        </div>
        <h1>Halo 365</h1>
        <h3>Staff List</h3>
      </div>
      <div className={styles.subMenu}>
        <div className={styles.date}>
          <RealtimeDate />
        </div>
        <div className={styles.notification}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12 1a2 2 0 0 0-1.98 2.284A7.003 7.003 0 0 0 5 10v8H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-8a7.003 7.003 0 0 0-5.02-6.716A2 2 0 0 0 12 1m2 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1"
              clip-rule="evenodd"
            />
          </svg>
          <span>3</span>
        </div>
        <div className={styles.profile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="1.8em"
            viewBox="0 0 48 48"
          >
            <g fill="currentColor">
              <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
              <path
                fill-rule="evenodd"
                d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20a21.253 21.253 0 0 1-.274 0c-.181 0-.362-.006-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.942 17.942 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621"
                clip-rule="evenodd"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 15 15"
          >
            <path fill="currentColor" d="M7.5 10.207L11.707 6H3.293z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const RealtimeDate = memo(() => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return date.toLocaleTimeString();
});
