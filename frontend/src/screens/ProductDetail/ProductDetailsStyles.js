import styled from 'styled-components'
import { Container, TableCell, Table, Typography } from '@mui/material'

export const Wrapper = styled(Container)`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
`
export const WrapperButton = styled(Container)`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  padding: 0;
`

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

export const Cell = styled(TableCell)`
  border-bottom: none;
`

export const Tab = styled(Table)`
  min-width: 100;
  overflow: hidden;
`

export const Text = styled(Typography)`
  font-size: 15px;
  color: ${(props) => props.theme.colors.backgrounddark};
`

export const Title = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 15px;
  color: ${(props) => props.theme.colors.backgrounddark};
`
export const Body = styled(Typography)`
  font-size: 11px;
  color: ${(props) => props.theme.colors.backgrounddark};
`
export const RatingContainer = styled(Container)`
  font-size: 15px;
`
