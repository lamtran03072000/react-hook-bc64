import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseEffect_didmount = () => {
  const [number, setNumber] = useState(3);
  const [arrProduct, setArrProduct] = useState([]);
  useEffect(() => {
    // console.log('lần 1:  chạy sau khi giao diện render xong');
    // console.log(
    //   'lần 2 : chạy sau mỗi lần component render lại (sau khi state thay đổi)',
    // );
    console.log('useEffect chạy');
    getAPIProduct();
  }, []); //dependency là 1 array rỗng thì useEffect chỉ chạy 1 lần sau khi render
  console.log('render giao diện');

  const getAPIProduct = () => {
    let promise = axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: 'GET',
    });
    promise
      .then((res) => {
        let newProduct = res.data.content;
        // sau khi gọi api thành công thì đem dữ liệu đưa vào state và binding ra dữ liệu mới
        setArrProduct(newProduct);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
  return (
    <div>
      <h3>Number : {number}</h3>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="bg-blue-600 text-white rounded p-2"
      >
        +
      </button>

      <h3>Render product</h3>
      <button
        onClick={getAPIProduct}
        className="bg-green-500 text-white rounded p-2"
      >
        Get Api
      </button>

      <div className="flex flex-wrap  space-y-7">
        {arrProduct.map((item) => {
          return (
            <div className="w-1/5  p-5 ">
              <div className="rounded border">
                <img src={item.image} alt="" width={'100%'} height={'40%'} />
                <p className="text-3xl p-2">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffect_didmount;
