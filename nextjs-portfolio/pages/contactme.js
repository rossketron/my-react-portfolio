import Head from 'next/head'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ross Ketron | Contact</title>
      </Head>

      <main>
        <Header />
        
        <div className="container">
          <div className="input widebox">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="input_row_container">
            <div className="input narrowbox">
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="input narrowbox">
              <input type="text" required />
              <label>Subject</label>
            </div>
          </div>
          <div className="input widebox tallbox">
            <input type="text" required />
            <label>Message</label>
          </div>
        </div>
        
        
        <Footer />
      </main>
    
      <style jsx>{`


        main {
          background: black;
          height: 100vh;
          padding: 5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        container {
          width: 950px;
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