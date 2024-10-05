// seat booked
let count = 0;
let perSeatCost = 550.0;

function seatBooked(event) {
  const seat = event.target;
  // conditional stopping execution
  if (seat.classList.contains("bg-green")) {
    window.alert("Seat already selected !");
    return;
  }

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
