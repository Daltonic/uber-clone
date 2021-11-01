import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
    setOrigin: (state, action) => (state.origin = action.payload),
    setDestination: (state, action) => (state.destination = action.payload),
    setTravelTimeInfo: (state, action) =>
      (state.travelTimeInfo = action.payload),
  },
})

export const { setOrigin, setDestination, setTravelTimeInfo } = navSlice.actions

// Getters functions
export const getOrigin = (state) => state.nav.origin
export const getDestination = (state) => state.nav.destination
export const getTravelTimeInfo = (state) => state.nav.travelTimeInfo

export default navSlice.reducer
