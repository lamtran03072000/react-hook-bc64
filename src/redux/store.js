import { configureStore } from '@reduxjs/toolkit';
import FontSizeReducer from './reducer/FontSizeReducer';
import CommentReducer from './reducer/CommentReducer';

export const store = configureStore({
  // state của toàn bộ ứng dụng
  reducer: {
    fsizeReducer: FontSizeReducer,
    commentReducer: CommentReducer,
  },
});
// fsizeReducer.fsize : 16
