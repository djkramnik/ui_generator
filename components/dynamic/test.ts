import { StyleNode } from './types'

export const TestNode: StyleNode = {
  tagName: 'text',
  content: 'moral enemies',
}

export const StripePhoneNode: StyleNode = {
  tagName: 'FIGURE',
  children: [
    {
      tagName: 'text',
      content: '\n  ',
    },
    {
      tagName: 'DIV',
      children: [
        {
          tagName: 'text',
          content: '\n    ',
        },
        {
          tagName: 'DIV',
          children: [
            {
              tagName: 'text',
              content: '\n    \n\n    \n\n    \n      ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n        ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: '\n      ',
                    },
                    {
                      tagName: 'svg',
                      children: [],
                      styleStr: '',
                      style: {},
                      attributes: {},
                      html: '\n        <path d="M47.2675.5H3.25289C1.45637.5 0 1.95637 0 3.75289V69.9255c0 1.7965 1.45637 3.2529 3.25289 3.2529H47.2675c1.7965 0 3.2529-1.4564 3.2529-3.2529V3.75289C50.5204 1.95637 49.064.5 47.2675.5Z" fill="url(#homepage-abstraction-phone-path-a)"></path>\n        <path d="M50.5204 38.9151C31.3754 20.6207 16.6356 13.7735.45563 12.2929L0 12.2512v10.0435c13.8831 1.3733 27.2888 7.4539 46.9645 27.1295L50.5 52.9598l.0204-.0204V38.9151Z" fill="#FAB000"></path>\n        <path d="M12.5919 51.9737c3.5202 0 6.3738-2.8536 6.3738-6.3738s-2.8536-6.3738-6.3738-6.3738c-3.52017 0-6.37382 2.8536-6.37382 6.3738s2.85365 6.3738 6.37382 6.3738Z" fill="url(#homepage-abstraction-phone-path-b)"></path>\n        <path d="M6.32072 62.9735v4.6711h-.83274v-4.6711h.83274Zm.4923 4.0206.58552-.4685c.20168.3318.59203.553.98888.553.3318 0 .63757-.1171.63757-.4228 0-.2928-.28626-.3253-.82624-.4359-.53998-.1106-1.15803-.2473-1.15803-.9759 0-.6246.54649-1.08 1.33369-1.08.59853 0 1.13201.2668 1.37923.6441l-.52697.4749c-.19517-.3057-.52046-.4814-.8978-.4814-.31878 0-.52697.1431-.52697.3708 0 .2473.24722.2928.6766.3839.57902.1236 1.30767.2472 1.30767 1.0279 0 .6896-.63106 1.132-1.40525 1.132-.63107 0-1.26213-.2537-1.5679-.7221Zm3.21478 0 .5855-.4685c.2017.3318.5921.553.9889.553.3318 0 .6376-.1171.6376-.4228 0-.2928-.2863-.3253-.8263-.4359-.5399-.1106-1.158-.2473-1.158-.9759 0-.6246.5465-1.08 1.3337-1.08.5985 0 1.132.2668 1.3792.6441l-.5269.4749c-.1952-.3057-.5205-.4814-.8978-.4814-.3188 0-.527.1431-.527.3708 0 .2473.2472.2928.6766.3839.579.1236 1.3077.2472 1.3077 1.0279 0 .6896-.6311 1.132-1.4053 1.132-.6311 0-1.2621-.2537-1.5679-.7221Zm6.4156-2.765v3.4155h-.7807v-.3643c-.1951.2277-.4879.4359-.9303.4359-.7156 0-1.158-.4879-1.158-1.2231v-2.264h.7807v2.0949c0 .4163.1821.6831.605.6831.3513 0 .7026-.2603.7026-.7482v-2.0298h.7807Zm2.2672 3.4871c-.9759 0-1.659-.7221-1.659-1.7761 0-1.0019.6766-1.7761 1.6264-1.7761.9889 0 1.5159.7482 1.5159 1.685v.2603h-2.3942c.0586.5855.4099.9433.9109.9433.3838 0 .6896-.1952.7937-.5465l.6701.2537c-.2408.5986-.7807.9564-1.4638.9564Zm-.0391-2.8951c-.4033 0-.7156.2407-.8327.7026h1.5679c-.0065-.3773-.2407-.7026-.7352-.7026Zm3.26.488c0-1.4248.6766-2.4072 1.8347-2.4072 1.158 0 1.8346.9824 1.8346 2.4072 0 1.4247-.6766 2.4071-1.8346 2.4071-1.1581 0-1.8347-.9824-1.8347-2.4071Zm.8328 0c0 .9823.3122 1.685 1.0019 1.685.6896 0 1.0019-.7027 1.0019-1.685 0-.9824-.3123-1.685-1.0019-1.685-.6897 0-1.0019.7026-1.0019 1.685Zm3.2778 0c0-1.4248.6766-2.4072 1.8346-2.4072 1.1581 0 1.8347.9824 1.8347 2.4072 0 1.4247-.6766 2.4071-1.8347 2.4071-1.158 0-1.8346-.9824-1.8346-2.4071Zm.8328 0c0 .9823.3122 1.685 1.0018 1.685.6897 0 1.0019-.7027 1.0019-1.685 0-.9824-.3122-1.685-1.0019-1.685-.6896 0-1.0018.7026-1.0018 1.685Zm3.2338 1.6589 1.171-.9628c.6376-.5205 1.2101-.9824 1.2101-1.5679 0-.4815-.2993-.8263-.7937-.8263-.4879 0-.8067.3839-.8067.8458 0 .1496.026.2993.0781.4424h-.7742c-.0651-.1887-.0846-.3123-.0846-.4879 0-.8783.7221-1.5094 1.6069-1.5094.9759 0 1.6004.605 1.6004 1.4833 0 .8263-.6245 1.3923-1.2816 1.9127l-.7807.6181h2.1209v.7286h-3.2659v-.6766Z" fill="#fff"></path>\n        <g filter="url(#homepage-abstraction-phone-path-c)">\n          <path d="M62.2166 9H18.7867c-1.958 0-3.5452 1.5873-3.5452 3.5453v65.5878c0 1.958 1.5872 3.5453 3.5452 3.5453h43.4299c1.958 0 3.5453-1.5873 3.5453-3.5453V12.5453c0-1.958-1.5873-3.5453-3.5453-3.5453Z" fill="#F6F9FC"></path>\n        </g>\n        <path d="M40.5692 49.2909c-7.5153 0-13.6798 5.7842-14.2844 13.1436-.0538.6549.4841 1.1895 1.1412 1.1895h26.2865c.6571 0 1.195-.5346 1.1412-1.1895-.6046-7.3594-6.7691-13.1436-14.2845-13.1436Z" fill="#FAB000"></path>\n        <path d="M40.3331 33.5c-7.5154 0-13.6798 5.7842-14.2844 13.1436-.0538.6549.484 1.1895 1.1412 1.1895h26.2864c.6572 0 1.195-.5346 1.1412-1.1895C54.0129 39.2842 47.8485 33.5 40.3331 33.5Z" fill="#F6F9FC"></path>\n        <mask id="homepage-abstraction-phone-path-d" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="26" y="34" width="29" height="15">\n          <path d="M40.3331 34.5c-7.5154 0-13.6798 5.7842-14.2844 13.1436-.0538.6549.484 1.1895 1.1412 1.1895h26.2864c.6572 0 1.195-.5346 1.1412-1.1895C54.0129 40.2842 47.8485 34.5 40.3331 34.5Z" fill="#F6F9FC"></path>\n        </mask>\n        <g mask="url(#homepage-abstraction-phone-path-d)">\n          <g filter="url(#homepage-abstraction-phone-path-e)">\n            <ellipse cx="33.498" cy="34.062" rx="11.4684" ry="11.6778" fill="#2C09F1"></ellipse>\n          </g>\n          <g filter="url(#homepage-abstraction-phone-path-f)">\n            <ellipse cx="33.5026" cy="49.3713" rx="9.09451" ry="9.29176" transform="rotate(-1.83252 33.5026 49.3713)" fill="#FAC300"></ellipse>\n          </g>\n          <g filter="url(#homepage-abstraction-phone-path-g)">\n            <ellipse cx="46.3983" cy="32.4332" rx="8.73365" ry="9.19056" fill="#FF4FD8"></ellipse>\n          </g>\n        </g>\n        <path d="M21.5647 15.8288h-.8327V20.5h.8327v-4.6712Zm.4923 4.0206c.3058.4684.9368.7222 1.5679.7222.7742 0 1.4052-.4424 1.4052-1.132 0-.7807-.7286-.9043-1.3076-1.028-.4294-.091-.6766-.1366-.6766-.3838 0-.2277.2082-.3708.5269-.3708.3774 0 .7027.1756.8978.4814l.527-.4749c-.2472-.3774-.7807-.6441-1.3792-.6441-.7872 0-1.3337.4554-1.3337 1.08 0 .7286.6181.8652 1.158.9758.54.1106.8263.1432.8263.4359 0 .3058-.3058.4229-.6376.4229-.3969 0-.7872-.2212-.9889-.553l-.5855.4684Zm3.2148 0c.3057.4684.9368.7222 1.5679.7222.7742 0 1.4052-.4424 1.4052-1.132 0-.7807-.7286-.9043-1.3076-1.028-.4294-.091-.6766-.1366-.6766-.3838 0-.2277.2081-.3708.5269-.3708.3774 0 .7026.1756.8978.4814l.527-.4749c-.2472-.3774-.7807-.6441-1.3792-.6441-.7872 0-1.3337.4554-1.3337 1.08 0 .7286.618.8652 1.158.9758.54.1106.8262.1432.8262.4359 0 .3058-.3057.4229-.6375.4229-.3969 0-.7872-.2212-.9889-.553l-.5855.4684Zm6.4156-2.7649h-.7807v2.0298c0 .4879-.3513.7481-.7026.7481-.4229 0-.6051-.2667-.6051-.6831v-2.0948h-.7807v2.264c0 .7351.4424 1.2231 1.1581 1.2231.4424 0 .7351-.2082.9303-.4359V20.5h.7807v-3.4155Zm2.2671 3.4871c.6831 0 1.2231-.3579 1.4638-.9564l-.6701-.2537c-.1041.3513-.4098.5465-.7937.5465-.5009 0-.8522-.3578-.9108-.9434h2.3941v-.2602c0-.9368-.5269-1.685-1.5158-1.685-.9499 0-1.6265.7742-1.6265 1.7761 0 1.0539.6831 1.7761 1.659 1.7761Zm-.039-2.8951c.4944 0 .7286.3253.7351.7026h-1.5679c.1171-.4619.4294-.7026.8328-.7026Zm3.26.4879c0 1.4248.6766 2.4072 1.8346 2.4072s1.8346-.9824 1.8346-2.4072c0-1.4247-.6766-2.4071-1.8346-2.4071s-1.8346.9824-1.8346 2.4071Zm.8327 0c0-.9824.3123-1.685 1.0019-1.685s1.0019.7026 1.0019 1.685-.3123 1.685-1.0019 1.685-1.0019-.7026-1.0019-1.685Zm3.2779 0c0 1.4248.6766 2.4072 1.8346 2.4072s1.8346-.9824 1.8346-2.4072c0-1.4247-.6766-2.4071-1.8346-2.4071s-1.8346.9824-1.8346 2.4071Zm.8327 0c0-.9824.3123-1.685 1.0019-1.685s1.0019.7026 1.0019 1.685-.3123 1.685-1.0019 1.685-1.0019-.7026-1.0019-1.685Zm4.4822-2.3681c-.0455.553-.2863.7547-.8718.8067l-.4554.0391v.618h1.1255V20.5h.8328v-4.7037h-.6311Z" fill="#4C555F"></path>\n        <defs>\n          <filter id="homepage-abstraction-phone-path-c" x="9.0372" y="5.01155" width="62.9289" height="85.0869" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>\n            <feOffset dy="1.32948"></feOffset>\n            <feGaussianBlur stdDeviation="1.32948"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>\n            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_990_4682"></feBlend>\n            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>\n            <feOffset dy="2.21581"></feOffset>\n            <feGaussianBlur stdDeviation="3.10213"></feGaussianBlur>\n            <feColorMatrix values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.364706 0 0 0 0.25 0"></feColorMatrix>\n            <feBlend in2="effect1_dropShadow_990_4682" result="effect2_dropShadow_990_4682"></feBlend>\n            <feBlend in="SourceGraphic" in2="effect2_dropShadow_990_4682" result="shape"></feBlend>\n          </filter>\n          <filter id="homepage-abstraction-phone-path-e" x="11.567" y="11.9216" width="43.8619" height="44.2808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>\n            <feGaussianBlur stdDeviation="5.23126" result="effect1_foregroundBlur_990_4682"></feGaussianBlur>\n          </filter>\n          <filter id="homepage-abstraction-phone-path-f" x="13.9453" y="29.6172" width="39.1147" height="39.5083" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>\n            <feGaussianBlur stdDeviation="5.23126" result="effect1_foregroundBlur_990_4682"></feGaussianBlur>\n          </filter>\n          <filter id="homepage-abstraction-phone-path-g" x="27.2718" y="12.8499" width="38.2528" height="39.1666" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>\n            <feGaussianBlur stdDeviation="5.19639" result="effect1_foregroundBlur_990_4682"></feGaussianBlur>\n          </filter>\n          <radialGradient id="homepage-abstraction-phone-path-b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(33.10171119 35.23199341 -676.24595427 635.35713152 -1.56642 27.6897)">\n            <stop stop-color="#2C09F1"></stop>\n            <stop offset=".328125" stop-color="#ED8EF8"></stop>\n            <stop offset=".578125" stop-color="#F7CE5D"></stop>\n          </radialGradient>\n          <linearGradient id="homepage-abstraction-phone-path-a" x1="47.861" y1="73.1784" x2="27.2626" y2="-18.3913" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#6237D5"></stop>\n            <stop offset="1" stop-color="#E28CDF"></stop>\n          </linearGradient>\n        </defs>\n      ',
                    },
                    {
                      tagName: 'text',
                      content: '\n    ',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n      ',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n    \n\n    ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n      Abstraction Magazine\n    ',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n\n    ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n      C$19 per month\n    ',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n\n    \n      ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n        ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: '\n          ',
                    },
                    {
                      tagName: 'svg',
                      children: [],
                      styleStr: '',
                      style: {},
                      attributes: {},
                      html: '\n            <path fill="#FFF" d="M25.94 4.22l1.62 5.23h.03l1.62-5.23h1.4l-2.41 6.77c-.56 1.55-1.19 2.06-2.52 2.06-.1 0-.44 0-.53-.03v-1.06l.4.02c.6 0 .95-.26 1.16-.92l.12-.4-2.32-6.44h1.43zM7.4 3.43c.31.03 1.2.12 1.76.96C9.1 4.43 8.1 5 8.1 6.22c.01 1.45 1.27 1.94 1.29 1.95-.02.04-.2.69-.66 1.36-.4.59-.82 1.17-1.47 1.18-.64.01-.85-.38-1.58-.38-.73 0-.97.37-1.57.4-.63.01-1.11-.64-1.51-1.23-.83-1.19-1.45-3.36-.6-4.83a2.32 2.32 0 0 1 1.97-1.2c.63-.01 1.2.41 1.58.41.38 0 1.05-.5 1.83-.45zm14 .71c1.57 0 2.6.82 2.6 2.1v4.4h-1.27V9.6h-.03a2.26 2.26 0 0 1-2.02 1.12c-1.28 0-2.17-.76-2.17-1.9 0-1.13.87-1.78 2.46-1.88l1.7-.1v-.5c0-.72-.46-1.11-1.3-1.11-.7 0-1.2.36-1.3.9h-1.24c.04-1.15 1.12-1.98 2.57-1.98zm-6.13-2.35c1.71 0 2.9 1.18 2.9 2.9a2.8 2.8 0 0 1-2.95 2.93h-1.9v3.03h-1.36V1.79h3.3zm7.4 5.95l-1.52.1c-.85.06-1.3.38-1.3.93s.46.9 1.2.9c.92 0 1.63-.6 1.63-1.43v-.5zm-7.76-4.8h-1.58v3.53h1.57c1.2 0 1.87-.65 1.87-1.77 0-1.11-.68-1.75-1.86-1.75zM7.4 1.12c.06.57-.16 1.13-.5 1.54-.34.4-.88.73-1.42.68-.07-.55.2-1.13.5-1.48.35-.42.94-.71 1.42-.74z"></path>\n          ',
                    },
                    {
                      tagName: 'text',
                      content: '\n        ',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n\n        \n      ',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n\n      ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n        ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: '\n          Or pay with card\n        ',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n      ',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n    \n\n    \n\n    Email\n\n    ',
            },
            {
              tagName: 'DIV',
              children: [],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n\n    Card Information\n\n    ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n      ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: '\n        Number\n        ',
                    },
                    {
                      tagName: 'svg',
                      children: [],
                      styleStr: '',
                      style: {},
                      attributes: {},
                      html: '\n          <path fill="#FFF" stroke="#000" stroke-opacity=".2" stroke-width=".5" d="M1.6.18h13.8c.79 0 1.42.63 1.42 1.41v8.74c0 .78-.63 1.42-1.41 1.42H1.59c-.78 0-1.41-.64-1.41-1.42V1.6C.18.81.8.18 1.59.18z"></path>\n          <path fill="#1434cb" d="M1.98 4.39A5.1 5.1 0 0 0 .7 3.9l.02-.09h1.93c.27 0 .48.1.55.37l.42 2.01.13.6 1.18-2.97h1.28l-1.9 4.35H3.05l-1.07-3.8zm5.17 3.8h-1.2l.75-4.37h1.2l-.75 4.37zm4.37-4.26l-.16.95-.11-.05c-.21-.09-.5-.18-.9-.17-.48 0-.69.19-.7.38 0 .2.27.33.68.54.7.3 1.02.69 1.02 1.19-.01.9-.83 1.48-2.1 1.48-.54 0-1.06-.1-1.34-.22l.16-.99.17.07c.39.17.64.24 1.13.24.34 0 .71-.14.72-.43 0-.19-.16-.33-.63-.54-.45-.22-1.06-.57-1.05-1.2 0-.84.85-1.44 2.03-1.44.47 0 .85.1 1.08.19zm1.6 2.72h1l-.27-1.27-.09-.38-.15.43-.48 1.22zm1.5-2.83l.96 4.37h-1.12l-.14-.65h-1.54l-.26.65h-1.26l1.79-4c.13-.3.34-.36.63-.36h.93v-.01z"></path>\n        ',
                    },
                    {
                      tagName: 'text',
                      content: '\n        ',
                    },
                    {
                      tagName: 'svg',
                      children: [],
                      styleStr: '',
                      style: {},
                      attributes: {},
                      html: '\n          <rect width="17" height="12" fill="#0A2540" rx="2"></rect>\n          <circle cx="6" cy="6" r="3.6" fill="#ED0006"></circle>\n          <circle cx="10.8" cy="6" r="3.6" fill="#F9A000"></circle>\n          <path fill="#FF5D00" d="M8.4 3.32a3.6 3.6 0 0 1 0 5.36 3.58 3.58 0 0 1-.08-5.29z"></path>\n        ',
                    },
                    {
                      tagName: 'text',
                      content: '\n        \n          ',
                    },
                    {
                      tagName: 'svg',
                      children: [],
                      styleStr: '',
                      style: {},
                      attributes: {},
                      html: '\n            <rect width="17" height="12" fill="#016FD0" rx="2"></rect>\n            <polygon fill="#FFF" points="9.347 10.101 9.347 5.801 17 5.808 17 6.996 16.115 7.941 17 8.895 17 10.108 15.588 10.108 14.837 9.28 14.092 10.111"></polygon>\n            <polygon fill="#016FD0" points="9.858 9.63 9.858 6.275 12.703 6.275 12.703 7.047 10.779 7.047 10.779 7.572 12.657 7.572 12.657 8.332 10.779 8.332 10.779 8.847 12.703 8.847 12.703 9.63"></polygon>\n            <polygon fill="#016FD0" points="12.689 9.63 14.263 7.95 12.689 6.275 13.907 6.275 14.869 7.338 15.834 6.275 17 6.275 17 6.301 15.459 7.95 17 9.582 17 9.63 15.822 9.63 14.843 8.556 13.874 9.63"></polygon>\n            <polygon fill="#FFF" points="9.704 1.985 11.549 1.985 12.197 3.456 12.197 1.985 14.474 1.985 14.867 3.087 15.261 1.985 17 1.985 17 6.285 7.809 6.285"></polygon>\n            <path fill="#016FD0" d="M10.05 2.45L8.56 5.8H9.6l.28-.67h1.52l.28.67h1.05l-1.49-3.35h-1.18zm.13 1.93l.45-1.07.44 1.07h-.89z"></path>\n            <polygon fill="#016FD0" points="12.701 5.804 12.701 2.451 14.137 2.457 14.875 4.517 15.619 2.451 17 2.451 17 5.804 16.111 5.812 16.111 3.509 15.272 5.804 14.461 5.804 13.604 3.501 13.604 5.804"></polygon>\n          ',
                    },
                    {
                      tagName: 'text',
                      content: '\n        \n        \n          ',
                    },
                    {
                      tagName: 'svg',
                      children: [],
                      styleStr: '',
                      style: {},
                      attributes: {},
                      html: '\n  <path fill="#FFF" stroke="#000" stroke-opacity=".2" stroke-width=".5" d="M15.58 11.75c.68 0 1.24-.55 1.24-1.24V1.4c0-.32-.14-.64-.37-.87a1.22 1.22 0 0 0-.87-.36H1.42C1.09.18.78.3.55.53a1.3 1.3 0 0 0-.37.89v9.09c0 .32.14.64.37.88.23.23.54.36.87.36h14.16z"></path>\n  <path fill="#F27712" d="M8.93 12.07h6.65c.78 0 1.41-.62 1.42-1.4V9a27.44 27.44 0 0 1-8.07 3.07z"></path>\n  <path fill="#000" d="M16.41 6.79h-.6l-.68-.9h-.07v.9h-.49V4.56h.73c.57 0 .9.23.9.65 0 .35-.21.57-.57.64l.78.94zm-.72-1.56c0-.21-.17-.33-.47-.33h-.15v.68h.14c.31 0 .48-.12.48-.35zm-2.83-.67h1.38v.37h-.9v.5h.87v.38h-.87v.6h.9v.38h-1.4V4.56h.02zm-1.6 2.28l-1.06-2.3h.54l.67 1.51.68-1.5h.53l-1.07 2.3h-.28zm-4.46 0c-.75 0-1.34-.51-1.34-1.17 0-.65.6-1.17 1.35-1.17.21 0 .39.04.6.13v.52a.88.88 0 0 0-.61-.25c-.47 0-.83.34-.83.77 0 .44.36.77.85.77.23 0 .4-.07.6-.25v.52c-.23.1-.41.13-.62.13zM5.31 6.1c0 .43-.35.73-.88.73-.37 0-.63-.13-.87-.43l.33-.26c.1.2.3.3.53.3.22 0 .38-.15.38-.32 0-.1-.05-.18-.15-.23-.1-.05-.22-.1-.34-.13-.46-.15-.62-.3-.62-.62 0-.36.34-.63.79-.63.28 0 .53.08.74.24l-.25.3a.54.54 0 0 0-.4-.18c-.21 0-.37.11-.37.25 0 .12.1.18.38.28.57.18.73.34.73.7zM2.9 4.56h.5v2.23h-.5V4.56zM1.3 6.79H.59V4.56h.72c.8 0 1.35.46 1.35 1.1 0 .35-.16.66-.45.87-.25.18-.52.26-.9.26zm.57-1.67c-.16-.13-.35-.18-.67-.18h-.13v1.48h.14c.31 0 .5-.06.66-.18a.7.7 0 0 0 0-1.12z"></path>\n  <path fill="#F27712" d="M8.79 4.5c-.64 0-1.17.52-1.17 1.15 0 .68.5 1.2 1.17 1.2.66 0 1.18-.52 1.18-1.18 0-.65-.51-1.17-1.18-1.17z"></path>\n',
                    },
                    {
                      tagName: 'text',
                      content: '\n        \n      ',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n\n      ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: 'MM / YY',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n\n      ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: '\n        CVC\n        ',
                    },
                    {
                      tagName: 'svg',
                      children: [],
                      styleStr: '',
                      style: {},
                      attributes: {},
                      html: '\n          <rect width="17" height="12" y="2" fill="#E6EBF1" rx="2"></rect>\n          <rect width="13" height="2" x="2" y="4" fill="#FFF" rx="1"></rect>\n          <circle cx="14.5" cy="4.5" r="4.5" fill="#B4C2D0"></circle>\n          <path fill="#FFF" d="M12.5 5.96V3.03H12c-.04.33-.2.46-.58.5l-.24.01v.51h.66v1.9h.67zm1.61.04c.65 0 1.07-.4 1.07-.87 0-.36-.2-.57-.46-.67a.65.65 0 0 0 .4-.62c0-.48-.38-.84-.99-.84-.63 0-1.02.4-1.09.92l.62.07c.04-.25.2-.43.44-.43.23 0 .37.13.37.32 0 .22-.17.32-.42.32h-.26v.54h.27c.27 0 .46.1.46.33 0 .24-.18.37-.42.37-.25 0-.44-.16-.48-.45l-.65.1c.08.6.54.91 1.14.91zm2.53 0c.6 0 1.07-.43 1.07-1.02 0-.56-.36-.98-.95-.98-.2 0-.37.07-.48.16l.05-.54h1.2v-.58h-1.7l-.14 1.6.6.07c.07-.1.2-.18.37-.18.26 0 .42.2.42.46 0 .27-.2.45-.45.45s-.42-.17-.46-.44l-.65.1c.09.58.52.9 1.12.9z"></path>\n        ',
                    },
                    {
                      tagName: 'text',
                      content: '\n      ',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n    ',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n\n    Country or region\n\n    ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n      ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: '\n        United States\n        ',
                    },
                    {
                      tagName: 'svg',
                      children: [],
                      styleStr: '',
                      style: {},
                      attributes: {},
                      html: '\n          <polyline fill="none" stroke="#62788D" stroke-width="1.2" points="1 1 4.5 4.5 8 1"></polyline>\n        ',
                    },
                    {
                      tagName: 'text',
                      content: '\n      ',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n\n      ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: 'ZIP',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n    ',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n\n    ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n      \n      Pay \n    ',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n\n    \n\n    \n      \n      ',
            },
            {
              tagName: 'DIV',
              children: [
                {
                  tagName: 'text',
                  content: '\n  ',
                },
                {
                  tagName: 'DIV',
                  children: [],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n\n  ',
                },
                {
                  tagName: 'DIV',
                  children: [
                    {
                      tagName: 'text',
                      content: '\n    ',
                    },
                    {
                      tagName: 'DIV',
                      children: [
                        {
                          tagName: 'text',
                          content: '\n      ',
                        },
                        {
                          tagName: 'svg',
                          children: [],
                          styleStr: '',
                          style: {},
                          attributes: {},
                          html: '<path fill="#0A2540" d="M32.74 4.16l2.17 7.01h.04l2.17-7H39l-3.24 9.07c-.74 2.08-1.58 2.76-3.38 2.76-.14 0-.6-.02-.71-.05v-1.42l.54.03c.81 0 1.27-.35 1.55-1.23l.17-.53-3.12-8.64h1.93zM7.55 3.11h.24c.41.03 1.6.16 2.36 1.28-.06.05-1.4.82-1.4 2.45.02 1.95 1.72 2.6 1.73 2.62-.01.04-.27.91-.88 1.82-.54.79-1.1 1.56-1.98 1.58-.86.01-1.14-.5-2.12-.5-.98 0-1.3.48-2.1.51-.86.03-1.51-.84-2.05-1.63-1.1-1.6-1.95-4.5-.8-6.47A3.13 3.13 0 0 1 3.2 3.16c.84-.02 1.62.55 2.12.55s1.41-.66 2.47-.6zm19.07.95c2.1 0 3.48 1.1 3.48 2.8v5.92h-1.7v-1.43h-.05a3.04 3.04 0 0 1-2.71 1.52c-1.71 0-2.9-1.02-2.9-2.55 0-1.53 1.15-2.4 3.3-2.53l2.29-.14v-.66c0-.96-.63-1.49-1.76-1.49-.93 0-1.6.48-1.75 1.21h-1.66c.05-1.54 1.5-2.65 3.46-2.65zM18.36.9c2.3 0 3.91 1.58 3.91 3.9 0 2.31-1.63 3.91-3.96 3.91h-2.56v4.06h-1.84V.9h4.45zm9.97 7.97l-2.05.14c-1.15.07-1.75.5-1.75 1.25 0 .72.62 1.19 1.6 1.19 1.25 0 2.2-.8 2.2-1.9v-.68zM17.88 2.46h-2.13v4.71h2.12c1.6 0 2.52-.86 2.52-2.36s-.91-2.35-2.51-2.35zM7.8 0a2.9 2.9 0 0 1-.67 2.06c-.46.54-1.19.97-1.92.9-.1-.72.27-1.5.69-1.98A2.87 2.87 0 0 1 7.8 0z"></path>',
                        },
                        {
                          tagName: 'text',
                          content: '\n      ',
                        },
                        {
                          tagName: 'SPAN',
                          children: [
                            {
                              tagName: 'text',
                              content: '\n        Cancel\n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n    ',
                        },
                      ],
                      styleStr: '',
                      style: {},
                      attributes: {},
                    },
                    {
                      tagName: 'text',
                      content: '\n\n    ',
                    },
                    {
                      tagName: 'DIV',
                      children: [
                        {
                          tagName: 'text',
                          content: '\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content: '\n        \n        ',
                            },
                            {
                              tagName: 'svg',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                              html: '<rect width="23" height="15" x=".5" y=".5" fill="none" stroke="#E6EBF1" rx="2"></rect><path fill="#1434cb" d="M3.29 5.91a7.2 7.2 0 0 0-1.79-.67l.03-.13h2.73c.38.01.68.13.77.52l.6 2.84.18.85 1.67-4.2h1.8L6.6 11.27H4.8L3.3 5.9zm7.31 5.37H8.9l1.06-6.17h1.7l-1.06 6.17zm6.17-6.02l-.23 1.34-.16-.07c-.3-.12-.71-.25-1.27-.24-.67 0-.97.27-.98.54 0 .28.37.47.96.76.98.44 1.44.98 1.43 1.68-.01 1.28-1.17 2.1-2.96 2.1a5.4 5.4 0 0 1-1.9-.32l.24-1.39.23.1c.55.23.91.33 1.6.33.48 0 1-.2 1.01-.6 0-.27-.22-.47-.88-.77-.64-.3-1.5-.8-1.49-1.68 0-1.2 1.2-2.04 2.87-2.04.66 0 1.2.14 1.53.26zm2.26 3.84h1.41l-.39-1.79-.12-.53-.22.6-.68 1.72zm2.1-3.99l1.37 6.17h-1.58l-.2-.92h-2.18l-.36.92H16.4l2.52-5.66c.18-.4.49-.5.9-.5h1.3z"></path>',
                            },
                            {
                              tagName: 'text',
                              content: '\n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content:
                                '\n        Royal Bank of Canada (•••• 1234)\n        ',
                            },
                            {
                              tagName: 'BR',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                            },
                            {
                              tagName: 'text',
                              content:
                                '3647 Halsey Ave Toronto Ontario\n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n\n      ',
                        },
                        {
                          tagName: 'svg',
                          children: [],
                          styleStr: '',
                          style: {},
                          attributes: {},
                          html: '<polyline fill="none" stroke="#4B82FE" stroke-width="1.5" points="1 1 5 5 1 9"></polyline>',
                        },
                        {
                          tagName: 'text',
                          content: '\n    ',
                        },
                      ],
                      styleStr: '',
                      style: {},
                      attributes: {},
                    },
                    {
                      tagName: 'text',
                      content: '\n\n    ',
                    },
                    {
                      tagName: 'DIV',
                      children: [
                        {
                          tagName: 'text',
                          content: '\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content:
                                '\n        \n          Billing\n        \n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content: '\n        Logan Roy\n        ',
                            },
                            {
                              tagName: 'BR',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                            },
                            {
                              tagName: 'text',
                              content: '3647 Halsey Ave',
                            },
                            {
                              tagName: 'BR',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                            },
                            {
                              tagName: 'text',
                              content: '\nToronto',
                            },
                            {
                              tagName: 'BR',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                            },
                            {
                              tagName: 'text',
                              content: '\nOntario M3B 2W6',
                            },
                            {
                              tagName: 'BR',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                            },
                            {
                              tagName: 'text',
                              content: '\nCanada\n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n\n      ',
                        },
                        {
                          tagName: 'svg',
                          children: [],
                          styleStr: '',
                          style: {},
                          attributes: {},
                          html: '<polyline fill="none" stroke="#4B82FE" stroke-width="1.5" points="1 1 5 5 1 9"></polyline>',
                        },
                        {
                          tagName: 'text',
                          content: '\n    ',
                        },
                      ],
                      styleStr: '',
                      style: {},
                      attributes: {},
                    },
                    {
                      tagName: 'text',
                      content: '\n\n    \n\n    ',
                    },
                    {
                      tagName: 'DIV',
                      children: [
                        {
                          tagName: 'text',
                          content: '\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content: '\n        Contact\n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content:
                                '\n        logan.roy@example.ca\n        ',
                            },
                            {
                              tagName: 'BR',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                            },
                            {
                              tagName: 'text',
                              content: '(+1) 647-748-5253\n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n\n      ',
                        },
                        {
                          tagName: 'svg',
                          children: [],
                          styleStr: '',
                          style: {},
                          attributes: {},
                          html: '<polyline fill="none" stroke="#4B82FE" stroke-width="1.5" points="1 1 5 5 1 9"></polyline>',
                        },
                        {
                          tagName: 'text',
                          content: '\n    ',
                        },
                      ],
                      styleStr: '',
                      style: {},
                      attributes: {},
                    },
                    {
                      tagName: 'text',
                      content: '\n\n    ',
                    },
                    {
                      tagName: 'DIV',
                      children: [
                        {
                          tagName: 'text',
                          content: '\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content: '\n        Pay total\n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content:
                                '\n        \n          C$85.00\n        \n      ',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n    ',
                        },
                      ],
                      styleStr: '',
                      style: {},
                      attributes: {},
                    },
                    {
                      tagName: 'text',
                      content: '\n\n    ',
                    },
                    {
                      tagName: 'DIV',
                      children: [
                        {
                          tagName: 'text',
                          content: '\n      ',
                        },
                        {
                          tagName: 'DIV',
                          children: [
                            {
                              tagName: 'text',
                              content: '\n  ',
                            },
                            {
                              tagName: 'DIV',
                              children: [
                                {
                                  tagName: 'text',
                                  content: '\n    ',
                                },
                                {
                                  tagName: 'svg',
                                  children: [],
                                  styleStr: '',
                                  style: {},
                                  attributes: {},
                                  html: '\n      <clipPath class="Face__phoneClip" id="Face__phoneClip">\n        <path d="M20,85L20,85,60,85,60,220,20,220Z"></path>\n      </clipPath>\n      <g clip-path="url(#Face__phoneClip)">\n        <path class="Face__phoneGlare" d="M20,55L20,55,60,55,60,220,20,220Z"></path>\n      </g>\n      <g class="Face__phoneIcon">\n        <rect width="40" height="80" fill="none" rx="5" x="20" y="84"></rect>\n        <rect width="18" height="2" fill="#0278fc" rx=".5" x="31" y="84"></rect>\n      </g>\n    ',
                                },
                                {
                                  tagName: 'text',
                                  content: '\n  ',
                                },
                              ],
                              styleStr: '',
                              style: {},
                              attributes: {},
                            },
                            {
                              tagName: 'text',
                              content: '\n  ',
                            },
                            {
                              tagName: 'DIV',
                              children: [
                                {
                                  tagName: 'text',
                                  content: '\n    ',
                                },
                                {
                                  tagName: 'svg',
                                  children: [],
                                  styleStr: '',
                                  style: {},
                                  attributes: {},
                                  html: '\n      <path class="Face__corner Face__corner--tl" d="M10,30 L10,22 A12,12,0,0,1,22,10L30,10" data-js-target-list="FaceIdAnimation.tl"></path>\n      <path class="Face__corner Face__corner--tr" d="M70,10 L78,10 A12,12,0,0,1,90,22L90,30" data-js-target-list="FaceIdAnimation.tr"></path>\n      <path class="Face__corner Face__corner--br" d="M90,70 L90,78 A12,12,0,0,1,78,90L70,90" data-js-target-list="FaceIdAnimation.br"></path>\n      <path class="Face__corner Face__corner--bl" d="M30,90 L22,90 A12,12,0,0,1,10,78L10,70" data-js-target-list="FaceIdAnimation.bl"></path>\n    ',
                                },
                                {
                                  tagName: 'text',
                                  content: '\n    ',
                                },
                                {
                                  tagName: 'svg',
                                  children: [],
                                  styleStr: '',
                                  style: {},
                                  attributes: {},
                                  html: '\n      <path class="Face__corner Face__corner--tl" d="M10,30 L10,22 A12,12,0,0,1,22,10L30,10" data-js-target-list="FaceIdAnimation.tl"></path>\n      <path class="Face__corner Face__corner--tr" d="M70,10 L78,10 A12,12,0,0,1,90,22L90,30" data-js-target-list="FaceIdAnimation.tr"></path>\n      <path class="Face__corner Face__corner--br" d="M90,70 L90,78 A12,12,0,0,1,78,90L70,90" data-js-target-list="FaceIdAnimation.br"></path>\n      <path class="Face__corner Face__corner--bl" d="M30,90 L22,90 A12,12,0,0,1,10,78L10,70" data-js-target-list="FaceIdAnimation.bl"></path>\n    ',
                                },
                                {
                                  tagName: 'text',
                                  content: '\n  ',
                                },
                              ],
                              styleStr: '',
                              style: {},
                              attributes: {},
                            },
                            {
                              tagName: 'text',
                              content: '\n  ',
                            },
                            {
                              tagName: 'svg',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                              html: '\n    <g class="Face__eyes" data-js-target="FaceIdAnimation.eyes">\n      <path class="Face__eye" d="M33,39 l0,6.5"></path>\n      <path class="Face__eye" d="M67,39 l0,6.5"></path>\n    </g>\n    <path class="Face__nose" d="M51.5,38.5 L51.5,53.5A4,4,0,0,1,47,57.5L46,57.5" data-js-target="FaceIdAnimation.nose"></path>\n    <path class="Face__mouth" d="M37,68 A20,20,0,0,0,63,68" data-js-target="FaceIdAnimation.mouth"></path>\n  ',
                            },
                            {
                              tagName: 'text',
                              content: '\n  ',
                            },
                            {
                              tagName: 'svg',
                              children: [],
                              styleStr: '',
                              style: {},
                              attributes: {},
                              html: '\n    <path d="M34,52,43,61,66,39"></path>\n  ',
                            },
                            {
                              tagName: 'text',
                              content: '\n  \n',
                            },
                          ],
                          styleStr: '',
                          style: {},
                          attributes: {},
                        },
                        {
                          tagName: 'text',
                          content: '\n    ',
                        },
                      ],
                      styleStr: '',
                      style: {},
                      attributes: {},
                    },
                    {
                      tagName: 'text',
                      content: '\n  ',
                    },
                  ],
                  styleStr: '',
                  style: {},
                  attributes: {},
                },
                {
                  tagName: 'text',
                  content: '\n',
                },
              ],
              styleStr: '',
              style: {},
              attributes: {},
            },
            {
              tagName: 'text',
              content: '\n    \n  ',
            },
          ],
          styleStr: '',
          style: {},
          attributes: {},
        },
        {
          tagName: 'text',
          content: '\n  ',
        },
      ],
      styleStr: '',
      style: {},
      attributes: {},
    },
    {
      tagName: 'text',
      content: '\n',
    },
  ],
  styleStr: '',
  style: {},
  attributes: {},
}
