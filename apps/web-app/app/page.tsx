import styles from './page.module.css';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <p className="text-indigo-600">Just a Tailwindcss Test</p>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome web-app 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
