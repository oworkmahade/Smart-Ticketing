// seat booked
let count = 0;

function seatBooked(event) {
  const btnCount = seatIncrement(count);
  seatBookedDetails(event);
  coupon(count);
  seatDecrement(count);
}
