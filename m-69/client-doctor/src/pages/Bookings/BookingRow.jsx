import React from "react";

const BookingRow = ({ booking, handleDelete }) => {
  const { _id, email, img, date, service, price } = booking;

  return (
    <tr>
      <th>
        <label>
          {/* <input type="checkbox" className="checkbox" /> */}
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-600 text-slate-50"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-outline border">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
