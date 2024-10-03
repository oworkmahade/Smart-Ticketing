// seat booked
let count = 0;
let perSeatCost = 550.0;

function seatBooked(event) {
  const noOfSeat = seatIncrement(count);
  seatBoundary(noOfSeat);
  seatBookedDetails(event);
  coupon(noOfSeat);
  seatDecrement(noOfSeat);
  const totalSeatPrice = totalPrice(perSeatCost, noOfSeat);
  proceed(noOfSeat);
}

function grandTotal() {
  grandTotalPrice();
}
