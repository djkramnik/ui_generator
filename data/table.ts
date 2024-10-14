import { randomItem } from "../components/utils"
import { sizedArray } from "../util"
import { getRandomEmail, getRandomSentence } from "./faker"

export const genDigit = (): number => {
  return randomItem([0,1,2,3,4,5,6,7,8,9])
}

export const genChar = (): string => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return randomItem(letters)
}

export const genDigits = (n: number): string => {
  return sizedArray(n).map(() => genDigit()).join('')
}

export const genAlphanumeric = (n: number): string => {
  return sizedArray(n).map(
    () => Math.random() > 0.5
      ? genChar()
      : genDigit()
  ).join('')
}

export const genFakePrice = (
  digits: number, withCents = true): string => {
  const dollars = `${Math.floor(Math.random() * (10**digits))}`
  const cents = withCents ? Math.random().toFixed(2) : ''
  return `$${dollars}.${cents}`
}

const creditCards = [
  'Visa',
  'Mastercard',
]

const currencies = [
  'CAD',
  'USD'
]

export const genFakeCurrency = () => {
  return randomItem(currencies)
}

export const genFakeCc = () => {
  return `${randomItem(creditCards)} **** ${genDigits(4)}`
}

export const genInvoice = (): string => {
  return `${genAlphanumeric(8)}-${genDigits(4)}`
}

export type ColumnData = {
  key: string
  type: 
    | 'price'
    | 'invoice'
    | 'sentence'
    | 'email'
    | 'date'
    | 'cc'
}

// wtf with the naming
const genColumn = (type: ColumnData['type']): string => {
  switch(type) {
    case 'price':
      return genFakePrice(3)
    case 'invoice':
      return genInvoice()
    case 'sentence':
      return getRandomSentence()
    case 'email':
      return getRandomEmail()
    case 'cc':
      return genFakeCc()
    default:
      return new Date().toLocaleDateString()
  }
}

export const genTableData = ({
  config,
  n,
}: {
  config: ColumnData[]
  n: number
}) => {
  return sizedArray(n)
    .map(() => {
      return config.reduce((acc, c) => {
        return {
          ...acc,
          [c.key]: genColumn(c.type)
        }
      }, {})
    })
}





