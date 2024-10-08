import { GoogleSearchResultProps } from "../components/lib/super_components";
import { randomPick } from "../components/utils";
import { sizedArray } from "../util";
import { getRandomName, getRandomSearchResult, getRandomSentence, getRandomTag, getRandomWebsite } from "./faker";

export const genGoogleSearchResults = (num: number = 4)
: GoogleSearchResultProps[] => {
  return sizedArray(num).map((_, index) => {
    return {
      avatar: {
        name: getRandomName({}),
        position: Math.random() > 0.5
          ? getRandomWebsite()
          : undefined,
      },
      heading: getRandomSearchResult(),
      description: getRandomSentence(),
      tags: Math.random() > 0.5
        ? undefined
        : sizedArray(randomPick(1, 5)).map(() => getRandomTag()),
    }
  })
}