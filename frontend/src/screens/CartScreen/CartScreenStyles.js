import {
  TableContainer,
  Typography,
  Grid,
  Box,
  Paper,
  Container,
} from '@mui/material'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'

export const Img = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
`

export const ButtonContainer = styled(Grid)`
  display: flex;
  justify-content: space-around;
`

export const Title = styled(Typography)`
  font-size: 10px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
  }
`

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  padding: 12px;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`

export const Wrapper = styled(Paper)`
  padding: 5px;
  margin: 5px;
`
export const Form = styled(Box)`
  padding: 10px 0px 30px 0px;
`
export const Remove = styled(DeleteIcon)`
  cursor: pointer;
  font-size: 30px;
`

export const Total = styled(Typography)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.backgrounddark};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`
export const Subtotal = styled(TableContainer)`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
`
