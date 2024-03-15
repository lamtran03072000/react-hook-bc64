// rafce => cú pháp tạo nhanh function component
import React, { useState } from 'react';

const DemoUseState = () => {
  // Chỉ có function component mới xài được hook

  const [like, setLike] = useState(100);
  const [view, setView] = useState(15);
  // //   state = {
  //     comment : 2,
  //     tim : 3
  // }
  const [state, setState] = useState({
    comment: 2,
    tim: 3,
  });
  //   const [comment,setComment] = useState(2)
  //   const [tim,setTim] = useState(3)
  return (
    <div>
      <p>Like : {like}</p>
      <button
        onClick={() => {
          let newState = like + 1;
          //   Tương tự như setState
          setLike(newState);
        }}
        className="bg-blue-400 text-white rounded"
      >
        Tăng Like
      </button>

      <h3>View :{view} </h3>
      <button
        onClick={() => {
          let newState = view + 2;
          setView(newState);
        }}
        className="bg-green-400 text-white hover:bg-red-700 duration-200"
      >
        Tăng View
      </button>

      <h3>Comment : {state.comment}</h3>
      <button
        onClick={() => {
          setState({
            ...state,
            comment: state.comment + 1,
          });
        }}
        className="bg-yellow-400 text-white hover:bg-red-700 duration-200"
      >
        Tăng Comment
      </button>
      <h3>Tim : {state.tim}</h3>
      <button
        onClick={() => {
          setState({
            ...state,
            tim: state.tim + 1,
          });
        }}
        className="bg-gray-900 text-white hover:bg-red-700 duration-200"
      >
        Tăng Tim
      </button>
    </div>
  );
};

export default DemoUseState;
