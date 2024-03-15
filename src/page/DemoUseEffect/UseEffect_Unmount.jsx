import React, { useEffect } from 'react';

const UseEffect_Unmount = () => {
  useEffect(() => {
    const timeout = setInterval(() => {
      console.log('call api');
    }, 1000);
    // Return sẽ chạy khi component biến mất khỏi giao diện
    return () => {
      console.log('chạy khi mất khỏi giao diện');
      clearInterval(timeout);
    };
  }, []);
  return <div>UseEffect_Unmount</div>;
};

export default UseEffect_Unmount;

// useState , useEffect
