// seat booked
let count = 0;
let perSeatCost = 550.0;

function seatBooked(event) {
  const noOfSeat = seatIncrement(count);
  seatBookedDetails(event, noOfSeat);
  coupon(noOfSeat);
  seatDecrement(noOfSeat);
  totalPrice(perSeatCost, noOfSeat);
  proceed(noOfSeat);
}

function grandTotal() {
  grandTotalPrice();
}
