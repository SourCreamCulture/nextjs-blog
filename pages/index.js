import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey!, I'm Dallin and I am currently Studying Software Engineering at BYU Idaho.</p>
        <p>
          If you would like to see what projects I'm currently working on visit my{' '}
          <a href="https://github.com/SourCreamCulture">github</a>.
        </p>
        <p>
        Follow Me Online Here:
        <ul>
       <li><a href="https://github.com/SourCreamCulture">GitHub</a></li>
       <li>Discord: sourcreamculture</li>
       <li><a href="https://www.linkedin.com/in/dallin-bland-701a56291/">Linkedin</a></li>
        </ul>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
