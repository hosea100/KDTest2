import Image from 'next/image'
import About from '../../components/About'
import PricingPlan from '../../components/PricingPlan'
import Contact from '../../components/Contact'
import Head from "next/head";

export const metadata = {
  title: 'ERP',
  description: 'Home',
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <About />
      <PricingPlan />
      <Contact />
    </>
  )
}
