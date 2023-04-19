import Heading from '@/components/Head'
import Content from '@/components/Content'
import Fotter from '@/components/Fotter'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Huggle landing page</title>
      </Head>
    
      <main>
        {/* Heading */}
        <Heading />

        {/* Content */}
        <Content />

        {/* Fotter */}
        <Fotter />
      </main>
    </>

  )
}
