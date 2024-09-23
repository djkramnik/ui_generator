import { CSSProperties } from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'
import {
  Comment,
  List,
  Gamepad,
  Error,
  Menu,
  Map,
  Lock,
  House,
  Search,
  TravelExplore,
  Person,
  Facebook,
  Check,
  Download,
  Twitter,
  Instagram,
  Phone,
  FacebookTwoTone,
  Reddit,
  Email,
  LinkedIn,
  Star,
  Place,
  GitHub,
  AutoFixHigh,
  Favorite,
  ErrorOutline,
  YouTube,
  Cloud,
  ArrowUpward,
  ArrowDownward,
  ArrowForward,
  ArrowBack,
  KeyboardArrowDown,
  Sort,
  SentimentSatisfiedAlt,
  CalendarToday,
  Attachment,
  DesignServices,
  Description,
  Notifications,
  NotificationsOff,
  ShoppingCart,
  ContentPaste,
  FilterList,
  Info,
  Upload,
  Edit,
  Google,
  MoneyOff,
  Redeem,
  Delete,
  Payment,
  Settings,
  ArrowCircleUp,
  Computer,
  Print,
  CameraAlt,
  VideoCameraFront,
  VideoCameraBack,
  Headset,
  Bookmark,
  Share,
  Fireplace,
  RemoveRedEye,
  VisibilityOff,
  AirplanemodeActive,
  Folder,
  ThumbUp,
  ThumbDown,
  Code,
  Wifi,
  Tune,
  Group,
  Chat,
  PlayArrow,
  PlayCircleFilled,
  Replay10,
  Replay30,
  Replay,
  FastForward,
  SkipNext,
  Forward10,
  Stop,
  StopCircle,
  PauseCircle,
  Pause,
  ExpandMore,
  ExpandLess,
  ClosedCaption,
  MicOff,
  Mic,
  VolumeOff,
  VolumeMute,
  VolumeDown,
  VolumeUp,
  Warning,
  CreditCard,
  KeyboardArrowUp,
  KeyboardArrowRight,
  KeyboardArrowLeft,
  ArrowDropUp,
  ArrowDropDown,
  FormatAlignRight,
  FormatAlignLeft,
  FormatAlignJustify,
  FormatAlignCenter,
  PowerSettingsNew,
  Reply,
  RssFeed,
  Add,
  Remove,
  ArrowCircleDown,
  ArrowCircleRight,
  ArrowCircleLeft,
  Message,
  BrokenImage,
} from '@mui/icons-material'
import { useTheme } from 'styled-components'
import { getComponentStyles, sxToStyle } from "../../theme/variants";

