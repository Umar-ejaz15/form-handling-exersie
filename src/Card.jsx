import React from "react";

function Card({ user , key }) {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs sm:max-w-[200px]">
          <img
            src={user.url}
            alt="Card Image"
            className="w-full h-24 object-cover"
          />
          <div className="p-2">
            <h2 className="text-base font-bold mb-1">{user.name}</h2>
            <p className="text-gray-700 text-xs">
              {user.text}
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Card;
