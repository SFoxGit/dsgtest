import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useDebounce } from 'use-debounce'
import useLayerStore from '../../utils/store.js'
import { StyledContainer, SearchOuter } from './search.style.js'

const Search = () => {
  const searchInput = useLayerStore((state) => state.searchInput)
  const setSearchInput = useLayerStore((state) => state.setSearchInput)
  const [text, setText] = useState(searchInput)
  const [value] = useDebounce(text, 500)

  useEffect(() => {
    setSearchInput(value)
  }, [value, setSearchInput])

  return (
    <StyledContainer>
      <SearchOuter>
        <TextField
          id='outlined-controlled'
          label='Search'
          value={text}
          onChange={(event) => {
            setText(event.target.value)
          }}
        />
      </SearchOuter>
    </StyledContainer>
  )
}

export default Search
