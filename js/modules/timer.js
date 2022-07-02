function timer() {
  /******************************/
  /* ВСТАНОВЛЕННЯ ВІДЛІКУ ЧАСУ */
  let daysTable = document.querySelector('#days');
  let secondsTable = document.querySelector('#seconds');
  let minutesTable = document.querySelector('#minutes');
  let hoursTable = document.querySelector('#hours');

  const timenterv = setInterval(getDuration, 1000);

  function getDuration() {
    let nowDate = new Date();
    let endDate = new Date();
    endDate.setFullYear(2022);
    endDate.setMonth(8);
    endDate.setHours(2, 0, 0);
    if (endDate >= nowDate) {
      let my_time = (endDate - nowDate);
      let days = my_time / 1000 / 60 / 60 / 24;
      let daysRound = Math.floor(days);
      let hours = my_time / 1000 / 60 / 60 - (24 * daysRound);
      let hoursRound = Math.floor(hours);
      let minutes = my_time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
      let minutesRound = Math.floor(minutes);
      let seconds = my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
      let time = hoursRound + ':' + minutesRound + ':' + seconds;

      daysTable.innerHTML = daysRound;
      minutesTable.innerHTML = minutesRound;
      secondsTable.innerHTML = seconds;
      hoursTable.innerHTML = hoursRound;
    } else {
      endDate = nowDate;
      let my_time = (endDate - nowDate);
      let days = my_time / 1000 / 60 / 60 / 24;
      let daysRound = Math.floor(days);
      let hours = my_time / 1000 / 60 / 60 - (24 * daysRound);
      let hoursRound = Math.floor(hours);
      let minutes = my_time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
      let minutesRound = Math.floor(minutes);
      let seconds = my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
      let time = hoursRound + ':' + minutesRound + ':' + seconds;
      daysTable.innerHTML = daysRound;
      minutesTable.innerHTML = minutesRound;
      secondsTable.innerHTML = seconds;
      hoursTable.innerHTML = hoursRound;
    }

  }

}

export default timer;
