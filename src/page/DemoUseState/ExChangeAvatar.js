// rafce

import React, { useState } from 'react';

const ExChangeAvatar = () => {
  const [number, setNumber] = useState(30);
  const [fsize, setFsize] = useState(30);
  return (
    <div className="container mx-auto">
      <h3>
        Bài tập state : change avatar {number} , {fsize}
      </h3>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={`https://i.pravatar.cc?u=${number}`}
            alt
          />
        </a>
        <div className="p-5">
          <button
            onClick={() => {
              setNumber(number - 1);
            }}
            className="bg-blue-600 text-white rounded p-2 mr-3"
          >
            Pre avatar
          </button>
          <button
            onClick={() => {
              setNumber(number + 1);
            }}
            className="bg-green-600 text-white rounded p-2"
          >
            Next avatar
          </button>
        </div>
      </div>

      <h3>Bài tập change font size</h3>

      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 space-y-6">
        <p
          style={{
            fontSize: fsize,
          }}
          className={`text-white`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
          praesentium!
        </p>
        <button
          onClick={() => {
            setFsize(fsize + 1);
          }}
          className="bg-blue-600 text-white rounded"
        >
          Tăng font-size
        </button>
      </div>
    </div>
  );
};

export default ExChangeAvatar;
