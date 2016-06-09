// random color generator.

//make sure it gets put on the page



$(document).ready(function() {
  clockPage.init();
})

var clockPage = {

  init: function() {
    setInterval(function() {
      clockPage.timing()
    },1000)
  },

  timing: function() {
    var $hour = $('#hours');
    var $minute = $('#minutes');
    var $seconds = $('#seconds');
    var actualTime = clockPage.getTime();
    $hour.html(actualTime[0] + ":")
    $minute.html(actualTime[1] + ":")
    $seconds.html(actualTime[2])
  },
  getTime: function() {

    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    return [hours, minutes, seconds];
  }
}
