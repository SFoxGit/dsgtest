import React, { useEffect, useState } from 'react'
import { accessories, face, feet, hair, hats, lower, upper } from '../../utils/data'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export default function ItemComponent({ itemObj, layerArr, setLayerArr, layerIndex }) {
  const [itemTypeOptions, setItemTypeOptions] = useState([])
  const [itemType, setItemType] = useState('')
  const [colorOptions, setColorOptions] = useState([])
  const [color, setColor] = useState('')
  const itemName = itemObj.layerType
  useEffect(() => {
    switch (itemName) {
      case 'Accessories':
        setItemTypeOptions(Object.keys(accessories))
        break
      case 'Face':
        setItemTypeOptions(Object.keys(face))
        break
      case 'Feet':
        setItemTypeOptions(Object.keys(feet))
        break
      case 'Hair':
        setItemTypeOptions(Object.keys(hair))
        break
      case 'Hats':
        setItemTypeOptions(Object.keys(hats))
        break
      case 'Lower':
        setItemTypeOptions(Object.keys(lower))
        break
      case 'Upper':
        setItemTypeOptions(Object.keys(upper))
        break
      default:
        break
    }
  }, [itemName])

  useEffect(() => {
    switch (itemName) {
      case 'Accessories':
        setColorOptions(accessories[itemType])
        break
      case 'Face':
        setColorOptions(face[itemType])
        break
      case 'Feet':
        setColorOptions(feet[itemType])
        break
      case 'Hair':
        setColorOptions(hair[itemType])
        break
      case 'Hats':
        setColorOptions(hats[itemType])
        break
      case 'Lower':
        setColorOptions(lower[itemType])
        break
      case 'Upper':
        setColorOptions(upper[itemType])
        break
      default:
        break
    }
  }, [itemType, itemName])

  useEffect(() => {
    if (color?.length && (layerArr[layerIndex].type !== itemType || layerArr[layerIndex].color !== color)) {
      layerArr[layerIndex] = { layerType: itemObj.layerType, type: itemType, color: color }
      setLayerArr([...layerArr])
    }
  }, [color, layerArr, setLayerArr, layerIndex, itemType, itemObj.layerType])
  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h5'>{itemName}</Typography>
          <Divider />
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={4}>
            <Typography variant='h6'>Item Type</Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <Select value={itemType} onChange={(e) => setItemType(e.target.value)} inputProps={{ 'aria-label': 'Without label' }}>
                {itemTypeOptions.map((option, index) => (
                  <MenuItem key={itemName + option + index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography variant='h6'>Options</Typography>
          </Grid>
          <Grid item xs={8}>
            {colorOptions?.length && (
              <FormControl fullWidth>
                <Select value={color} onChange={(e) => setColor(e.target.value)} inputProps={{ 'aria-label': 'Without label' }}>
                  {colorOptions.map((option, index) => (
                    <MenuItem key={itemName + option + index} value={option}>
                      {option.slice(0, -4)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Item</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
