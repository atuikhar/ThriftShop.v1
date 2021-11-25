import styled from 'styled-components'
import { Container } from '@mui/material'

export const Wrapper = styled(Container)``

export const CardImage = styled.img`
  border-radius: 5px;
  height: 400px;
  width: 100%;
  object-fit: cover;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 100%;
  }
`
