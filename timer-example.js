var Timer = Java.type("java.util.Timer")
var TimerTask = Java.type("java.util.TimerTask")
var AE = Java.type("AbstractExample")

/*var timerTask = Java.extend(TimerTask,
  function run () {
      print("10 seconds has elapsed")
})*/

var timerTask = Java.extend(TimerTask, {
  run: function() { print("10 seconds has elapsed")},
  cancel: function() {},
  scheduledExecutionTime: function() {}
})

new java.lang.Thread(new AE()).start()

//var timer = new Timer()
//timer.scheduleAtFixedRate(timerTask, 10, 10 * 5000)
//print("TimerTask started")
