import React, { useEffect, useState } from 'react'
import { Divider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { StyledContainer } from './styles'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined'
import Switch from '@mui/material/Switch'
import data from '../../utils/dataV2'
import SelectorComponent from '../selector-with-increment/selector-component'

export default function OffHand({ setLayerArr, layerArr }) {
  const [checked, setChecked] = useState(false)
  const weaponOptions = Object.keys(data.Off_Hand)
  const [showOffHand, setShowOffHand] = useState(false)
  const [weapon, setWeapon] = useState(layerArr[2].assetName)
  const weaponIndex = weaponOptions.indexOf(weapon)
  const weaponColorOptions = data.Off_Hand[weapon]
  const [weaponColor, setWeaponColor] = useState(layerArr[2].color)
  const weaponColorIndex = weaponColorOptions.indexOf(weaponColor)
  const sleeveOptions = Object.keys(data.Sleeves)
  const [sleeve, setSleeve] = useState(layerArr[3].assetName)
  const sleeveIndex = sleeveOptions?.indexOf(sleeve)
  const sleeveColorOptions = data.Sleeves[sleeve] || data.Sleeves.Bracer
  const [sleeveColor, setSleeveColor] = useState(layerArr[3].color)
  const sleeveColorIndex = sleeveColorOptions?.indexOf(sleeveColor)

  // const isMobile = window.matchMedia('(max-width: 420px)').matches
  const updateCheckedState = () => {
    setChecked(!checked)
    setShowOffHand(!checked)
    const updatedLayerArr = layerArr
    updatedLayerArr[1].display = !checked
    updatedLayerArr[2].display = !checked
    updatedLayerArr[3].display = !checked
    setLayerArr([...updatedLayerArr])
  }
  useEffect(() => {
    if (!sleeveColorOptions.includes(sleeveColor)) {
      setSleeveColor(sleeveColorOptions[0])
    }
  }, [sleeveColor, sleeveColorOptions])
  useEffect(() => {
    const weaponObject = { layerType: 'Off_Hand', assetName: weapon, color: weaponColor, isOpen: true, isLocked: false, display: checked }
    const sleeveObject = { layerType: 'Sleeves', assetName: sleeve, color: sleeveColor, isOpen: true, isLocked: false, display: checked }
    if (
      layerArr[1].display !== checked ||
      layerArr[2].assetName !== weapon ||
      layerArr[2].color !== weaponColor ||
      layerArr[3].assetName !== sleeve ||
      layerArr[3].color !== sleeveColor
    ) {
      layerArr[1].display = checked
      layerArr[2] = weaponObject
      layerArr[3] = sleeveObject
      setLayerArr([...layerArr])
    }
  }, [layerArr, checked, weapon, weaponColor, sleeve, sleeveColor, setLayerArr])
  return (
    <StyledContainer expand={showOffHand}>
      <Grid container>
        <Grid item container xs={6} alignItems='center'>
          <Typography variant='h5' color='primary'>
            Off Hand
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Switch checked={checked} onChange={() => updateCheckedState()} inputProps={{ 'aria-label': 'off hand switch' }} />
        </Grid>
        <Grid item xs={3}>
          {checked && <Button onClick={() => setShowOffHand(!showOffHand)}>{showOffHand ? <UnfoldLessOutlinedIcon /> : <ExpandCircleDownOutlinedIcon />}</Button>}
        </Grid>
      </Grid>
      {showOffHand && (
        <>
          <Divider />
          <SelectorComponent index={weaponIndex} assetOptions={weaponOptions} setAsset={setWeapon} asset={weapon} labelText='Options' />
          <SelectorComponent index={weaponColorIndex} assetOptions={weaponColorOptions} setAsset={setWeaponColor} asset={weaponColor} labelText='Color-Options' />
          <Divider />
          <SelectorComponent index={sleeveIndex} assetOptions={sleeveOptions} setAsset={setSleeve} asset={sleeve} labelText='Sleeve' />
          <SelectorComponent index={sleeveColorIndex} assetOptions={sleeveColorOptions} setAsset={setSleeveColor} asset={sleeveColor} labelText='Sleeve Color' />
        </>
      )}
    </StyledContainer>
  )
}
