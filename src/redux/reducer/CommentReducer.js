// rxslice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userComment: {
    name: '',
    content: '',
  },
  arrComment: [
    {
      name: 'Lâm',
      content: 'Hello bc 64',
    },
    {
      name: 'Nam',
      content: 'Hello cybersoft',
    },
  ],
};

const CommentReducer = createSlice({
  name: 'CommentReducer',
  initialState,
  reducers: {
    updateUserCommentAction: (state, action) => {
      console.log('payload', action.payload);
      let { name, value } = action.payload;
      state.userComment[name] = value;
    },
    postCommentAction: (state, action) => {
      state.arrComment.push(state.userComment);
    },
  },
});

export const { postCommentAction, updateUserCommentAction } =
  CommentReducer.actions;

export default CommentReducer.reducer;
