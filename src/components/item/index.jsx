import React, { useEffect, useState } from 'react'
import newData from '../../utils/newData'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledBoxContainer = styled(Box)`
  width: 95%;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`

export default function ItemComponent({ itemObj, layerArr, setLayerArr, layerIndex }) {
  const [itemTypeOptions, setItemTypeOptions] = useState([])
  const [itemType, setItemType] = useState(itemObj.type || '')
  const [colorOptions, setColorOptions] = useState([])
  const [color, setColor] = useState(itemObj.color || '')
  const [showOptions, setShowOptions] = useState(true)
  const { Accessories, Face, Feet, Hair, Hat, Lower, Upper } = newData
  const itemName = itemObj.layerType

  const moveItem = (to) => {
    const newArr = [...layerArr]
    var f = newArr.splice(layerIndex, 1)[0]
    newArr.splice(to, 0, f)
    setLayerArr(newArr)
  }
  const deleteItem = () => {
    const newArr = [...layerArr]
    newArr.splice(layerIndex, 1)
    setLayerArr([...newArr])
  }
  useEffect(() => {
    switch (itemName) {
      case 'Accessories':
        setItemTypeOptions(Object.keys(Accessories))
        break
      case 'Face':
        setItemTypeOptions(Object.keys(Face))
        break
      case 'Feet':
        setItemTypeOptions(Object.keys(Feet))
        break
      case 'Hair':
        setItemTypeOptions(Object.keys(Hair))
        break
      case 'Hat':
        setItemTypeOptions(Object.keys(Hat))
        break
      case 'Lower':
        setItemTypeOptions(Object.keys(Lower))
        break
      case 'Upper':
        setItemTypeOptions(Object.keys(Upper))
        break
      default:
        break
    }
  }, [itemName, Accessories, Face, Feet, Hair, Hat, Lower, Upper])

  useEffect(() => {
    switch (itemName) {
      case 'Accessories':
        setColorOptions(Accessories[itemType])
        break
      case 'Face':
        setColorOptions(Face[itemType])
        break
      case 'Feet':
        setColorOptions(Feet[itemType])
        break
      case 'Hair':
        setColorOptions(Hair[itemType])
        break
      case 'Hat':
        setColorOptions(Hat[itemType])
        break
      case 'Lower':
        setColorOptions(Lower[itemType])
        break
      case 'Upper':
        setColorOptions(Upper[itemType])
        break
      default:
        break
    }
  }, [itemType, itemName, Accessories, Face, Feet, Hair, Hat, Lower, Upper])

  useEffect(() => {
    if (color?.length && (layerArr[layerIndex].type !== itemType || layerArr[layerIndex].color !== color)) {
      layerArr[layerIndex] = { layerType: itemObj.layerType, type: itemType, color: color }
      setLayerArr([...layerArr])
    }
  }, [color, layerArr, setLayerArr, layerIndex, itemType, itemObj.layerType])
  return (
    <StyledBoxContainer>
      <Grid container>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography variant='h5'>{itemName}</Typography>
          </Grid>
          <Grid item xs={6}>
            {layerIndex !== 1 && (
              <Button onClick={() => moveItem(layerIndex - 1)}>
                <KeyboardArrowUpIcon />
              </Button>
            )}
            {layerIndex !== layerArr.length-1 && (
              <Button onClick={() => moveItem(layerIndex + 1)}>
                <KeyboardArrowDownIcon />
              </Button>
            )}
            <Button onClick={() => setShowOptions(!showOptions)}>{showOptions ? <DoubleArrowIcon /> : <KeyboardDoubleArrowDownIcon />}</Button>
            <Button onClick={() => deleteItem()}>
              <DeleteIcon />
            </Button>
          </Grid>
          <Divider />
        </Grid>
        {showOptions && (
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
        )}
      </Grid>
    </StyledBoxContainer>
  )
}
