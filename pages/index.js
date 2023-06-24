import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shidaa Immigration Consults</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Shidaa Immigration Consults
        </h1>

        <p className={styles.description}>
          We are licensed by the IRCC to assist you in all your immigration needs.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Study in Canada&rarr;</h3>
            <p>Click <a href='https://docs.google.com/forms/d/e/1FAIpQLSeHKiha0IrOXSIzWijgb1T7HPwZ8BytpVuRK47KMVZyL4NfKQ/viewform?vc=0&c=0&w=1&flr=0'   target='_blank'>here </a> to submit your details and we will contact you.<a href=''> </a></p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Talk to our experienced consultant &rarr;</h3>
            <p>Click here to book some time with our consultant</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Work in Canada &rarr;</h3>
            <p>Find out more aboout the opportunities available to you</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Frequently Asked Questions &rarr;</h3>
            <p>
              Find instant answers to the most common questions
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="mailto:daniel@shidaaconsults.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         Send us an email or contact us on +1 647 
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
