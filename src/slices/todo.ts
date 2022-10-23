import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  todoList: Array<string>;
}

const initialState: InitialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    addTimestamp: (state) => {
      state.todoList.push(Date.now().toString());
    },
  },
});

export const { addTodo, addTimestamp } = todoSlice.actions;

export default todoSlice.reducer;
