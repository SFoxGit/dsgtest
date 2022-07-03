import React, { useEffect, useState } from 'react'
import newData from '../../utils/newData'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import styled from '@emotion/styled'
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined'

const StyledBoxContainer = styled(Paper)`
  border: 1px solid;
  border-radius: 5px;
  background-color: white;
`

const StyledDivider = styled(Divider)`
  border: 1px solid ${(props) => props.theme.palette.muted.main};
  width: 100%;
`

const StyledSelect = styled(Select)`
  .MuiInputBase-input {
    padding: 8px 16px;
  }
`

const StyledIconContainer = styled(Grid)`
  & > * {
    display: flex;
    justify-content: center;
  }
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
        // setItemType(Object.keys(Accessories)[0])
        break
      case 'Face':
        setItemTypeOptions(Object.keys(Face))
        // setItemType(Object.keys(Face)[0])
        break
      case 'Feet':
        setItemTypeOptions(Object.keys(Feet))
        // setItemType(Object.keys(Feet)[0])
        break
      case 'Hair':
        setItemTypeOptions(Object.keys(Hair))
        // setItemType(Object.keys(Hair)[0])
        break
      case 'Hat':
        setItemTypeOptions(Object.keys(Hat))
        // setItemType(Object.keys(Hat)[0])
        break
      case 'Lower':
        setItemTypeOptions(Object.keys(Lower))
        // setItemType(Object.keys(Lower)[0])
        break
      case 'Upper':
        setItemTypeOptions(Object.keys(Upper))
        // setItemType(Object.keys(Upper)[0])
        break
      default:
        break
    }
  }, [itemName, Accessories, Face, Feet, Hair, Hat, Lower, Upper])

  useEffect(() => {
    if (!itemType) {
      setItemType(itemTypeOptions[0])
    }
  }, [setItemType, itemTypeOptions, itemType])

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
    if (colorOptions?.length && color === (null || '')) {
      setColor(colorOptions[0])
    }
  }, [setColor, colorOptions, color])

  useEffect(() => {
    if (color?.length && (layerArr[layerIndex].type !== itemType || layerArr[layerIndex].color !== color)) {
      layerArr[layerIndex] = { layerType: itemObj.layerType, type: itemType, color: color }
      setLayerArr([...layerArr])
    }
  }, [color, layerArr, setLayerArr, layerIndex, itemType, itemObj.layerType])
  return (
    <StyledBoxContainer>
      <Grid container alignItems='center' px={2}>
        <Grid item xs={3}>
          <Typography variant='h5' color='primary'>
            {itemName}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {!showOptions && (
            <Typography variant='body1' color='primary' ml={2}>
              {itemType.split('_').join(' ')}
            </Typography>
          )}
        </Grid>
        <StyledIconContainer item container xs={6}>
          <Grid item xs={3}>
            {layerIndex !== 1 && (
              <Button onClick={() => moveItem(layerIndex - 1)}>
                <KeyboardArrowUpIcon />
              </Button>
            )}
          </Grid>
          <Grid item xs={3}>
            {layerIndex !== layerArr.length - 1 && (
              <Button onClick={() => moveItem(layerIndex + 1)}>
                <KeyboardArrowDownIcon />
              </Button>
            )}
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => setShowOptions(!showOptions)}>{showOptions ? <UnfoldLessOutlinedIcon /> : <ExpandCircleDownOutlinedIcon />}</Button>
          </Grid>
          <Grid item xs={3} direction='row' justifyContent='center'>
            <Button onClick={() => deleteItem()}>
              <DeleteIcon />
            </Button>
          </Grid>
        </StyledIconContainer>
      </Grid>
      {showOptions && <StyledDivider variant='fullWidth' />}
      {showOptions && (
        <Grid container rowSpacing={1} alignItems='center' p={1} spacing={2}>
          <Grid item xs={4} sm={2} direction='row' justifyContent='flex-end'>
            <Typography variant='body1' align='center'>
              Item Type
            </Typography>
          </Grid>
          <Grid item xs={8} sm={4}>
            <FormControl fullWidth>
              <StyledSelect value={itemType} p={0} onChange={(e) => setItemType(e.target.value)} inputProps={{ 'aria-label': 'Without label' }}>
                {itemTypeOptions.map((option, index) => (
                  <MenuItem key={itemName + option + index} value={option}>
                    <Typography variant='body1'>{option.split('_').join(' ')}</Typography>
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography variant='body1' align='center'>
              Options
            </Typography>
          </Grid>
          <Grid item xs={8} sm={4}>
            {colorOptions?.length && (
              <FormControl fullWidth>
                <StyledSelect value={color} onChange={(e) => setColor(e.target.value)} inputProps={{ 'aria-label': 'Without label' }}>
                  {colorOptions.map((option, index) => (
                    <MenuItem key={itemName + option + index} value={option}>
                      {option.slice(0, -4)}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </FormControl>
            )}
          </Grid>
        </Grid>
      )}
    </StyledBoxContainer>
  )
}
