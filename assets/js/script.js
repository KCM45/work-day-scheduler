/** @format */
let now = moment();
document.querySelector("#currentDay").textContent = now.format("dddd, MMM Do");

function descColor() {
  for (let i = 9; i < 18; i++) {
    let displayTime =
      now.format("YYYY-MM-DD") +
      "T" +
      ("0" + i.toString()).slice(-2) +
      ":00:00Z";
    displayTime = moment(displayTime);

    // Set description area red if same hour
    if (now.hour() === i) {
      document
        .querySelector(".d" + i.toString())
        .setAttribute(
          "class",
          "description col-10 d" + i.toString() + " col-1 present"
        );
    }

    // Set description area gray if before current time
    else if (displayTime.isBefore(now)) {
      document
        .querySelector(".d" + i.toString())
        .setAttribute(
          "class",
          "description col-10 d" + i.toString() + " col-1 past"
        );
    }
    // Set description area green if after current time
    else if (displayTime.isBefore(now)) {
      document
        .querySelector(".d" + i.toString())
        .setAttribute(
          "class",
          "description col-10 d" + i.toString() + " col-1 future"
        );
    }
  }
}

descColor();
