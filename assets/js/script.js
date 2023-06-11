/** @format */

$(document).ready(function () {
  /** @format */
  let now = moment();

  // Display date
  document.querySelector("#currentDay").textContent =
    now.format("dddd, MMM Do");

  //document.querySelector(".b9").addEventListener(saveTask);

  $(".saveBtn").on("click", function () {
    let rowHour = $(this).parent().attr("data-hour");
    let text = $(this).siblings("textarea").val();
    localStorage.setItem(rowHour, text);
  });

  //function saveTask() {}

  function descColor() {
    // Set color formatting for description text areas

    let momentHour = moment().hour();

    $(".time-block").each(function () {
      let hourRow = parseInt($(this).attr("data-hour"));
      if (hourRow < momentHour) {
        $(this).addClass("past");
      } else if (hourRow === momentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });

    // for (let i = 9; i < 18; i++) {
    //   let displayTime =
    //     now.format("YYYY-MM-DD") +
    //     "T" +
    //     ("0" + i.toString()).slice(-2) +
    //     ":00:00Z";
    //   displayTime = moment(displayTime);

    //   // Set description area red if same hour
    //   if (now.hour() === i) {
    //     document
    //       .querySelector(".d" + i.toString())
    //       .setAttribute(
    //         "class",
    //         "description col-10 d" + i.toString() + " col-1 present"
    //       );
    //   }

    // let frank;
    // frank.classList.add('ketchup', 'mustard');

    //   // Set description area gray if before current time
    //   else if (displayTime.isBefore(now)) {
    //     document
    //       .querySelector(".d" + i.toString())
    //       .setAttribute(
    //         "class",
    //         "description col-10 d" + i.toString() + " col-1 past"
    //       );
    //   }
    //   // Set description area green if after current time
    //   else if (displayTime.isAfter(now)) {
    //     document
    //       .querySelector(".d" + i.toString())
    //       .setAttribute(
    //         "class",
    //         "description col-10 d" + i.toString() + " col-1 future"
    //       );
    //   }
    // }
  }

  $(".d9").val(localStorage.getItem("9"));
  $(".d10").val(localStorage.getItem("10"));
  $(".d11").val(localStorage.getItem("11"));
  $(".d12").val(localStorage.getItem("12"));
  $(".d13").val(localStorage.getItem("13"));
  $(".d14").val(localStorage.getItem("14"));
  $(".d15").val(localStorage.getItem("15"));
  $(".d16").val(localStorage.getItem("16"));
  $(".d17").val(localStorage.getItem("17"));

  descColor();
});
