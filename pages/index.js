import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PakistanTrailsAdventure.com | Top Travel & Tours website from Pakistan.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Pakistantrailsadventure.com" />
        <p className="description">
          Top Travel & Tours website from Pakistan
        </p>
        <p>
          Contact at <a href="https://api.whatsapp.com/send?phone=923555602221">+92 355 5602221</a> for inquiries.
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
