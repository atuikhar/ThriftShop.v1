import styled from 'styled-components'
import { Typography } from '@mui/material'

export const Wrapper = styled.div`
  text-align: center;
`

export const CardImage = styled.img`
  border-radius: 10px;
  height: 200px;
  width: 200px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`

export const Title = styled(Typography)`
  font-size: 15px;
  color: #1a1f29;
`
