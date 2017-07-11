import React from 'react'
import styled from 'emotion/react'

export const Container = styled.div`
  max-width: 95vw;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    max-width: ${props => props.theme.width};
  }
`
