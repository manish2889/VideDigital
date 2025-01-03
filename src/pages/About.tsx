import PageLayout from '../components/common/PageLayout'
import PageHeader from '../components/common/PageHeader'
import AboutSection from '../components/sections/AboutSection'
import TeamSection from '../components/sections/TeamSection'

const About = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' }
  ]

  return (
    <PageLayout>
      <PageHeader 
        title="About Us" 
        breadcrumbs={breadcrumbs}
      />
      <AboutSection />
      <TeamSection />
    </PageLayout>
  )
}

export default About