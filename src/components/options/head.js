import React from 'react'
import useOptionsStore from './utils/options-store'

import {
  StyledHeadContainer,
  Hair,
  Headgear,
  Hood,
  FacialHair,
  Face,
  Helm,
} from './head.style'
const HeadOptions = () => {
  const setOptionsState = useOptionsStore((state) => state.setOptionsState)

  return (
    <StyledHeadContainer>
      <Hair>
        <button onClick={() => setOptionsState('hair')}/>
      </Hair>
      <Headgear>
        <button onClick={() => setOptionsState('headgear')}/>
      </Headgear>
      <Hood>
        <button onClick={() => setOptionsState('hood')}/>
      </Hood>
      <FacialHair>
        <button onClick={() => setOptionsState('facialhair')}/>
      </FacialHair>
      <Face>
        <button onClick={() => setOptionsState('face')}/>
      </Face>
      <Helm>
        <button onClick={() => setOptionsState('helm')}/>
      </Helm>
    </StyledHeadContainer>
  )
}

export default HeadOptions
