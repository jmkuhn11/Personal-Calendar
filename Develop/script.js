$(function () {
  //After putting a script section in the header linking a cdn, this code adds the current date to the top of the page.
    var dateToday = dayjs();
  $('#currentDay').text(dateToday.format('MMM D, YYYY'));
  //I also needed to add the current hour to the code, but not display it. I then run a for loop on each "id hour" listed on the schdeule.
  //If the hour has already passed, the box displays gray. If it is currently that hour, it displays red. And if it's has yet to come, green.
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

  //Run the function I setup later on in the file.
    restoreEvents();
  //I created an array consisting of all of the individual buttons for each hour block on the schedule.
  //Then I added a clicking component to each button, where clicking runs a function.
  var buttonArray = document.getElementsByClassName('saveBtn');

  for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", saveEvent.bind(this, i));
  }

  //This function saves what the user inputs in the schedule to the local storage. It is activated when the corresponding button is clicked.
  function saveEvent(i) {
    var textAreaArray = document.getElementsByClassName('description');
    var key = "workEvent" + i;
    var event = textAreaArray[i].value;
    localStorage.setItem(key, event);
  }

  //This function is run when the page is loaded, and retreives the elements previously sent to local storage and puts them on the page.
  function restoreEvents() {
    var textAreaArray = document.getElementsByClassName('description');
    for (let i = 0; i < textAreaArray.length; i++) {
      var key = "workEvent" + i;
      var event = localStorage.getItem(key);
      textAreaArray[i].value = event;
    }
  }
});
