import React from "react";
import Card from "./Card";

function Cards({ user }) {
  return (
    <div className=" flex flex-wrap gap-5 overflow-auto   p-16  w-full max-h-80 ">
      {user.map((item, index) => {
        return <Card user={item} key={index} />;
      })}
    </div>
  );
}

export default Cards;
