// rafc

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFontSizeAction } from '../../redux/reducer/FontSizeReducer';

export const ChangeFontSizeRedux = () => {
  // useSelector tương tự mapstatetoprops
  let { fsize, color } = useSelector((state) => state.fsizeReducer);
  //   {fsize:16}
  // hook useDispatch tương tự như  this.props.dispatch
  let dispatch = useDispatch();
  const handleChangeFontSize = (number) => {
    let action = changeFontSizeAction(number);

    dispatch(action);
  };
  return (
    <div className="container mx-auto">
      <h3
        style={{
          fontSize: fsize,
        }}
      >
        Lorem ipsum dolor sit amet.
      </h3>
      <button
        onClick={() => {
          handleChangeFontSize(1);
        }}
        className="bg-blue-500 text-white rounded p-2 mr-5"
      >
        Tăng Font size
      </button>
      <button
        onClick={() => {
          handleChangeFontSize(-1);
        }}
        className="bg-red-500 text-white rounded p-2"
      >
        Giảm Font size
      </button>
    </div>
  );
};

// => biến component thành logic => connect ,
