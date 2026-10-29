const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const IMG = {
  hero: u('photo-1519741497674-611481863552', 1600),
  wedding: u('photo-1469371670807-013ccf25f16a'),
  corporate: u('photo-1540575467063-178a50c2df87'),
  birthday: u('photo-1530103862676-de8c9debad1d'),
  social: u('photo-1511795409834-ef04bbd61622'),
  destination: u('photo-1507504031003-b417219a0fde'),
  why: u('photo-1478146896981-b80fe463b330', 1200),
  concert: u('photo-1492684223066-81342ee5ff30'),
  party: u('photo-1464366400600-7168b8af9bc3'),
}

export const MARQUEE = ['Weddings', 'Corporate Events', 'Birthday Parties', 'Social Gatherings', 'Destination Events', 'Decor & Design', 'Live Entertainment']

export const NAV = ['Home', 'About Us', 'Services', 'Portfolio', 'Packages', 'Reviews', 'Contact']

export const HIGHLIGHTS = [
  ['Sparkles', 'Creative Concepts', 'Unique & innovative ideas'],
  ['ClipboardCheck', 'Perfect Planning', 'Organized to perfection'],
  ['Crown', 'Flawless Execution', 'We handle every detail'],
  ['Heart', 'Memorable Moments', 'Cherished forever'],
]

export const SERVICES = [
  { icon: 'Gem', title: 'Wedding Planning', text: 'Dream weddings designed to perfection.', img: IMG.wedding },
  { icon: 'Presentation', title: 'Corporate Events', text: 'Professional events that inspire and impress.', img: IMG.corporate },
  { icon: 'Cake', title: 'Birthday Parties', text: 'Make birthdays magical and memorable.', img: IMG.birthday },
  { icon: 'Users', title: 'Social Gatherings', text: 'Beautifully planned events with a personal touch.', img: IMG.social },
  { icon: 'Palmtree', title: 'Destination Events', text: 'Unique locations, unforgettable experiences.', img: IMG.destination },
]

export const STATS = [
  ['CalendarCheck', 500, 'Events Completed'],
  ['Smile', 250, 'Happy Clients'],
  ['Award', 10, 'Years Of Experience'],
  ['UsersRound', 50, 'Team Members'],
]

export const WHY = ['Creative & Unique Concepts', 'Attention to Every Detail', 'Trusted Vendor Network', 'On-Time, Every Time', 'Stress-Free Experience']

export const FILTERS = ['All Events', 'Weddings', 'Corporate', 'Birthday', 'Social', 'Destination']

export const PROJECTS = [
  { cat: 'Weddings', img: IMG.hero, big: true },
  { cat: 'Weddings', img: IMG.wedding },
  { cat: 'Corporate', img: IMG.corporate },
  { cat: 'Birthday', img: IMG.birthday },
  { cat: 'Destination', img: IMG.destination },
  { cat: 'Social', img: IMG.social },
  { cat: 'Birthday', img: IMG.party },
  { cat: 'Corporate', img: IMG.concert },
]

export const REVIEWS = [
  { name: 'Neha & Raj', text: 'Eventora planned our wedding perfectly! Every detail was beyond our expectations.' },
  { name: 'Amit Sharma', text: 'Our corporate event was a huge success. Great team, creative ideas & flawless execution.' },
  { name: 'Pooja Mehta', text: 'The birthday setup was magical! Everyone loved it. Highly recommended!' },
  { name: 'Karan Singh', text: 'From the first call to the last dance, they made everything effortless for us.' },
  { name: 'Riya Kapoor', text: 'Our destination wedding in Udaipur was a dream. Thank you, Eventora team!' },
]

export const CONTACT = { phone: '+919876543210', whatsapp: '919876543210', msg: 'Hi Eventora, I want to plan an event.' }
