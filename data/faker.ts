import { randomItem } from "../components/utils"

export const firstNames = [
  'Geyer',
  'Lane',
  'Joan',
  'Peter',
  'Anand',
  'Arjun',
  'Prasanth',
  'Shruti',
  'Bert',
  'Duck',
  'Donald',
  'Roger',
  'Pouya',
  'Arash',
  'Justine',
  'Betty',
  'Richard',
  'Jane',
  'Ken'
]

export const lastNames = [
  'Sterling',
  'Silver',
  'Fisk',
  'Richards',
  'Jefferson',
  'Grrrr',
  'Zim',
  'Wang',
  'Cosgrove',
  'Froggy'
]

export const getRandomName= (options?: {
  firstNameOnly?: boolean
}): string => {
  return `${randomItem(firstNames)}${!options?.firstNameOnly ? ` ${randomItem(lastNames)}`: ''}`
}

const searchResults = [
  'The Lyrics - National Museum of Aviation History',
  'O Say, Can You See',
  'Francis Scott Key',
  'Lana Del Rey Wiki',
  'Have a Seat',
  'YouTube',
  'YouTube - Apps on Google Play',
  'WhatsApp Web',
  'How to link a Device',
  'Download WhatsApp'
]

export const getRandomSearchResult= () => {
  return randomItem(searchResults)
}

const sentences = [
  " to jump to the search box",
  "Something went wrong. Your history wasn't deleted.",
  "Custom range...",
  "Advanced Search",
  "Search history",
  "Blurring on",
  "Device default",
  "Send feedback",
  "Quickly send and receive ",
  " messages right from your computer.",
  "People also ask",
  "How do I connect to WhatsApp Web?",
  "Open the WhatsApp Web by entering 'web.whatsapp.com' in your web browser. Open the WhatsApp App on your phone, and go to Settings > Linked Devices > Link a Device. Scan the QR code on the website with your phone's camera, you will automatically log in. You can now send and receive messages, including images and files.",
  "May 22, 2023",
  "Omnichat Blog",
  " › whatsapp-web-tutorial",
  "Omnichat Blog",
  " › whatsapp-web-tutorial",
  "Is it safe to open WhatsApp web?",
  "For years, the web conversations have been end-to-end encrypted. However, ",
  ", unlike on a mobile app. Therefore, most recently, in March 2022, the browser version of WhatsApp Web was upgraded with the Code Verify security feature.",
  "Jan 31, 2024",
  "Sinch Engage",
  " › blog › whatsapp-business-web",
  "Sinch Engage",
  " › blog › whatsapp-business-web",
  "Is WhatsApp Web still available?",
  ". Visit web.whatsapp.com to log in from your browser and quickly send and receive What... If you're using WhatsApp Web, WhatsApp Desktop, or Portal, you can log out of WhatsApp. There's no way to log out of WhatsApp if you're on Android,...",
  "WhatsApp Help Center",
  " › search › query=whatsapp web",
  "WhatsApp Help Center",
  " › search › query=whatsapp web",
  "How to put WhatsApp on a laptop?",
  "DNAIndiaNews",
  "Aug 2, 2022",
  "Screen and scan the qr. Code. You will require your smartphone. The first time you try to log in to whatsapp or any other device like your laptop or pc.",
  "Screen and scan the qr. Code. You will require your smartphone. The first time you try to log in to",
  "Screen and scan the qr. Code. You will require your smartphone. The first time you try to log in to whatsapp or any other device like your laptop or pc.",
  "Chrome Web Store",
  " › detail › ekcgkejcj...",
  "Chrome Web Store",
  " › detail › ekcgkejcj...",
  "Overview: Add more tools and options for ",
  " for more privacy and reliability. Disclaimer: This extension is not affiliated with, associated with, ...",
  "WhatsApp Web Online",
  "Web WhatsApp",
  "Whatsapp Web Setup To Officially Use Whatsapp On PC or Lapto",
  "How to use WhatsApp Web | Digital Trends",
  "How To WhatsApp Web, Quick Tutorial",
  "How to use WhatsApp Web | Digital Trends",
  "Why does Whatsapp Web Application take so long to load, and ...",
  "Whatsapp Web not showing in Microsoft edge - Microsoft Community",
  "Show more images",
  " › pedroslopez › whatsapp-web",
  " › pedroslopez › whatsapp-web",
  "A WhatsApp API client that connects through the ",
  " browser app. The library works by launching the ",
  " browser application and managing ...",
  "Apple Discussions",
  "Apple Discussions",
  "It always appears error and reverts back to first page that have to click get started. But I can link to ",
  " and android phone.",
  "Top answer: ",
  "I'm encountering the same error here! I just switched from an Android phone to an iPhone 15 ...",
  "Reddit · r/whatsapp",
  "Reddit · r/whatsapp",
  " in Chrome web browser, F12 (enter dev tools), Now go to Application tab and delete all IndexedDB one by one. It will start ...",
  "Top answer: ",
  "If you use chrome, go to the following address chrome://settings/content/all This opens the ...",
  "WA Web Plus",
  "WA Web Plus",
  "We make you ultra productive. Accelerate your business with the best tool for the giant communication platform, empower your ",
  " Business now!",
  "Chrome Web Store",
  " › detail › ceklhmak...",
  "Chrome Web Store",
  " › detail › ceklhmak...",
  "People also ask",
  "People also search for",
  "Whatsapp web ",
  "WhatsApp Web ",
  "WhatsApp Web ",
  "WhatsApp Web ",
  "Whatsapp web ",
  "Whatsapp web ",
  "See results about",
  "Song by Doctor Fantasy",
  "Song by Doctor Fantasy",
  "M1S 1C1, Scarborough, ON",
  "From your device",
  "Can't update your location",
  "Updating location..."
]

export const getRandomSentence = () => randomItem(sentences)

const tags = [
  'Bowlful',
  'Carpe Diem',
  'Lucky Strike',
  'The Palm',
  'Anywhere else',
  'Brotherhood of Alcoholics Anonymous',
  'Predrink',
  'Drinking',
  'Crying',
  'Fight',
  'Liston',
  'Ali',
  'Clay',
  'Samsonite',
  'Flask',
  'Bothersome'
]

export const getRandomTag = () => randomItem(tags)

const websites = [
  'merriam-webster',
  'npmjs',
  'khanacademy',
  'adage',
  'admen',
  'peggy-olsen',
  'github',
  'whatsapp',
  'discord',
  'docker',
  'sonnyliston',
  'cassiusclay',
  'espn',
  'tsn',
]

const topLevelDomains = [
  'com',
  'ca',
  'org',
  'net',
  'eu',
  'video',
  'fun'
]

export const getRandomEmail = () => {
  return `${getRandomName({ firstNameOnly: true })}@gmail.${randomItem(topLevelDomains)}`
}

export const getRandomWebsite = () => {
  return `https://${randomItem(websites)}.${randomItem(topLevelDomains)}`
}