import { ProductInfoProps } from "../components/lib/super_components/product"
import { randomItem, randomPick, shuffle } from "../components/utils"
import { sizedArray } from "../util"
import { getRandomName } from "./faker"
import { genDigits, genFakePrice, genFakePriceNumeric } from "./table"

const promotionalLines = [
  'Pay <a>$10.36 or less for 6 months</a> when you select Affirm as your payment method',
  'See other <a>new offers</a> from $44.69',
  'David, give yourself options by adding another card to your Amazon account',
  'This monthly fee will be waived for approved applications after the first month.',
  'Pay me $10.00 a month for absolute piece of mind. You will be safe from the psychic attacks of your foes',
  '“Wildly imaginative.”—President Barack Obama',
  '“A mind-bending epic.”—The New York Times',
  '“Absolutely mind-unfolding. . . . a science-fiction epic of the most profound kind.”—NPR',
  '“A breakthrough book . . . a unique blend of scientific and philosophical speculation, politics and history, conspiracy theory and cosmology.”—George R. R. Martin',
  '“Liu Cixin’s writing evokes the thrill of exploration and the beauty of scale. . . . Extraordinary.”—The New Yorker',
  'Limited-time offer: Get 50% off your first purchase!',
  'Unlock exclusive deals by signing up today!',
  'Hurry, this sale ends soon—don’t miss out!',
  'Transform your space with our best-selling products!',
  'Free shipping on orders over $50—shop now!',
  'Discover the secret to flawless skin with our all-natural formula!',
  'Join millions who have already experienced the difference!',
  'Upgrade your home with cutting-edge technology at unbeatable prices!',
  'Get your dream body with our revolutionary fitness program!',
  'Act now and receive a free gift with every order!',
]

const avatars = [
  'a.jpg',
  'adam.jpg',
  'beetle.jpg',
  'ben.jpg',
  'bike.jpg',
  'debbie.jpg',
  'guillermo.jpg',
  'guts.jpg',
  'historian.jpg',
  'hulk.jpg',
  'kent.jpg',
  'monkey.jpg',
  'monkey2.jpg',
  'monkey3.jpg',
  'pilot.jpg',
  'rp.jpg',
  'ryan.jpg',
  'shruti.jpg',
  'superman.jpg',
]

const encourageButtons = [
  'Learn more',
  'Click to add',
  'Start a free trial',
  ''
]

export const genRandomButton = () => randomItem(encourageButtons)

export const genRandomPromotion = () => {
  return randomItem(promotionalLines)
}

export const genStupidPromotion = (): {
  asset: string
  buttonLabel: string
  html: string
} => {
  return {
    asset: `/avatars/${randomItem(avatars)}`,
    buttonLabel: genRandomButton(),
    html: genRandomPromotion(),
  }
}

// PRODUCT

type Products = [string, string];

