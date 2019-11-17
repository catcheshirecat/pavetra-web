import capitalize from 'lodash/capitalize'
import moment from 'moment'

moment.locale('be')
const months = generateMonths()

function generateMonths() {
  return Array.from({ length: 12 }, (_, mIndex) => {
    const m = moment().month(mIndex)

    let days = Array.from({ length: m.daysInMonth() }, (_, dIndex) => {
      const date = m.clone().date(dIndex + 1)
      const weekDay = date.day()

      return {
        future: date.isAfter(),
        number: dIndex + 1,
        weekDay: weekDay || 7
      }
    })

    const firstWeekDay = days[0].weekDay
    if (firstWeekDay > 1) {
      const empties = Array.from({ length: firstWeekDay - 1 }, (_, index) => {
        return {
          fake: true,
          number: `start-fake-${index}`
        }
      })
      days = [...empties, ...days]
    }

    const lastWeekDay = days[days.length - 1].weekDay
    if (lastWeekDay < 7) {
      const empties = Array.from({ length: 7 - lastWeekDay }, (_, index) => {
        return {
          fake: true,
          number: `end-fake-${index}`
        }
      })
      days = [...days, ...empties]
    }

    return {
      name: capitalize(m.format('MMMM')),
      days
    }
  })
}

export function getMonths() {
  return months
}
