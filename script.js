var clicker = getElementById("clicker")
var i = 0
var message = `You tapped ${i} times!`
clicker.oncclick = function(e) {
  while ( i < 100 ) {
  message = `You tapped ${i} times!
  alert(message)
  i++
 }
}
