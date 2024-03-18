import React, { useRef, useState } from 'react';

// useRef thường dụng để lưu lại giá trị mỗi lần render
const DemoUseRef = () => {
  const [like, setLike] = useState(1);
  // const [state, setState] = useState({
  //   name: '',
  //   content: '',
  // });
  // let userComment = {
  //   name: '',
  //   content: '',
  // };
  let refComment = useRef({
    name: '',
    content: '',
  });
  const handleChangeValue = (e) => {
    let { name, value } = e.target;
    // setState({
    //   ...state,
    //   [name]: value,
    // });
    // userComment[name] = value;
    refComment.current[name] = value;
    console.log('refComment: ', refComment);
  };
  const handleSendComment = () => {
    console.log('refComment', refComment);
  };
  return (
    <div className="container mx-auto space-y-10">
      {/* Gửi bình luận */}

      <h3>Like : {like}</h3>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        tĂNG LIKE{' '}
      </button>
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

export default DemoUseRef;
