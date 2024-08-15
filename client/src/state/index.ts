import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InitialStateTypes {
  isSidebarCollapsed: boolean
  isDarkMode: boolean
}

const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
}

// *Global Slice
export const globalSlice = createSlice({
  name: 'global', // this is the name of the slice
  initialState, // initial state
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload
      // this basically means that the state.isSidebarCollapsed will be set to the payload . payload is the value that is passed to the action
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload
    },
  },
})

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions

export default globalSlice.reducer
