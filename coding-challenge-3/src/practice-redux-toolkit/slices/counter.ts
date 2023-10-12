import { createSlice } from '@reduxjs/toolkit'

type CounterState = {
  counter: number
}

const initialCounterState: CounterState = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter = state.counter + 1
    },
  },
})

export const CounterSliceAction = counterSlice.actions

// export const {increment, decrment} = coutnerSlice.actions

export default counterSlice.reducer
