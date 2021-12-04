import * as React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

export default function Error({ error, message, type }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert
        style={{ display: 'flex', justifyContent: 'center' }}
        severity={type}
      >
        {error ? error : message}
      </Alert>
    </Stack>
  )
}
