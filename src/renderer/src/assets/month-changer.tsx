const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const getBody = document.getElementById('lanky-tracker')
switch (currentMonth) {
  case 0: //January
    getBody!.style.backgroundColor = '#ffffff' //Makes the background white, because January is the dead of winter!
    break
  case 1: //February
    getBody!.style.backgroundColor = '#ff80ff' //Pink background, for Valentine's Day
    break
  case 2: //March, outside of DST
    getBody!.style.backgroundColor = '#00c000' //Green background, for the coming of spring.
    break
  //See the DST version of this file for the other months.
  case 10: //November, outside of DST
    getBody!.style.backgroundColor = '#c00000' //Red background for late fall
    break
  case 11: //December
    getBody!.style.backgroundImage = 'linear-gradient(135deg, #00c000, #ffffff, #c00000)' //Christmas background! :D
    break
}
