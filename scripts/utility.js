// seat increment counter function
function seatIncrement() {
  count = count + 1;
  document.getElementById("seat-booked").innerText = count;
  return count;
}

// seat booked details function
function seatBookedDetails(event) {
  // seat selection and background filled
  const seat = event.target;
  seat.classList.add("bg-green");

  // const seats = document.querySelectorAll(".btn");

  // for (const seat of seats) {
  //   seat.addEventListener("click", function () {
  //     seat.classList.add("bg-green");
  //   });
  // }

  // seats.forEach((seat) => {
  //   seat.addEventListener("click", function () {
  //     seat.classList.add("bg-green");
  //   });

  //   seat.addEventListener("dblclick", function () {
  //     seat.classList.remove("bg-green");
  //   });
  // });

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
}

// function coupon
function coupon(count) {
  if (count === 3) {
    const applyBtn = document.getElementById("applyBtn");
    applyBtn.removeAttribute("disabled");
    applyBtn.classList.add("bg-green");
    applyBtn.classList.add("text-white");

    const couponText = document.getElementById("couponText");
    couponText.removeAttribute("disabled");
  }
}
