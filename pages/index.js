import Hero from '../components/home/Hero'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title='Home Page'>
      <section>
        <Hero />
      </section>
    </Layout>
  )
}