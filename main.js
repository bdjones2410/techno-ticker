// random color generator.

// the clock should update every second or we will be late

//make sure it gets put on the page

function getTime(){
  var time = new Date();

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  return [hours, minutes, seconds];
}
