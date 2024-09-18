import { CSSProperties } from "react"
import MuiIcon from '@mui/icons-material'
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

enum Icon {
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

// todo: return google material icon, not string
// const toMuiIcon = (icon: Icon)=> {
//   switch(icon) {
//     case 'house':
//       return MuiIcon.House
//     case 'magnifying-glass':
//       return MuiIcon.Search
//     case 'sistrix':
//       return MuiIcon.TravelExplore
//     case 'user':
//       return MuiIcon.Person
//     case 'facebook':
//       return MuiIcon.Facebook
//     case 'check':
//       return MuiIcon.Check
//     case 'download':
//       return MuiIcon.Download
//     case 'twitter':
//       return MuiIcon.Twitter
//     case 'image':
//       return MuiIcon.Image
//     case 'instagram':
//       return MuiIcon.Instagram
//     case 'phone':
//       return MuiIcon.Phone
//     case 'tiktok':
//       return MuiIcon.FacebookTwoTone
//     case 'reddit':
//       return MuiIcon.Reddit
//     case 'bars':
//       return MuiIcon.Menu
//     case 'envelope':
//       return MuiIcon.Email
//     case 'linkedin':
//       return MuiIcon.LinkedIn
//     case 'star':
//       return MuiIcon.Star
//     case 'location-dot':
//       return MuiIcon.Place
//     case 'github':
//       return MuiIcon.GitHub
//     case 'wand-magic-sparkles':
//       return MuiIcon.AutoFixHigh
//     case 'heart':
//       return MuiIcon.Favorite
//     case 'discord':
//       return MuiIcon.Gamepad
//     case 'circle-x-mark':
//       return MuiIcon.Error
//     case 'x-mark':
//       return MuiIcon.ErrorOutline
//     case 'youtube':
//       return MuiIcon.YouTube
    
//     default:
//       return MuiIcon.BrokenImage
//   }
// }

// gpt supplied mapping
const toMuiIcon = (icon: Icon): OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
} => {
  switch (icon) {
    case Icon.house:
      return MuiIcon.House;
    case Icon.search:
      return MuiIcon.Search;
    case Icon.search2:
      return MuiIcon.TravelExplore;
    case Icon.user:
      return MuiIcon.Person;
    case Icon.facebook:
      return MuiIcon.Facebook;
    case Icon.check:
      return MuiIcon.Check;
    case Icon.download:
      return MuiIcon.Download;
    case Icon.twitter:
      return MuiIcon.Twitter;
    case Icon.image:
      return MuiIcon.Image;
    case Icon.instagram:
      return MuiIcon.Instagram;
    case Icon.phone:
      return MuiIcon.Phone;
    case Icon.tiktok:
      return MuiIcon.FacebookTwoTone; // Note: Material UI does not have TikTok; using FacebookTwoTone as a placeholder.
    case Icon.reddit:
      return MuiIcon.Reddit;
    case Icon.hamburger:
      return MuiIcon.Menu;
    case Icon.envelope:
      return MuiIcon.Email;
    case Icon.linkedin:
      return MuiIcon.LinkedIn;
    case Icon.star:
      return MuiIcon.Star;
    case Icon.location:
      return MuiIcon.Place;
    case Icon.github:
      return MuiIcon.GitHub;
    case Icon.wand:
      return MuiIcon.AutoFixHigh;
    case Icon.heart:
      return MuiIcon.Favorite;
    case Icon.discord:
      return MuiIcon.Gamepad; // Note: No direct Discord icon in Material UI; using Gamepad as a placeholder.
    case Icon.circleXMark:
      return MuiIcon.Error;
    case Icon.xMark:
      return MuiIcon.ErrorOutline;
    case Icon.youtube:
      return MuiIcon.YouTube;
    case Icon.cloud:
      return MuiIcon.Cloud;
    case Icon.comment:
      return MuiIcon.Comment;
    case Icon.caretUp:
      return MuiIcon.ArrowUpward;
    case Icon.caretDown:
      return MuiIcon.ArrowDownward;
    case Icon.caretRight:
      return MuiIcon.ArrowForward;
    case Icon.caretLeft:
      return MuiIcon.ArrowBack;
    case Icon.chevronDown:
      return MuiIcon.KeyboardArrowDown
    case Icon.sortUp:
      return MuiIcon.Sort;
    case Icon.sortDown:
      return MuiIcon.Sort;
    case Icon.smile:
      return MuiIcon.SentimentSatisfiedAlt;
    case Icon.calendar:
      return MuiIcon.CalendarToday;
    case Icon.paperclip:
      return MuiIcon.Attachment;
    case Icon.figma:
      return MuiIcon.DesignServices; // Note: No direct Figma icon; using DesignServices as a placeholder.
    case Icon.file:
      return MuiIcon.Description;
    case Icon.bell:
      return MuiIcon.Notifications;
    case Icon.bellSlash:
      return MuiIcon.NotificationsOff;
    case Icon.shoppingCart:
      return MuiIcon.ShoppingCart;
    case Icon.clipboard:
      return MuiIcon.ContentPaste;
    case Icon.filter:
      return MuiIcon.FilterList;
    case Icon.circleInfo:
      return MuiIcon.Info;
    case Icon.upload:
      return MuiIcon.Upload;
    case Icon.pen:
      return MuiIcon.Edit;
    case Icon.google:
      return MuiIcon.Google;
    case Icon.googlePay:
      return MuiIcon.MoneyOff; // Note: No direct Google Pay icon; using MoneyOff as a placeholder.
    case Icon.gift:
      return MuiIcon.Redeem
    case Icon.trash:
      return MuiIcon.Delete;
    case Icon.trashCan:
      return MuiIcon.Delete;
    case Icon.stripe:
      return MuiIcon.Payment; // Note: No direct Stripe icon; using Payment as a placeholder.
    case Icon.list:
      return MuiIcon.List;
    case Icon.gear:
      return MuiIcon.Settings;
    case Icon.circleUp:
      return MuiIcon.ArrowCircleUp;
    case Icon.lock:
      return MuiIcon.Lock;
    case Icon.windows:
      return MuiIcon.Computer;
    case Icon.paypal:
      return MuiIcon.MoneyOff; // Note: No direct PayPal icon; using MoneyOff as a placeholder.
    case Icon.print:
      return MuiIcon.Print;
    case Icon.camera:
      return MuiIcon.CameraAlt;
    case Icon.video:
      return MuiIcon.VideoCameraFront;
    case Icon.videoSlash:
      return MuiIcon.VideoCameraBack;
    case Icon.headset:
      return MuiIcon.Headset;
    case Icon.bookmark:
      return MuiIcon.Bookmark;
    case Icon.share:
      return MuiIcon.Share;
    case Icon.circleExclamation:
      return MuiIcon.Error;
    case Icon.fire:
      return MuiIcon.Fireplace;
    case Icon.eye:
      return MuiIcon.RemoveRedEye;
    case Icon.eyeSlash:
      return MuiIcon.VisibilityOff;
    case Icon.plane:
      return MuiIcon.AirplanemodeActive;
    case Icon.folder:
      return MuiIcon.Folder;
    case Icon.thumbsUp:
      return MuiIcon.ThumbUp;
    case Icon.thumbsDown:
      return MuiIcon.ThumbDown;
    case Icon.code:
      return MuiIcon.Code;
    case Icon.wifi:
      return MuiIcon.Wifi;
    case Icon.sliders:
      return MuiIcon.Tune;
    case Icon.gamepad:
      return MuiIcon.Gamepad;
    case Icon.users:
      return MuiIcon.Group;
    case Icon.whatsapp:
      return MuiIcon.Chat;
    case Icon.play:
      return MuiIcon.PlayArrow;
    case Icon.circlePlay:
      return MuiIcon.PlayCircleFilled;
    case Icon.backward:
      return MuiIcon.Replay10;
    case Icon.backwardStep:
      return MuiIcon.Replay30;
    case Icon.backwardFast:
      return MuiIcon.Replay;
    case Icon.forward:
      return MuiIcon.FastForward;
    case Icon.forwardStep:
      return MuiIcon.SkipNext
    case Icon.forwardFast:
      return MuiIcon.Forward10;
    case Icon.stop:
      return MuiIcon.Stop;
    case Icon.circleStop:
      return MuiIcon.StopCircle;
    case Icon.circlePause:
      return MuiIcon.PauseCircle;
    case Icon.pause:
      return MuiIcon.Pause;
    case Icon.expand:
      return MuiIcon.ExpandMore;
    case Icon.compress:
      return MuiIcon.ExpandLess;
    case Icon.closedCaptioning:
      return MuiIcon.ClosedCaption
    case Icon.repeat:
      return MuiIcon.Replay;
    case Icon.microphoneSlash:
      return MuiIcon.MicOff;
    case Icon.microphone:
      return MuiIcon.Mic;
    case Icon.volumeXMark:
      return MuiIcon.VolumeOff;
    case Icon.volumeOff:
      return MuiIcon.VolumeMute;
    case Icon.volumeLow:
      return MuiIcon.VolumeDown;
    case Icon.volumeHigh:
      return MuiIcon.VolumeUp;
    case Icon.warning:
      return MuiIcon.Warning;
    case Icon.upload2:
      return MuiIcon.Upload;
    case Icon.creditCard:
      return MuiIcon.CreditCard;
    case Icon.angleUp:
      return MuiIcon.KeyboardArrowUp;
    case Icon.angleRight:
      return MuiIcon.KeyboardArrowRight;
    case Icon.angleDown:
      return MuiIcon.KeyboardArrowDown;
    case Icon.angleLeft:
      return MuiIcon.KeyboardArrowLeft;
    case Icon.anglesUp:
      return MuiIcon.ArrowDropUp;
    case Icon.anglesDown:
      return MuiIcon.ArrowDropDown;
    case Icon.anglesRight:
      return MuiIcon.KeyboardArrowRight
    case Icon.anglesLeft:
      return MuiIcon.KeyboardArrowLeft
    case Icon.arrowDown:
      return MuiIcon.ArrowDownward;
    case Icon.arrowUp:
      return MuiIcon.ArrowUpward;
    case Icon.arrowRight:
      return MuiIcon.ArrowForward;
    case Icon.arrowLeft:
      return MuiIcon.ArrowBack;
    case Icon.alignRight:
      return MuiIcon.FormatAlignRight;
    case Icon.alighLeft:
      return MuiIcon.FormatAlignLeft;
    case Icon.alignJustify:
      return MuiIcon.FormatAlignJustify;
    case Icon.alignCenter:
      return MuiIcon.FormatAlignCenter;
    case Icon.powerOff:
      return MuiIcon.PowerSettingsNew;
    case Icon.reply:
      return MuiIcon.Reply;
    case Icon.rss:
      return MuiIcon.RssFeed;
    case Icon.plus:
      return MuiIcon.Add;
    case Icon.minus:
      return MuiIcon.Remove;
    case Icon.circleChevronUp:
      return MuiIcon.ArrowCircleUp;
    case Icon.circleChevronDown:
      return MuiIcon.ArrowCircleDown;
    case Icon.circleChevronRight:
      return MuiIcon.ArrowCircleRight;
    case Icon.circleChevronLeft:
      return MuiIcon.ArrowCircleLeft;
    case Icon.map:
      return MuiIcon.Map;
    case Icon.message:
      return MuiIcon.Message;

    default:
      return MuiIcon.BrokenImage; // Default icon if none of the cases match
  }
};

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