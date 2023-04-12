import React, { useState } from 'react'
import { StyledColorContainer, ColorImage } from './individual-color.style'
import useLayerStore from '../../../utils/store'
import colors from '../../../utils/colors'
import BorderContainer from '../../border-container/border-container'
import Tooltip from '@mui/material/Tooltip'

const IndividualColor = ({ color, primary }) => {
  const setColor = useLayerStore((state) => state.setColor)
  const setSecondary = useLayerStore((state) => state.setSecondary)
  const [background, setBackground] = useState('white')
  const hex = colors.find((colorObject) => colorObject.fileName === color).hex
  const onClickColor = () => {
    if (primary) {
      setColor(color)
    } else {
      setSecondary(color)
    }
  }

  return (
    <StyledColorContainer
      onClick={() => onClickColor()}
      onMouseEnter={() => setBackground('#bccccc')}
      onMouseLeave={() => setBackground('white')}
    >
      <BorderContainer inner={background}>
        <Tooltip
          title={
            colors.find((colorObject) => colorObject.fileName === color).name
          }
          arrow
        >
          <div>
            <ColorImage hex={hex} />
          </div>
        </Tooltip>
      </BorderContainer>
    </StyledColorContainer>
  )
}

export default IndividualColor
