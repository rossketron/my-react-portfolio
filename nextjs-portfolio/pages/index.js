import Head from 'next/head'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ross's Portfolio | Home</title>
      </Head>

      <main>
        <Header />
        <h1 className="title">Ross Ketron</h1>

        <p className="description">
          Hi! I'm an aspiring full-stack developer studying at The Univesity of Tennesse in Knoxville!
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
          line-height: 1.5;
          font-size: 1.5rem;
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
