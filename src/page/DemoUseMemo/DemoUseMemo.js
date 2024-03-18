import React, { useMemo, useState } from 'react';
import CartChild from './CartChild';

const DemoUseMemo = () => {
  const [like, setLike] = useState(0);
  const arrCart = [
    { id: 1, name: 'iphone', price: 300 },
    { id: 1, name: 'samsung', price: 400 },
    { id: 1, name: 'blackbery', price: 500 },
  ]; //111 => //333
  // sử dụng catch lại array , object
  const cartUseMemo = useMemo(() => {
    return arrCart;
  }, [like]); ///222
  return (
    <div className="container mx-auto">
      <p className="text-2xl">Like :{like}</p>
      <button
        className="bg-red-500 text-white rounded-md p-2"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Tăng Like
      </button>
      <CartChild arrCart={cartUseMemo} />
    </div>
  );
};

export default DemoUseMemo;
