import Head from 'next/head'
import Layout, { siteTitle, name } from "../components/Layout"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>{name}</strong>. I'm a Computer Science student passionate about Web Development and Design.</p>
      </section>
    </Layout>
  )
}