import React from 'react'
import styled from 'emotion/react'

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  transition: color .5s ease-in-out;
  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${props => props.theme.colors.secondary};
  }
  &:active,
  &:visited {
    color: ${props => props.theme.colors.tertiary};
  }
`
