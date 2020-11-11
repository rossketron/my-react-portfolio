import Head from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ross's Portfolio | Projects</title>
      </Head>

      <main>
        <Header />
        <h1 className="title">Some of my projects!</h1>

        <p className="description">
          I'm currently in the process of learning and developing more to showcase my skills in..
        </p>
        <div className="language-icon-row">
          <img src="/react.png" alt="React logo" className="logo" />
          <img src="/html.svg" alt="HTML5 logo" className="logo" />
          <img src="/css.svg" alt="css logo" className="logo" />
          <img src="/javascript-icon.svg" alt="js logo" className="logo" />
          <img src="/nodejs.jpg" alt="NodeJS logo" className="logo" />      
          <img src="/mongodb.png" alt="MongoDB logo" className="logo" />              
        </div>

        <div className="grid">
          <div className="card">
            <h3>Vanilla Superball</h3>
            <p>Fun single page game similar to candy crush using vanilla js</p>
            <a 
              href="https://github.com/rossketron" 
              className="code-link"
              target="_blank" 
              rel="noopener noreferrer"
              >Check out the code!
            </a>          </div>

          <div className="card">
            <h3>Zelda Recipe API</h3>
            <p>Working on creating an API of all Zelda BOTW recipes</p>
            <a 
              href="https://github.com/rossketron" 
              className="code-link"
              target="_blank" 
              rel="noopener noreferrer"
              >Check out the code!
            </a>
          </div>

          <div className="card" >
            <h3>This Portfolio Site</h3>
            <p>Built this site using React and NextJs</p>
            <a 
              href="https://github.com/rossketron/my-react-portfolio"
              className="code-link"
              target="_blank" 
              rel="noopener noreferrer"
              >Check out the code!
            </a>          </div>

          <div className="card">
            <h3>More to Come..</h3>
            <p>Look out for future projects!</p>
          </div>
        </div>
        <Footer />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .language-icon-row {
          width: 100%;
          margin: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
        }

        .logo {
          height: 5rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
          margin-bottom: 3rem;
        }

        .card {
          height: 200px;
          width: 300px;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .card:hover,
        .card:focus,
        .card:active {
          background-color: rgb(211,211,211,.3);
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card a {
          font-size: 1.25rem;
          line-height: 1.5;
          font-style: italic;
        }

        .card a:hover {
          font-weight: 750;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
    </Layout>
  )
}
