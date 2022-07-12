import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'

const SelectorComponent = ({ index, assetOptions, setAsset, asset, labelText }) => {
  const incrementAsset = () => {
    index === assetOptions.length - 1 ? setAsset(assetOptions[0]) : setAsset(assetOptions[index + 1])
  }
  const decrementAsset = () => {
    index === 0 ? setAsset(assetOptions[assetOptions.length - 1]) : setAsset(assetOptions[index - 1])
  }

  return (
    <Grid container my={1}>
      <Grid item container xs={3} justifyContent='center'>
        <Button onClick={() => decrementAsset()}>
          <IndeterminateCheckBoxIcon />
        </Button>
      </Grid>
      <Grid item xs={6}>
        <FormControl color='primary' size='small' variant='outlined' fullWidth>
          <InputLabel id={labelText + 'type'}>{labelText}</InputLabel>
          <Select labelId={labelText + 'type'} id='Object-select' autoWidth value={asset} p={0} onChange={(e) => setAsset(e.target.value)} label={labelText}>
            {assetOptions.map((option, index) => (
              <MenuItem key={option + index} value={option}>
                <Typography variant='body1'>{option.slice(-4) === '.png' ? option.slice(0, -4) : option.split('_').join(' ')}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item container xs={3} justifyContent='center'>
        <Button onClick={() => incrementAsset()}>
          <AddBoxIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default SelectorComponent
