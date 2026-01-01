import s from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={s["main-header"]}>
        <h1>
          The <em>Almost</em> Final Countdown
        </h1>
        <p>Stop the timer once you estimate that time is (almost) up</p>
      </header>
    </>
  );
}
