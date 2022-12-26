import Hero from '../components/home/Hero'
import Layout from '../components/Layout'
import TeacherSlider from '../components/sliders/teacherSlider'

export default function Home() {
  return (
    <Layout title='Home Page'>
      <section>
        <Hero />
      </section>
      <section>
        <TeacherSlider />
      </section>
    </Layout>
  )
}