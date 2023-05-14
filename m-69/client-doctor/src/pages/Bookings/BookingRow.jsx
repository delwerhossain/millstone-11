import React from "react";

const BookingRow = ({ booking }) => {
  return (
    <tr>
      <th>{}</th>
      <th>
        <img loading="lazy" src={booking.img} alt="" />
      </th>
      <td>{booking.email}</td>
      <td>{booking.service}</td>
      <td>{booking.price}</td>
    </tr>
  );
};

export default BookingRow;
