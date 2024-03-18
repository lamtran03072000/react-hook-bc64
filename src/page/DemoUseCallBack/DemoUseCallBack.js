import React, { useCallback, useState } from 'react';
import CommentChild from './CommentChild';

const DemoUseCallBack = () => {
  const [like, setLike] = useState(0);
  const [number, setNumber] = useState(0);
  const renderLike = () => {
    //111 ///222
    return `Like ${like}`;
  };
  const callBackRenderLike = useCallback(renderLike, [like]);
  return (
    <div className="container mx-auto">
      <p className="text-2xl">Number :{number}</p>
      <button
        className="bg-blue-500 text-white rounded-md p-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Tăng number
      </button>

      <p className="text-2xl">Like :{like}</p>
      <button
        className="bg-red-500 text-white rounded-md p-2"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Tăng Like
      </button>
      <CommentChild renderLike={callBackRenderLike} />
    </div>
  );
};

export default DemoUseCallBack;
