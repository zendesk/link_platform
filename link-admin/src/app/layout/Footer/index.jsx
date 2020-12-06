import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <div>©2020</div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  grid-area: footer;
  border-top-width: 1px;
  padding: 0.25rem 0.75rem 0 0;
  border: 1px solid #CCC;
  display: flex;
  flex-direction: row-reverse;

  div {
    color: #666;
  }
`

export default Footer