export enum Icon {
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
  chevronUp = 'chevron-up',
  chevronLeft = 'chevron-left',
  chevronRight = 'chevron-right',
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

// gpt supplied mapping
export const toMuiIcon = (
  icon: Icon
): OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
  muiName: string
} => {
  switch (icon) {
    case Icon.hamburger:
      return Menu
    case Icon.house:
      return House
    case Icon.search:
      return Search
    case Icon.search2:
      return TravelExplore
    case Icon.user:
      return Person
    case Icon.facebook:
      return Facebook
    case Icon.check:
      return Check
    case Icon.download:
      return Download
    case Icon.twitter:
      return Twitter
    // case Icon.image:
    //   return Image;
    case Icon.instagram:
      return Instagram
    case Icon.phone:
      return Phone
    case Icon.tiktok:
      return FacebookTwoTone // Note: Material UI does not have TikTok; using FacebookTwoTone as a placeholder.
    case Icon.reddit:
      return Reddit
    // case Icon.hamburger:
    //   return Menu;
    case Icon.envelope:
      return Email
    case Icon.linkedin:
      return LinkedIn
    case Icon.star:
      return Star
    case Icon.location:
      return Place
    case Icon.github:
      return GitHub
    case Icon.wand:
      return AutoFixHigh
    case Icon.heart:
      return Favorite
    case Icon.discord:
      return Gamepad // Note: No direct Discord icon in Material UI; using Gamepad as a placeholder.
    case Icon.circleXMark:
      return Error
    case Icon.xMark:
      return ErrorOutline
    case Icon.youtube:
      return YouTube
    case Icon.cloud:
      return Cloud
    case Icon.comment:
      return Comment
    case Icon.caretUp:
      return ArrowUpward
    case Icon.caretDown:
      return ArrowDownward
    case Icon.caretRight:
      return ArrowForward
    case Icon.caretLeft:
      return ArrowBack
    case Icon.chevronDown:
      return KeyboardArrowDown
    case Icon.chevronRight:
      return KeyboardArrowRight
    case Icon.chevronUp:
      return KeyboardArrowUp
    case Icon.chevronLeft:
      return KeyboardArrowLeft
    case Icon.sortUp:
      return Sort
    case Icon.sortDown:
      return Sort
    case Icon.smile:
      return SentimentSatisfiedAlt
    case Icon.calendar:
      return CalendarToday
    case Icon.paperclip:
      return Attachment
    case Icon.figma:
      return DesignServices // Note: No direct Figma icon; using DesignServices as a placeholder.
    case Icon.file:
      return Description
    case Icon.bell:
      return Notifications
    case Icon.bellSlash:
      return NotificationsOff
    case Icon.shoppingCart:
      return ShoppingCart
    case Icon.clipboard:
      return ContentPaste
    case Icon.filter:
      return FilterList
    case Icon.circleInfo:
      return Info
    case Icon.upload:
      return Upload
    case Icon.pen:
      return Edit
    case Icon.google:
      return Google
    case Icon.googlePay:
      return MoneyOff // Note: No direct Google Pay icon; using MoneyOff as a placeholder.
    case Icon.gift:
      return Redeem
    case Icon.trash:
      return Delete
    case Icon.trashCan:
      return Delete
    case Icon.stripe:
      return Payment // Note: No direct Stripe icon; using Payment as a placeholder.
    case Icon.list:
      return List
    case Icon.gear:
      return Settings
    case Icon.circleUp:
      return ArrowCircleUp
    case Icon.lock:
      return Lock
    case Icon.windows:
      return Computer
    case Icon.paypal:
      return MoneyOff // Note: No direct PayPal icon; using MoneyOff as a placeholder.
    case Icon.print:
      return Print
    case Icon.camera:
      return CameraAlt
    case Icon.video:
      return VideoCameraFront
    case Icon.videoSlash:
      return VideoCameraBack
    case Icon.headset:
      return Headset
    case Icon.bookmark:
      return Bookmark
    case Icon.share:
      return Share
    case Icon.circleExclamation:
      return Error
    case Icon.fire:
      return Fireplace
    case Icon.eye:
      return RemoveRedEye
    case Icon.eyeSlash:
      return VisibilityOff
    case Icon.plane:
      return AirplanemodeActive
    case Icon.folder:
      return Folder
    case Icon.thumbsUp:
      return ThumbUp
    case Icon.thumbsDown:
      return ThumbDown
    case Icon.code:
      return Code
    case Icon.wifi:
      return Wifi
    case Icon.sliders:
      return Tune
    case Icon.gamepad:
      return Gamepad
    case Icon.users:
      return Group
    case Icon.whatsapp:
      return Chat
    case Icon.play:
      return PlayArrow
    case Icon.circlePlay:
      return PlayCircleFilled
    case Icon.backward:
      return Replay10
    case Icon.backwardStep:
      return Replay30
    case Icon.backwardFast:
      return Replay
    case Icon.forward:
      return FastForward
    case Icon.forwardStep:
      return SkipNext
    case Icon.forwardFast:
      return Forward10
    case Icon.stop:
      return Stop
    case Icon.circleStop:
      return StopCircle
    case Icon.circlePause:
      return PauseCircle
    case Icon.pause:
      return Pause
    case Icon.expand:
      return ExpandMore
    case Icon.compress:
      return ExpandLess
    case Icon.closedCaptioning:
      return ClosedCaption
    case Icon.repeat:
      return Replay
    case Icon.microphoneSlash:
      return MicOff
    case Icon.microphone:
      return Mic
    case Icon.volumeXMark:
      return VolumeOff
    case Icon.volumeOff:
      return VolumeMute
    case Icon.volumeLow:
      return VolumeDown
    case Icon.volumeHigh:
      return VolumeUp
    case Icon.warning:
      return Warning
    case Icon.upload2:
      return Upload
    case Icon.creditCard:
      return CreditCard
    case Icon.angleUp:
      return KeyboardArrowUp
    case Icon.angleRight:
      return KeyboardArrowRight
    case Icon.angleDown:
      return KeyboardArrowDown
    case Icon.angleLeft:
      return KeyboardArrowLeft
    case Icon.anglesUp:
      return ArrowDropUp
    case Icon.anglesDown:
      return ArrowDropDown
    case Icon.anglesRight:
      return KeyboardArrowRight
    case Icon.anglesLeft:
      return KeyboardArrowLeft
    case Icon.arrowDown:
      return ArrowDownward
    case Icon.arrowUp:
      return ArrowUpward
    case Icon.arrowRight:
      return ArrowForward
    case Icon.arrowLeft:
      return ArrowBack
    case Icon.alignRight:
      return FormatAlignRight
    case Icon.alighLeft:
      return FormatAlignLeft
    case Icon.alignJustify:
      return FormatAlignJustify
    case Icon.alignCenter:
      return FormatAlignCenter
    case Icon.powerOff:
      return PowerSettingsNew
    case Icon.reply:
      return Reply
    case Icon.rss:
      return RssFeed
    case Icon.plus:
      return Add
    case Icon.minus:
      return Remove
    case Icon.circleChevronUp:
      return ArrowCircleUp
    case Icon.circleChevronDown:
      return ArrowCircleDown
    case Icon.circleChevronRight:
      return ArrowCircleRight
    case Icon.circleChevronLeft:
      return ArrowCircleLeft
    case Icon.map:
      return Map
    case Icon.message:
      return Message

    default:
      return BrokenImage // Default icon if none of the cases match
  }
}

enum MuiStyles {
  filled = '',
  Outlined = 'Outlined',
  Rounded = 'Rounded',
  TwoTone = 'TwoTone',
  Sharp = 'Sharp',
}

const getFaPrefix = (
  icon: string
) => {
  switch(icon) {
    case 'facebook':
    case 'twitter':
    case 'instagram':
    case 'tiktok':
    case 'figma':
    case 'google':
    case 'stripe':
    case 'discord':
    case 'youtube':
      return 'brands'
    default:
      return 'solid'
  }
}

export const ChimericIcon = ({
  icon,
  mui,
  iconStyle,
}: {
  icon: Icon
  mui?: boolean
  iconStyle?: CSSProperties
}) => {
  const theme = useTheme()

  const componentDiff = getComponentStyles('icon', theme)
  const style = {
    ...sxToStyle(componentDiff),
    ...iconStyle,
  }
  // any defaults must derive from theme, right here yo
  if (mui) {
    const AltMuiIcon = toMuiIcon(icon)
    return (
      <AltMuiIcon style={style} />
    )
  }

  return <i className={`fa-${getFaPrefix(icon)} fa-${icon}`} style={style} />
}
