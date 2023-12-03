import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TikTokers.ae | A platform for tiktokers in UAE.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Tiktokers.ae" />
        <p className="description">
          No#1 platform for Tiktokers in UAE
        </p>
        <p>
          Whatsapp at <a href="https://api.whatsapp.com/send?phone=19097570544">+1 909-757-0544</a> to purchase this domain.
        </p>
      </main>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-K09WWE4Y74" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-RSYFNQS7D3');
        `}
      </Script>
     
      <Footer />
    </div>
  )
}
