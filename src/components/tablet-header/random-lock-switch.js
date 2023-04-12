import React from 'react'
import styled from '@emotion/styled'
import Switch from '@mui/material/Switch'
import Random from '../../monochrome/borderless/random.png'
import Locked from '../../monochrome/borderless/locked.png'
import useLayerStore from '../../utils/store'

const RandomIcon = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${Random});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`
const LockIcon = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${Locked});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    grid-area: 1 / 3 / 2 / 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const RandomSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? '#2ECA45'
            : theme.palette.secondary.main,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}))

const RandomLockSwitch = () => {
  const { selectedLayer, layerArr, updateLayer } = useLayerStore((state) => ({
    selectedLayer: state.selectedLayer,
    layerArr: state.layerArr,
    updateLayer: state.updateLayer,
  }))

  const handleChange = () => {
    layerArr[selectedLayer].isLocked = !layerArr[selectedLayer].isLocked
    updateLayer(layerArr[selectedLayer])
  }

  return (
    <StyledContainer>
      <LockIcon />
      <RandomSwitch
        checked={layerArr[selectedLayer].isLocked}
        onChange={() => handleChange()}
      />
      <RandomIcon />
    </StyledContainer>
  )
}

export default RandomLockSwitch
