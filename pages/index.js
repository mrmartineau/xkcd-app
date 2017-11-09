import MasterLayout from '../layouts/master'
import styled from 'react-emotion'
import XKCDContainer from '../components/XKCDContainer'
import Footer from '../components/Footer'

const SiteContainer = styled('div')`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`

const SiteTitle = styled('h1')`
  text-align: center;
`

export default () => (
  <MasterLayout>
    <SiteContainer>
      <SiteTitle>XKCD</SiteTitle>
      <XKCDContainer />
      <Footer />
    </SiteContainer>
  </MasterLayout>
)
