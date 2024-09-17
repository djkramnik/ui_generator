import { CSSProperties } from "react"

enum Icons {
  house = 'house',
  search = 'magnifying-glass',
  search2 = 'sistrix',
  user = 'user',
  facebook = 'facebook',
  check = 'check',
  download = 'download',
  twitter = 'twitter',
  image = 'image',
  instagram = 'instagram',
  phone = 'phone',
  tiktok = 'tiktok',
  reddit = 'reddit',
  hamburger = 'bars',
  envelope = 'envelope',
  linkedin = 'linkedin',
  star = 'star',
  location = 'location-dot',
  github = 'github',
  wand = 'wand-magic-sparkles',
  heart = 'heart',

  discord = 'discord',
  circleXMark = 'circle-x-mark',
  xMark = 'x-mark',
  youtube = 'youtube',
  cloud = 'cloud',
  comment = 'comment',
  
  caretUp = 'caret-up',
  caretDown = 'caret-down',
  caretRight = 'caret-right',
  caretLeft = 'caret-left',
  chevronDown = 'chevron-down',
  sortUp = 'sort-up',
  sortDown = 'sort-down',

  wordpress = 'wordpress',
  smile = 'face-smile',
  calendar = 'calendar-days',
  paperclip = 'paperclip',
  slack = 'slack',
  figma = 'figma',
  file = 'file',
  bell = 'bell',
  bellSlash = 'bell-slash',
  shoppingCart = 'cart-shopping',
  clipboard = 'clipboard',
  filter = 'filter',
  circleInfo = 'circle-info',
  upload = 'arrow-up-from-bracket',
  pen = 'pen',
  google = 'google',
  googlePay = 'google-pay',
  gift = 'gift',
  trash = 'trash',
  trashCan = 'trash-can',
  stripe = 'stripe',
  docker = 'docker',
  list = 'list',
  gear = 'gear',
  circleUp = 'circle-up',
  lock = 'lock',
  windows = 'windows',
  paypal = 'paypal',
  print = 'print',
  camera = 'camera',
  video = 'video',
  videoSlash = 'video-slash',
  headset = 'headset',
  bookmark = 'bookmark',
  share = 'share',
  circleExclamation = 'circle-exclamation',
  fire = 'fire',
  eye = 'eye',
  eyeSlash = 'eye-slash',
  plane = 'plane',
  folder = 'folder',
  thumbsUp = 'thumbs-up',
  thumbsDown = 'thumbs-down',
  code = 'code',
  wifi = 'wifi',
  sliders = 'sliders',
  gamepad = 'gamepad',
  users = 'users',
  whatsapp = 'whatsapp',
  
  play = 'play',
  circlePlay = 'circle-play',
  backward = 'backward',
  backwardStep = 'backward-step',
  backwardFast = 'backward-fast',
  forward = 'forward',
  forwardStep = 'forward-step',
  forwardFast = 'forward-fast',
  stop = 'stop',
  circleStop = 'circle-stop',
  circlePause = 'circle-pause',
  pause = 'pause',
  expand = 'expand',
  compress = 'compress',
  closedCaptioning = 'closed-captioning',
  repeat = 'repeat',
  microphoneSlash = 'microphone-slash',
  microphone = 'microphone',
  volumeXMark = 'volume-xmark',
  volumeOff = 'volume-off',
  volumeLow = 'volume-low',
  volumeHigh = 'volume-high',
  warning = 'triangle-exclamation',

  upload2 = 'upload',
  creditCard = 'credit-card',

  angleUp = 'angle-up',
  angleRight = 'angle-right',
  angleDown = 'angle-down',
  angleLeft = 'angle-left',

  anglesUp = 'angles-up',
  anglesDown = 'angles-down',
  anglesRight = 'angles-right',
  anglesLeft = 'angles-left',

  arrowDown = 'arrow-down',
  arrowUp = 'arrow-up',
  arrowRight = 'arrow-right',
  arrowLeft = 'arrow-left',

  alignRight = 'align-right',
  alighLeft = 'align-left',
  alignJustify = 'align-justify',
  alignCenter = 'align-center',

  powerOff = 'power-off',
  reply = 'reply',
  rss = 'rss',
  plus = 'plus',
  minus = 'minus',

  circleChevronUp = 'circle-chevron-up',
  circleChevronDown = 'circle-chevron-down',
  circleChevronRight = 'circle-chevron-right',
  circleChevronLeft = 'circle-chevron-left',
  map = 'map',
  message = 'message',




}

enum MuiStyles {
  filled = '',
  Outlined = 'Outlined',
  Rounded = 'Rounded',
  TwoTone = 'TwoTone',
  Sharp = 'Sharp'
}

export const ChimericIcon = ({
  icon,
  mui,
  iconStyle,
}: {
  icon: string
  mui?: boolean
  iconStyle?: CSSProperties
}) => {
  // any defaults must derive from theme, right here yo
  if (mui) {
    return null
  }
  return (
    <i className={`fa-solid fa-${icon}`} style={iconStyle} />
  )
}