const products: Products[] = [
  ["JOLLY RANCHER Hard Candy Lollipops", "One box of an assortment of 50 JOLLY RANCHER lollipops candy"],
  ["Apple iPhone 14 Pro", "Latest iPhone with advanced camera system and A16 Bionic chip"],
  ["Samsung Galaxy S23 Ultra", "Premium Android smartphone with a 200MP camera and 5000mAh battery"],
  ["Sony WH-1000XM5", "Wireless noise-cancelling headphones with industry-leading sound quality"],
  ["Kindle Paperwhite", "Waterproof e-reader with a 6.8-inch display and adjustable warm light"],
  ["Nike Air Force 1 '07", "Classic white leather sneakers with a low-cut silhouette"],
  ["Instant Pot Duo 7-in-1", "Multifunctional electric pressure cooker for fast and healthy meals"],
  ["Dyson V15 Detect", "Cordless vacuum cleaner with laser technology to reveal hidden dust"],
  ["Fitbit Charge 5", "Advanced fitness tracker with stress management and built-in GPS"],
  ["Levi's 501 Original Jeans", "Classic straight-fit jeans made with durable denim"],
  ["Adidas Ultraboost 22", "High-performance running shoes with responsive cushioning"],
  ["Apple AirPods Pro (2nd Gen)", "True wireless earbuds with active noise cancellation and MagSafe charging case"],
  ["Bose SoundLink Revolve+ II", "Portable Bluetooth speaker with 360-degree sound and water resistance"],
  ["Nespresso Vertuo Next", "Compact coffee and espresso machine with one-touch brewing system"],
  ["Logitech MX Master 3S", "Wireless ergonomic mouse with customizable buttons and ultra-fast scrolling"],
  ["Herman Miller Aeron Chair", "Ergonomic office chair with adjustable lumbar support and breathable mesh"],
  ["Oculus Quest 2", "All-in-one VR headset with 128GB storage for immersive gaming experiences"],
  ["Anker PowerCore 10000", "Portable charger with high-capacity battery for phones and tablets"],
  ["Nintendo Switch OLED Model", "Hybrid gaming console with a vibrant 7-inch OLED screen"],
  ["Apple MacBook Air (M2)", "Ultra-thin laptop with Apple M2 chip and Retina display"],
  ["Razer DeathAdder V2", "Ergonomic gaming mouse with a 20K DPI optical sensor"],
  ["Echo Dot (5th Gen)", "Smart speaker with Alexa and improved sound quality"],
  ["Sony PlayStation 5", "Next-generation gaming console with 4K gaming and fast loading times"],
  ["Samsung 65-inch QN90A Neo QLED TV", "High-end 4K Smart TV with Quantum HDR and ultra-slim design"],
  ["Tile Mate (2022)", "Bluetooth tracker to help find keys, bags, or anything else"],
  ["Hydro Flask 32 oz Water Bottle", "Stainless steel insulated water bottle that keeps drinks cold for 24 hours"],
  ["Apple Watch Series 8", "Advanced smartwatch with health tracking, ECG, and always-on Retina display"],
  ["GoPro HERO11 Black", "Action camera with 5.3K video recording and advanced stabilization"],
  ["Ring Video Doorbell 4", "Smart video doorbell with two-way talk and motion detection"],
  ["HP Envy x360 2-in-1 Laptop", "Convertible touchscreen laptop with AMD Ryzen 5 processor"],
  ["Dyson Supersonic Hair Dryer", "Fast-drying hair dryer with intelligent heat control and multiple attachments"],
  ["Keurig K-Elite Coffee Maker", "Single-serve coffee maker with strong brew and iced coffee settings"],
  ["Lego Star Wars Millennium Falcon", "1,351-piece building set for recreating the iconic starship"],
  ["Sony A7 IV Mirrorless Camera", "Full-frame camera with 33MP sensor and 4K 60p video"],
  ["Breville Barista Express Espresso Machine", "All-in-one espresso machine with a built-in grinder and steam wand"],
  ["Theragun Elite", "Percussive therapy device for deep muscle treatment and relaxation"],
  ["Yeti Tundra 45 Cooler", "Durable, rotomolded cooler with extreme ice retention"],
  ["Oral-B Genius X Electric Toothbrush", "AI-powered electric toothbrush with personalized coaching"],
  ["NordicTrack Commercial 1750 Treadmill", "High-end treadmill with interactive workout programs and incline settings"],
  ["Sonos Beam (Gen 2)", "Compact smart soundbar with Dolby Atmos for immersive audio"],
  ["Canon EOS R5", "Mirrorless camera with 45MP full-frame sensor and 8K video recording"],
  ["Dell XPS 13 Laptop", "Ultrabook with InfinityEdge display and Intel 11th Gen processors"],
  ["Anova Culinary Precision Cooker", "Sous vide machine for precise temperature control when cooking"],
  ["Philips Sonicare DiamondClean", "Advanced electric toothbrush with smart sensors and app integration"],
  ["Jabra Elite 85t", "True wireless earbuds with adjustable noise cancellation and powerful sound"],
  ["Roku Streaming Stick 4K", "Portable 4K streaming device with voice remote and TV controls"],
  ["Black+Decker 20V Max Drill", "Cordless drill/driver with lithium-ion battery for household projects"],
  ["Casper Original Mattress", "Foam mattress designed for pressure relief and cooling comfort"],
  ["HyperX Cloud II Gaming Headset", "Wired gaming headset with 7.1 surround sound and memory foam ear cushions"],
  ["KitchenAid Artisan Series 5-Qt. Stand Mixer", "Iconic stand mixer with a powerful motor and versatile attachments"]
];

