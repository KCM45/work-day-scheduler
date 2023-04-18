
let now = dayjs();
let displayDate = document.querySelector("#displayDate");
displayDate.textContent = now.format("dddd, MMM D YYYY");