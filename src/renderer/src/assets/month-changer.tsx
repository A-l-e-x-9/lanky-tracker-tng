const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const getBody = document.getElementById('lanky-tracker')
let isDST = 0
switch (currentMonth) {
  case 0: //January
    getBody!.style.backgroundColor = '#ffffff' //Makes the background white, because January is the dead of winter!
    break
  case 1: //February
    getBody!.style.backgroundColor = '#ff80ff' //Pink background, for Valentine's Day
    break
  case 2 && isDST === 0: //March, outside of DST
    getBody!.style.backgroundColor = '#00c000' //Green background, for the coming of spring.
    break
  case 2 && isDST === 1: //March, in DST
    getBody!.style.backgroundColor = '#004000' //Green background for St. Patrick's Day and the coming of spring
    break
  case 3: //April
    getBody!.style.backgroundImage = 'linear-gradient(135deg, #004040, #404000, #400020)' //Easter egg background.
    break
  case 4: //May
    getBody!.style.backgroundColor = '#404040' //Gray, dreary background
    break
  case 5: //June
    getBody!.style.backgroundColor = '#002040' //Blue sky-ish background
    break
  case 6: //July
    getBody!.style.backgroundColor = '#404000' //Yellow background for summer
    break
  case 7: //August
    getBody!.style.background = '#000028 url(./smas-smb3-doomship-bg.png) repeat-x bottom fixed'
    getBody!.style.color = '#ffff00' //Stormy theme, also for summer
    break
  case 8: //September
    getBody!.style.backgroundColor = '#402000' //Orange background for fall
    break
  case 9: //October
    getBody!.style.backgroundImage = 'linear-gradient(135deg, #000000, #400000, #000000)'
    getBody!.style.color = '#ff8000' //Halloween theme
    break
  case 10 && isDST === 1: //November, in DST
    getBody!.style.backgroundColor = '#400000' //Red background for late fall
    break
  case 10 && isDST === 0: //November, outside of DST
    getBody!.style.backgroundColor = '#c00000' //Red background for late fall
    break
  case 11: //December
    getBody!.style.backgroundImage = 'linear-gradient(135deg, #00c000, #ffffff, #c00000)' //Christmas background! :D
    break
}

//April Fool's Day special:
const currentDay = currentDate.getDate()
if (currentMonth === 3 && currentDay === 1) {
  getBody!.style.transform = 'rotate(180deg)'
}
