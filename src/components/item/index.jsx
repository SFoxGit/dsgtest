import React, { useEffect, useState } from 'react'
import data from '../../utils/dataV2'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined'
import InputLabel from '@mui/material/InputLabel'
import { StyledBoxContainer, StyledDivider, StyledSelect, StyledIconContainer } from './style'
import AddBoxIcon from '@mui/icons-material/AddBox'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'

export default function ItemComponent({ itemObj, layerArr, setLayerArr, layerIndex }) {
  const [itemTypeOptions, setItemTypeOptions] = useState(Object.keys(data[itemObj.layerType]))
  const [itemType, setItemType] = useState(itemObj.assetName)
  const [colorOptions, setColorOptions] = useState(data[itemObj.layerType][itemType])
  const [color, setColor] = useState(itemObj.color)
  const [showOptions, setShowOptions] = useState(itemObj.isOpen)
  const [locked, setLocked] = useState(itemObj.isLocked || false)
  // const { Accessories, Face, Feet, Hair, Hat, Lower, Upper } = data
  const itemName = itemObj.layerType
  const currentIndex = itemTypeOptions.indexOf(itemType)
  const currentColorIndex = colorOptions.indexOf(color)
  const isMobile = window.matchMedia('(max-width: 420px)').matches

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
  const incrementAsset = () => {
    currentIndex === itemTypeOptions.length - 1 ? setItemType(itemTypeOptions[0]) : setItemType(itemTypeOptions[currentIndex + 1])
  }
  const decrementAsset = () => {
    currentIndex === 0 ? setItemType(itemTypeOptions[itemTypeOptions.length - 1]) : setItemType(itemTypeOptions[currentIndex - 1])
  }
  const incrementColor = () => {
    currentColorIndex === colorOptions.length - 1 ? setColor(colorOptions[0]) : setColor(colorOptions[currentColorIndex + 1])
  }
  const decrementColor = () => {
    currentColorIndex === 0 ? setColor(colorOptions[colorOptions.length - 1]) : setColor(colorOptions[currentColorIndex - 1])
  }
  const expandOrCollapse = () => {
    layerArr[layerIndex].isOpen = !showOptions
    setLayerArr([...layerArr])
    setShowOptions(!showOptions)
  }
  const lockItem = () => {
    layerArr[layerIndex].isLocked = !locked
    setLayerArr([...layerArr])
    setLocked(!locked)
  }
  useEffect(() => {
    if (!colorOptions.includes(color)) {
      setColor(colorOptions[0])
    }
    if (colorOptions.includes('swarthy.png')) {
      setColor(layerArr[0].color)
    }
  }, [color, colorOptions, layerArr])
  useEffect(() => {
    setItemTypeOptions(Object.keys(data[itemName]))
  }, [itemName])
  useEffect(() => {
    if (!itemType) {
      setItemType(itemTypeOptions[0])
    }
  }, [setItemType, itemTypeOptions, itemType])

  useEffect(() => {
    setColorOptions(data[itemName][itemType])
  }, [itemName, itemType])
  useEffect(() => {
    if (colorOptions?.length && color === (null || '')) {
      setColor(colorOptions[0])
    }
  }, [setColor, colorOptions, color])

  useEffect(() => {
    if (color?.length && (layerArr[layerIndex].assetName !== itemType || layerArr[layerIndex].color !== color)) {
      layerArr[layerIndex] = { layerType: itemObj.layerType, assetName: itemType, color: color, isOpen: showOptions, isLocked: false, display: true }
      setLayerArr([...layerArr])
    }
  }, [color, layerArr, setLayerArr, layerIndex, itemType, itemObj.layerType, showOptions])
  return (
    <StyledBoxContainer>
      <Grid container alignItems='center' px={{ xs: 1, md: 2 }}>
        <Grid item xs={4} md={3}>
          <Typography variant='h5' color='primary'>
            {itemName}
          </Typography>
        </Grid>
        {!isMobile && (
          <Grid item xs={0} md={2}>
            {!showOptions && (
              <Typography variant='body1' color='primary' ml={2}>
                {itemType.split('_').join(' ')}
              </Typography>
            )}
          </Grid>
        )}
        <StyledIconContainer item xs={8} md={7}>
          <Grid container columns={5}>
            <Grid item xs={1}>
              {layerIndex !== 4 && (
                <Button onClick={() => moveItem(layerIndex - 1)}>
                  <KeyboardArrowUpIcon />
                </Button>
              )}
            </Grid>
            <Grid item xs={1}>
              {layerIndex !== layerArr.length - 1 && (
                <Button onClick={() => moveItem(layerIndex + 1)}>
                  <KeyboardArrowDownIcon />
                </Button>
              )}
            </Grid>
            <Grid item xs={1}>
              <Button onClick={() => expandOrCollapse()}>{showOptions ? <UnfoldLessOutlinedIcon /> : <ExpandCircleDownOutlinedIcon />}</Button>
            </Grid>
            <Grid item xs={1}>
              <Button onClick={() => lockItem()}>{locked ? <LockOpenIcon /> : <LockIcon />}</Button>
            </Grid>
            <Grid item xs={1}>
              <Button onClick={() => deleteItem()}>
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </StyledIconContainer>
      </Grid>
      {showOptions && <StyledDivider variant='fullWidth' />}
      {showOptions && (
        <Grid container rowSpacing={1} alignItems='center' py={2} px={1} spacing={2}>
          <Grid item container xs={12} sm={6} justifyContent='center'>
            <Grid item xs={3}>
              <Button onClick={() => decrementAsset()}>
                <IndeterminateCheckBoxIcon />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <FormControl color='primary' size='small' variant='outlined' fullWidth>
                <InputLabel id='item-type'>Item Type</InputLabel>
                <Select labelId='item-type' id='item-type-select' autoWidth value={itemType} p={0} onChange={(e) => setItemType(e.target.value)} label='Item Type'>
                  {itemTypeOptions.map((option, index) => (
                    <MenuItem key={itemName + option + index} value={option}>
                      <Typography variant='body1'>{option.split('_').join(' ')}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={() => incrementAsset()}>
                <AddBoxIcon />
              </Button>
            </Grid>
          </Grid>
          {!colorOptions.includes('swarthy.png') && (
            <Grid item container xs={12} sm={6} justifyContent='center'>
              <Grid item xs={3}>
                <Button onClick={() => decrementColor()}>
                  <IndeterminateCheckBoxIcon />
                </Button>
              </Grid>
              <Grid item xs={6}>
                {colorOptions?.length && (
                  <FormControl color='primary' size='small' variant='outlined' fullWidth>
                    <InputLabel id='options'>Options</InputLabel>
                    <StyledSelect labelId='options' id='options-select' autoWidth value={color} onChange={(e) => setColor(e.target.value)} label='Options'>
                      {colorOptions.map((option, index) => (
                        <MenuItem key={itemName + option + index} value={option}>
                          {option.slice(0, -4)}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </FormControl>
                )}
              </Grid>
              <Grid item xs={3}>
                <Button onClick={() => incrementColor()}>
                  <AddBoxIcon />
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      )}
    </StyledBoxContainer>
  )
}
