export const pick = <T extends object = object>(obj: T, keys: string[]): Partial<T> => {
  return Object.entries(obj)
    .reduce((acc, [key, val]) => {
      if (keys.includes(key)) {
        return {
          ...acc,
          [key]: val,
        }
      }
      return acc
    }, {})
}

export const randomPick = (min: number, max: number) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomItem = <T extends any = any>(arr: T[]): T => {
  return randomPick(0, arr.length - 1) as T
}

export const shuffle = (arr: any[]): any[] => {
  const randomDict: Record<string, number> = arr.reduce((acc, item) => {
    return {
      ...acc,
      [item]: Math.random()
    }
  }, {})

  return arr.slice(0).sort((a, b) => {
    return (randomDict[a] ?? 0) - (randomDict[b] ?? 0)
  })
}