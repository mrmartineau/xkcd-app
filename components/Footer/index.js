import React from 'react'
import styled from 'react-emotion'
import { ds } from '../../theme'

const FooterEl = styled('footer')`
  text-align: center;
  margin-top: ${ds.spacing(3)};
`

const Footer = () => {
  return (
    <FooterEl>
      Made by <a href="https://zander.wtf">Zander</a>
    </FooterEl>
  )
}

export default Footer
