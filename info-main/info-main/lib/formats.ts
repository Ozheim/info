import { DateTime, Duration } from 'luxon'

/* Price 0 to 0.00€ */
export const formatPrice = (price?: number, currency = 'EUR'): string => {
  if (!price) price = 0
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency }).format(price)
}

/* 120 to 02:00 */
export const minuteToHour = (minutes: number): string => {
  const duration = Duration.fromObject({ minutes })
  return duration.toFormat('hh:mm')
}

/* 120 to 2 heures, 60 to 1 heure, 75 to 1heure 15 minutes */
export const formatMinutesToString = (minutes: number): string => {
  const duration = Duration.fromObject({ minutes })
  const hours = duration.as('hours') | 0 // Récupère la partie entière des heures
  const remainingMinutes = duration.minutes % 60

  if (hours > 0 && remainingMinutes > 0) {
    return `${hours} heure${hours > 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`
  } else if (hours > 0) {
    return `${hours} heure${hours > 1 ? 's' : ''}`
  } else {
    return `${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`
  }
}

/* snowboard to Snowboard */
export const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

/* snowboard to snow... */
export const trim = (word: string, nbCharacters: number): string => {
  return word.slice(0, nbCharacters) + (word.length > nbCharacters ? '...' : '')
}

/* DateTime to 12:00 */
export const dateTimeToHour = (dt: DateTime): string => {
  return dt.toFormat('HH:mm')
}

/* DateTime to 12h ou 12h50 */
export const dateTimeToShortHour = (dt: DateTime): string => {
  // const hour = dt.hour
  // const minute = dt.minute
  // return minute === 0 ? `${hour}h` : dt.toFormat("HH'h'mm")
  return dt.toFormat("HH'h'mm")
}

/* '2023-06-19T08:56:17+0000' to '19 juin 2023' */
export const formatDate = (date: string | null): string | null => {
  if (!date) return null
  return DateTime.fromISO(date).toFormat('dd LLLL yyyy')
}

/* "L'île d'Oléron" to "liledoleron" */
export function formatString(input?: string): string {
  if (!input) return ''
  // Supprime tous les espaces
  let formattedString = input.replace(/\s/g, '')

  // Supprime les accents
  formattedString = formattedString.normalize('NFD').replace(/[\u0300-\u036F]/g, '')

  // Supprime les caractères spéciaux
  formattedString = formattedString.replace(/[^a-zA-Z0-9]/g, '')

  // Convertit en minuscules
  formattedString = formattedString.toLowerCase()

  return formattedString
}

/**
 * some strings in db have no # prefix
 *  */
export const stringToHex = (hexStr: string) => {
  return '#' + hexStr.replace('#', '')
}

// 2022-09-22T14:30:00.000+02:00 to sam. 22/09
export const dateTimeToShortDate = (dt: DateTime): string => {
  return dt.toFormat('EEE dd/MM')
}

/**
 * Converts a time range to a short date string for display.
 * @param {DateTime} range.startTime - The start time as a Luxon DateTime object.
 * @param {DateTime} range.endTime - The end time as a Luxon DateTime object.
 *
 * @returns {string} example: "le 22/09" or "du 22/09 au 23/09"
 */
export const formatTimeRangeToString = (range: { startTime: DateTime; endTime: DateTime }): string => {
  const startTime = dateTimeToShortDate(range.startTime)
  const endTime = dateTimeToShortDate(range.endTime)

  if (startTime === endTime) {
    return `Le ${endTime}`
  } else {
    return `Du ${startTime} au ${endTime}`
  }
}

/* Accept only number */
export const onlyNumbers = (event: KeyboardEvent) => {
  const char = event.key
  const isNumber = /^\d$/.test(char)

  const specialKeys: string[] = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab']

  if (!isNumber && !specialKeys.includes(char)) {
    event.preventDefault() // prevent character from being entered
  }
}

// [Monday, Tuesday] to Lu, Ma
export const convertDaysToFrenchPrefix = (days: string[]): string => {
  const daysOpts: Record<string, string> = {
    Monday: 'Lu',
    Tuesday: 'Ma',
    Wednesday: 'Me',
    Thursday: 'Je',
    Friday: 'Ve',
    Saturday: 'Sa',
    Sunday: 'Di',
  }
  const orderedDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const prefixes = orderedDays
    .filter((orderedDay) => days.includes(orderedDay))
    .map((orderedDay) => daysOpts[orderedDay])

  return prefixes.join(', ')
}
