import Head from 'next/head'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ross's Portfolio | About Me</title>
      </Head>

      <main>
        <Header />
        <h1 className="title">About Me</h1>

        <p className="description">
          I'm currently studying computer science at the University of Tennessee in Knoxville.
          I also have a degree in Wildlife and Fisheries Science, and I'm very passionate about the outdoors.
          I spent several years moving across the country working various wildlife research positions and as a wildland firefighter.
          When not playing on computers, I'm usually exploring outside with my wife and dogs!
        </p>
        <Footer />
      </main>
    
      <style jsx>{`

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          width: 80vw;
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: center;
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