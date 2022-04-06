import React from 'react'
import Header from '../components/commons/Header'
import FormProducts from '../components/FormProducts'
import {Grid} from '@mui/material'

export default function Dashboard() {
  return (
      <>
      <Header/>
      <Grid container spacing={2}>
          <Grid item sx={12} md={2}>
              <h1>His is the side Bar</h1>
          </Grid>
          <Grid item sx={12} md={10}>
              <h1> this is the main content</h1>
              <FormProducts/>
          </Grid>
      </Grid>
      </>
  )
}
