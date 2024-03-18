import React from 'react';
import {
  postCommentAction,
  updateUserCommentAction,
} from '../../redux/reducer/CommentReducer';
import { useDispatch, useSelector } from 'react-redux';

const ComentRedux = () => {
  let { arrComment } = useSelector((state) => state.commentReducer);
  let dispatch = useDispatch();
  const handleChangeValue = (e) => {
    let { name, value } = e.target;

    const payload = {
      name: name, //tên trường đang nhập
      value: value, // giá trị trường đang nhập
    };

    let action = updateUserCommentAction(payload);
    dispatch(action);
  };
  const handleRenderListComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div key={index} className="flex space-x-5 bg-gray-300 p-1 rounded-lg">
          <img
            src={`https://i.pravatar.cc?u=${comment.name}`}
            width={50}
            alt=""
          />
          <div>
            <p>{comment.name}</p>
            <p>{comment.content}</p>
          </div>
        </div>
      );
    });
  };
  const handleSendComment = () => {
    let action = postCommentAction();
    dispatch(action);
  };
  return (
    <div className="container mx-auto space-y-10">
      <h3>Ứng dụng bình luận</h3>
      {/* Chứa bình luận */}
      {/* Binding ra arr comment */}

      <div className="border rounded p-3 space-y-3">
        {handleRenderListComment()}
      </div>
      {/* Gửi bình luận */}
      <div className="border rounded p-3 space-y-5">
        <div>
          <label className="w-full text-2xl font-medium">Nhập tên</label>
          <input
            name="name"
            onInput={handleChangeValue}
            className="border w-full border-blue-400"
            type="text"
          />
        </div>
        <div>
          <label className="w-full text-2xl font-medium"> Content</label>
          <input
            name="content"
            onInput={handleChangeValue}
            className="border w-full border-blue-400"
            type="text"
          />
        </div>

        <button
          onClick={handleSendComment}
          className="bg-green-500 text-white rounded-lg p-2"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ComentRedux;
