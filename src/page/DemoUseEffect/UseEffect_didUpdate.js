import React, { useEffect, useState } from 'react';

export default function UseEffect_didUpdate() {
  const [like, setLike] = useState(1);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log('useEffect chạy');
    // giá trị trong dependency nào thay đổi thì hàm này sẽ kích hoạt (Thường dùng cho việc call API của trang detail, edit ....)
  }, [number]);
  return (
    <div className="container mx-auto">
      <h3>Like : {like}</h3>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
        className="bg-blue-600 text-white rounded p-2"
      >
        + LIke
      </button>
      <h3>Number : {number}</h3>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="bg-green-600 text-white rounded p-2"
      >
        {' '}
        + Number
      </button>
    </div>
  );
}
