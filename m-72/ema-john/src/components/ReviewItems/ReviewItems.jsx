import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewItems = ({ product ,handleRemove}) => {
  const { id, img, name, price, quantity, shipping } = product;
  return (
    <div className="flex items-center justify-between rounded-lg border">
      <div className="flex  ">
        <div className="mr-4">
          {" "}
          <img className="m-2 w-20 rounded-lg  border" src={img} alt="" />
        </div>
        <div className="w-2/3">
          <p><span className="font-bold ">Name : </span>{name}</p>
          <p><span className="font-semibold ">Price : </span>{price}</p>
          <p><span className="font-semibold ">Shipping : </span>{shipping}</p>
          <p><span className="font-semibold ">Quantity : </span> {quantity}</p>
        </div>
      </div>
          <div className="mr-2 rounded-full bg-red-200 p-4">
              <button onClick={() => handleRemove(id)} >
        <TrashIcon className="h-6 w-6 text-red-500"></TrashIcon>
                  
              </button>
        
      </div>
    </div>
  );
};

export default ReviewItems;
