import React from "react";

const BookingRow = ({ booking }) => {
  const { email, img, date, service, price } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
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
        <button className="btn btn-ghost btn-xs border">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