const tags: string[] = [
  "Electronics",
  "Home & Kitchen",
  "Fashion",
  "Health & Beauty",
  "Toys & Games",
  "Sports & Outdoors",
  "Books",
  "Computers & Accessories",
  "Groceries",
  "Automotive",
  "Office Supplies",
  "Tools & Home Improvement",
  "Smart Home",
  "Pet Supplies",
  "Furniture",
  "Appliances",
  "Video Games",
  "Cell Phones & Accessories",
  "Movies & TV",
  "Music",
  "Baby Products",
  "Jewelry",
  "Watches",
  "Garden & Outdoor",
  "Luggage & Travel Gear",
  "Arts & Crafts",
  "Personal Care",
  "Beauty Tools",
  "Home Decor",
  "Cameras & Photography",
  "Fitness Equipment",
  "Cleaning Supplies",
  "Wearable Technology",
  "Outdoor Recreation",
  "Power Tools",
  "Seasonal Items",
  "Gift Cards",
  "Bedding",
  "Mattresses",
  "Small Appliances",
  "Office Furniture",
  "Shoes",
  "Handbags & Wallets",
  "Luxury Beauty",
  "Musical Instruments",
  "Board Games",
  "Outdoor Lighting",
  "Bike & Scooter Accessories",
  "Tablets",
  "Streaming Devices",
  "Smartphones"
];

export const genProductInfo = ({
  withTag,
  withStars,
  withDescription
}: {
  withTag?: boolean
  withStars?: boolean
  withDescription?: boolean
}): ProductInfoProps => {
  const tagN = withTag
    ? randomPick(1,4)
    : 0
  const [title, description] = randomItem(products)
  return {
    tags: tagN
      ? shuffle(tags).slice(tagN)
      : undefined,
    star: withStars
      ? {
        max: 5,
        rating: randomPick(2,5),
        reviews: randomPick(19,1000),
        mui: Math.random() > 0.6
      }
      : undefined,
    price: genFakePriceNumeric(2),
    title,
    description: withDescription
      ? description
      : undefined,
  }
}

const secureCheckoutSynonyms: string[] = [
  "Safe Payment",
  "Protected Checkout",
  "Encrypted Payment",
  "Trusted Checkout",
  "Secure Payment",
  "Secure Checkout"
];

export const genCheckoutHeading = () => randomItem(secureCheckoutSynonyms)

const shoppingCartSynonyms: string[] = [
  'Order Basket',
  'Shopping Cart',
  'Your Cart'
]

export const genShoppingCart = (): {
  heading: string;
  link?: string;
  products: (ProductInfoProps & {
      asset: string;
  })[];
  price: number;
  checkedIndexes?: number[];
} => {
  const nProducts = randomPick(1, 4)
  return {
    heading: randomItem(shoppingCartSynonyms),
    price: genFakePriceNumeric(randomPick(2,3)),
    checkedIndexes: sizedArray(nProducts).map(() => {
      return randomPick(0,1)
    }).reduce((acc, n, index) => {
      return n === 1
        ? acc.concat(index)
        : acc
    }, [] as number[]),
    products: sizedArray(nProducts)
      .map(() => {
        return {
          ...genProductInfo({
            withTag: true,
            withDescription: true
          }),
          asset: `/avatars/${randomItem(avatars)}`
        }
      }),
  }
}

export const genDeliveryInfo = () => {
  return {
    heading:`Delivering to ${getRandomName({})}`,
    copy: `100 Princess Peach Lane`,
    link: "Add Delivery Instructions",
  }
}

export const genPaymentInfo = () => {
  const cards = [
    'Visa',
    'Mastercard',
  ]

  return {
    heading: `Pay with ${randomItem(cards)} ${genDigits(4)}`,
    link: 'Use a gift card, voucher, or promo code'
  }
}