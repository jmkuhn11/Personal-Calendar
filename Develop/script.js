$(function () {
    var dateToday = dayjs();
  $('#currentDay').text(dateToday.format('MMM D, YYYY'));

    var hour = dayjs().format('H');
    
    for (let i = 9; i < 18; i++) {
      if (hour > i) {
        document.getElementById('hour-' + i).classList.add('past');
      } else if (hour == i) {
        document.getElementById('hour-' + i).classList.add('present');
      } else {
        document.getElementById('hour-' + i).classList.add('future');
      }
    }

    restoreEvents();

  var buttonArray = document.getElementsByClassName('saveBtn');

  for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", saveEvent.bind(this, i));
  }

  function saveEvent(i) {
    var textAreaArray = document.getElementsByClassName('description');
    var key = "workEvent" + i;
    var event = textAreaArray[i].value;
    localStorage.setItem(key, event);
  }

  function restoreEvents() {
    var textAreaArray = document.getElementsByClassName('description');
    for (let i = 0; i < textAreaArray.length; i++) {
      var key = "workEvent" + i;
      var event = localStorage.getItem(key);
      textAreaArray[i].value = event;
    }
  }
});
