import styled from 'styled-components'
import { Typography, Container } from '@mui/material'

export const Wrapper = styled(Container)``

export const Text = styled(Typography)`
  font-size: 10px;
  color: ${(props) => props.theme.colors.backgrounddark};
`
