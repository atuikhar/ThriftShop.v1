import styled from 'styled-components'
import { Container } from '@mui/material'

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 1rem;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`
