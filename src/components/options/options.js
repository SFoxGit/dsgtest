import React from 'react'
import useOptionsStore from './utils/options-store'

import {
  StyledOptionsContainer,
  Weapons,
  Robes,
  Accessories,
  Lower,
  Upper,
  Head,
  Body,
  Feet,
  Back,
} from './options.style'

const Options = () => {
  const setOptionsState = useOptionsStore((state) => state.setOptionsState)

  return (
    <StyledOptionsContainer>
      <Weapons>
        <button />
      </Weapons>
      <Robes>
        <button />
      </Robes>
      <Accessories>
        <button />
      </Accessories>
      <Lower>
        <button />
      </Lower>
      <Upper>
        <button />
      </Upper>
      <Head>
        <button onClick={() => setOptionsState('head')} />
      </Head>
      <Body>
        <button />
      </Body>
      <Feet>
        <button />
      </Feet>
      <Back>
        <button />
      </Back>
    </StyledOptionsContainer>
  )
}

export default Options
