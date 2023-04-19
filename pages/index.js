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
    
      <div>
        {/* Heading */}
        <Heading />

        {/* Content */}
        <Content />

        {/* Fotter */}
        <Fotter />
      </div>
    </>

  )
}
