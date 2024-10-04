// seat increment counter function
function seatIncrement() {
  count = count + 1;
  if (count <= 4) {
    document.getElementById("seat-booked").innerText = count;
    return count;
  }
}

// seat decrement counter function
function seatDecrement(noOfSeat) {
  if (noOfSeat <= 4) {
    let totalSeat = 40;
    seatLefBox = document.getElementById("seats-left");
    seatLefBox.innerText = totalSeat - noOfSeat;
  }
}

// seat booked details function
function seatBookedDetails(event, noOfSeat) {
  if (noOfSeat <= 4) {
    // seat selection and background filled
    const seat = event.target;
    seat.classList.add("bg-green");

    // dynamic seat allocation
    //  seat name catch
    const seatNumber = event.target.innerText;
    // container selection
    const container = document.getElementById("seat-class-price-container-id");
    // dynamic div creation
    const dynDiv = document.createElement("div");
    // div class addition
    dynDiv.classList.add(
      "seat-class-price",
      "font-inter",
      "font-medium",
      "text-sm",
      "grid",
      "grid-flow-col",
      "col-span-3",
      "justify-between",
      "text-[#03071299]",
      "mt-4"
    );
    // div inner HTML set
    dynDiv.innerHTML = `<div id="seat" class="seat pb-1">
                        <h1 id="seat-booked" class="">${seatNumber}</h1>
                        </div>
                        <div id="class" class="class pb-1 pl-5">
                        <h1 id="seat-class">Economy</h1>
                        </div>
                        <div id="price" class="price pb-1 pl-5">
                        <h1 class="per-seat-price">550.00</h1>
                        </div>`;
    // append the dynamic div to container
    container.appendChild(dynDiv);
  } else {
    window.alert("Maximum number of seat purchase exceeds !");
  }
}

// function coupon
function coupon(noOfSeat) {
  if (noOfSeat === 4) {
    const applyBtn = document.getElementById("applyBtn");
    applyBtn.removeAttribute("disabled");
    applyBtn.classList.add("bg-green");
    applyBtn.classList.add("text-white");

    const couponText = document.getElementById("couponText");
    couponText.removeAttribute("disabled");
  }
}

// total price function
function totalPrice(perSeatCost, noOfSeat) {
  if (noOfSeat <= 4) {
    const total = noOfSeat * perSeatCost;
    document.getElementById("total-amount-id").innerText = total;
    document.getElementById("grand-total").innerText = total;
    return total;
  }
}

// grand total value calculation

function grandTotalPrice() {
  const couponValue = document.getElementById("couponText").value;
  const value = couponValue.toLowerCase();

  const total = document.getElementById("total-amount-id").innerText;

  if (value === "new15") {
    const discount = (total * 15) / 100;
    const grandTotal = total - discount;
    document.getElementById("grand-total").innerText = grandTotal;
    const couponContainer = document.getElementById("coupon-container");
    // couponContainer.setAttribute("hidden", true);
    couponContainer.classList.add("hidden");
    console.log(couponContainer);
  } else if (value === "couple20") {
    const discount = (total * 20) / 100;
    const grandTotal = total - discount;
    document.getElementById("grand-total").innerText = grandTotal;
    const couponContainer = document.getElementById("coupon-container");
    couponContainer.setAttribute("hidden", true);
    // couponContainer.classList.add("hidden");
  } else {
    window.alert("Invalid coupon!");
  }
}

// proceed function

function proceed(noOfSeat) {
  const phoneNumberTextBox = document.getElementById("phone-id");
  phoneNumberTextBox.addEventListener("keyup", function (event) {
    const phoneNumber = event.target.value;
    if (!isNaN(phoneNumber) && phoneNumber.trim() !== "") {
      document.getElementById("btn-next").removeAttribute("disabled");
    }
  });
}
