
/*
  WEDDING COUNTDOWN
  January 29, 2027
*/
const weddingDate =
  new Date("2027-01-29T00:00:00+08:00");


function updateWeddingCountdown() {

  const now = new Date();

  const remainingTime =
    weddingDate.getTime() - now.getTime();


  const daysElement =
    document.getElementById(
      "countdownDays"
    );

  const hoursElement =
    document.getElementById(
      "countdownHours"
    );

  const minutesElement =
    document.getElementById(
      "countdownMinutes"
    );

  const secondsElement =
    document.getElementById(
      "countdownSeconds"
    );


  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {
    return;
  }


  /*
    Wedding day has arrived.
  */
  if (remainingTime <= 0) {

    daysElement.textContent =
      "000";

    hoursElement.textContent =
      "00";

    minutesElement.textContent =
      "00";

    secondsElement.textContent =
      "00";

    return;
  }


  const days = Math.floor(
    remainingTime /
    (1000 * 60 * 60 * 24)
  );


  const hours = Math.floor(
    (
      remainingTime %
      (1000 * 60 * 60 * 24)
    ) /
    (1000 * 60 * 60)
  );


  const minutes = Math.floor(
    (
      remainingTime %
      (1000 * 60 * 60)
    ) /
    (1000 * 60)
  );


  const seconds = Math.floor(
    (
      remainingTime %
      (1000 * 60)
    ) /
    1000
  );


  daysElement.textContent =
    String(days).padStart(3, "0");


  hoursElement.textContent =
    String(hours).padStart(2, "0");


  minutesElement.textContent =
    String(minutes).padStart(2, "0");


  secondsElement.textContent =
    String(seconds).padStart(2, "0");
}


/*
  Run immediately when the page loads.
*/
updateWeddingCountdown();


/*
  Update once every second.
*/
setInterval(
  updateWeddingCountdown,
  1000
);
