import React from 'react'
import TextField from '@mui/material/TextField'
import useLayerStore from '../../utils/store'
import { StyledContainer, SearchOuter } from './search.style'

const Search = () => {
  const searchInput = useLayerStore((state) => state.searchInput)
  const setSearchInput = useLayerStore((state) => state.setSearchInput)

  return (
    <StyledContainer>
      <SearchOuter>
        <TextField
          id='outlined-controlled'
          label='Search'
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value)
          }}
        />
      </SearchOuter>
    </StyledContainer>
  )
}

export default Search
