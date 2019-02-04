export const formatUnixToFullDay = unixDate => {
  return `${formatUnixToDay(unixDate)} ${formatUnixToHours(unixDate)}`
}

export const formatUnixToDay = unixDate => {
  const date = formatUnixToDate(unixDate)
  return formatToDay(date)
}

export const formatUnixToTodayOrTomorrow = unixDate => {
  const date = formatUnixToDate(unixDate)
  const current = new Date()
  if (date.getDay() === current.getDay()) {
    return 'Today'
  } else {
    return 'Tomorrow'
  }
}

export const formatToDay = date => {
  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  }
  return date.toLocaleDateString('en-US', options)
}
export const formatUnixToHours = unixDate => {
  const date = formatUnixToDate(unixDate)
  return `${addLeadZero(date.getHours())}:${addLeadZero(date.getMinutes())}`
}

const formatUnixToDate = date => {
  return new Date(date * 1000)
}

const addLeadZero = i => {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

/* 

    MOST UNPERFORMANT FUNCTION 

    OpenWeatherMap dosn't allow you to get daily forecast by free
    this function groups 3 hour forecast to daily forecast

    - Needs to be more efficient

*/

export const formatHoursToDays = hours => {
  var k,
    item,
    fullDate,
    newTextDate,
    newDate,
    dateHours,
    days = []
  const regexForHours = /(5|8|14|17|20)/

  for (k = hours.length - 1; k >= 0; --k) {
    item = hours[k]
    newTextDate = item.dt_txt.split(' ')[0]
    newDate = new Date(newTextDate)
    fullDate = new Date(item.dt * 1000)
    dateHours = `${fullDate.getHours()}`

    const arrayIndex = days.map(el => el.txt_date).indexOf(newTextDate)
    if (arrayIndex > -1 && days[arrayIndex]) {
      if (dateHours.match(regexForHours)) {
        days[arrayIndex].weathers = {
          ...days[arrayIndex].weathers,
          [dateHours]: {
            description: item.weather[0].description,
            icon: item.weather[0].icon,
            temp: item.main.temp,
            unixDate: item.dt,
          },
        }
      }
    } else {
      days.push({
        date: newDate,
        txt_date: newTextDate,
        weathers:
          (dateHours.match(regexForHours) && {
            [dateHours]: {
              description: item.weather[0].description,
              icon: item.weather[0].icon,
              temp: item.main.temp,
              unixDate: item.dt,
            },
          }) ||
          {},
      })
    }
  }

  return days.reverse()
}
