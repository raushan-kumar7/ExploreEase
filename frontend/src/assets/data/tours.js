import bodhgaya from '../images/bodh-gaya.jpg';
import coimbatore from '../images/coimbatore.jpg';
import darjeeling from '../images/darjeeling.jpg';
import goldentemple from '../images/golden-temple.jpg';
import goldentriangle from '../images/golden-triangle.jpg';
import gulmarg from '../images/gulmarg.jpg';
import hampi from '../images/hampi.jpg';
import jagannath from '../images/jagannath.jpg';
import kesariyastupa from '../images/kesariya-stupa.jpeg';
import kodaikanal from '../images/kodaikanal.jpg';
import ladakh from '../images/ladakh.jpg';
import manali from '../images/manali.jpg';
import mussoorie from '../images/mussoorie.jpg';
import nalanda from '../images/nalanda.jpeg';
import rishikesh from '../images/rishikesh.jpg';
import tapovan from '../images/tapovan.jpeg';
import vagator from '../images/vagator.jpg';
import vaishnodevi from '../images/vaishno-devi.jpg';
import vikramshila from '../images/vikramshila.jpeg';
import vrindavan from '../images/vrindavan.jpg';

const tours = [
  {
    id: "01",
    title: "Bodh Gaya",
    city: "Gaya",
    distance: 500,
    address: "Bihar, India",
    price: 6000,
    maxGroupSize: 4,
    desc: "Site of Buddha's enlightenment, Buddhist pilgrimage, spiritual serenity, archaeological wonders.",
    reviews: [
      {
        name: "Ritika",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: bodhgaya,
    featured: false,
  },
  {
    id: "02",
    title: "Coimbatore Temple",
    city: "Coimbatore",
    distance: 1000,
    address: "Tamil Nadu, India",
    price: 7000,
    maxGroupSize: 4,
    desc: "Thriving industrial hub, textile manufacturing, educational institutions, vibrant culture, gateway to the Nilgiris.",
    reviews: [
      {
        name: "Ayush",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: coimbatore,
    featured: false,
  },
  {
    id: "03",
    title: "Darjeeling",
    city: "Darjeeling",
    distance: 1700,
    address: "West Bengal, India",
    price: 6000,
    maxGroupSize: 5,
    desc: "Misty hills, aromatic tea gardens, vibrant culture, stunning views.",
    reviews: [
      {
        name: "Nikhil",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: darjeeling,
    featured: false,
  },
  {
    id: "04",
    title: "Golden Temple",
    city: "Amritsar",
    distance: 300,
    address: "Punjab , India",
    price: 3000,
    maxGroupSize: 5,
    desc: "Magnificent Sikh temple, shimmering golden domes, spiritual reverence, community kitchen.",
    reviews: [
      {
        name: "Omprakash",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: goldentemple,
    featured: false,
  },
  {
    id: "05",
    title: "Golden Triangle",
    city: "Jaipur",
    distance: 300,
    address: "Rajasthan , India",
    price: 7500,
    maxGroupSize: 6,
    desc: "Regal palaces, vibrant markets, stunning architecture, rich Rajasthani heritage.",
    reviews: [
      {
        name: "Akhilesh",
        rating: 4.2,
      },
    ],
    avgRating: 4.5,
    photo: goldentriangle,
    featured: false,
  },
  {
    id: "06",
    title: "Gulmarg",
    city: "Kashmir",
    distance: 1200,
    address: "Jammu & Kashmir, India",
    price: 3000,
    maxGroupSize: 4,
    desc: "Majestic Himalayas, lush meadows, world-class skiing, enchanting beauty.",
    reviews: [
      {
        name: "Rohit",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: gulmarg,
    featured: false,
  },
  {
    id: "07",
    title: "Hampi",
    city: "Karnataka",
    distance: 800,
    address: "Karnataka, India",
    price: 6000,
    maxGroupSize: 4,
    desc: "Expansive ruins, UNESCO heritage, architectural marvels, historical grandeur, captivating landscape.",
    reviews: [
      {
        name: "Ritik",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: hampi,
    featured: false,
  },
  {
    id: "08",
    title: "Jagannath Temple",
    city: "Puri",
    distance: 1200,
    address: "Orissa, India",
    price: 8000,
    maxGroupSize: 2,
    desc: "Iconic Hindu temple, Lord Jagannath, grand architecture, religious festivities, spiritual devotion.",
    reviews: [
      {
        name: "Richu",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: jagannath,
    featured: false,
  },
  {
    id: "09",
    title: "Kesariya Stupa",
    city: "East Champaran",
    distance: 60,
    address: "Bihar, India",
    price: 8000,
    maxGroupSize: 7,
    desc: "Massive Buddhist stupa, East Champaran, glorious Buddhist past, archaeological marvel.",
    reviews: [
      {
        name: "Raja",
        rating: 4.9,
      },
    ],
    avgRating: 4.5,
    photo: kesariyastupa,
    featured: false,
  },
  {
    id: "10",
    title: "Kodaikanal",
    city: "Kodaikanal",
    distance: 800,
    address: "Tamil Nadu, India",
    price: 8000,
    maxGroupSize: 4,
    desc: "Picturesque hill station, tranquil lakes, lush forests, perfect getaway.",
    reviews: [
      {
        name: "Ritesh",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: kodaikanal,
    featured: false,
  },
  {
    id: "11",
    title: "Leh Ladakh",
    city: "Kashmir",
    distance: 1000,
    address: "Jammu & Kashmir, India",
    price: 1000,
    maxGroupSize: 5,
    desc: "Breathtaking Himalayas, serene lakes, vibrant culture, adventurous activities.",
    reviews: [
      {
        name: "Zafar Ali Khan",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: ladakh,
    featured: true,
  },
  {
    id: "12",
    title: "Manali",
    city: "Manali",
    distance: 800,
    address: "Himachal Pradesh, India",
    price: 1500,
    maxGroupSize: 2,
    desc: "Picturesque hills, apple orchards, serene valleys, diverse activities.",
    reviews: [
      {
        name: "Deependra",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: manali,
    featured: false,
  },
  {
    id: "13",
    title: "Mussoorie",
    city: "Mussoorie",
    distance: 700,
    address: "Uttarakhand, India",
    price: 10000,
    maxGroupSize: 2,
    desc: "Scenic hill town, panoramic Himalayan views, colonial-era charm, popular retreat.",
    reviews: [
      {
        name: "Arif",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: mussoorie,
    featured: false,
  },
  {
    id: "14",
    title: "Ruins Of Nalanda",
    city: "Nalanda",
    distance: 60,
    address: "Bihar, India",
    price: 8000,
    maxGroupSize: 7,
    desc: "Ancient seat of learning, Buddhist scriptures, diverse subjects, Chinese accounts.",
    reviews: [
      {
        name: "Vivek",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: nalanda,
    featured: false,
  },
  {
    id: "15",
    title: "Rishikesh",
    city: "Rishikesh",
    distance: 400,
    address: "Uttarakhand , India",
    price: 2500,
    maxGroupSize: 2,
    desc: "Yoga capital, sacred Ganges, adventure sports, spiritual serenity.",
    reviews: [
      {
        name: "Rakesh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: rishikesh,
    featured: false,
  },
  {
    id: "16",
    title: "Tapovan",
    city: "Rajgir",
    distance: 500,
    address: "Bihar, India",
    price: 8000,
    maxGroupSize: 4,
    desc: "Ancient sacred hot springs, healing powers, Buddhist pilgrimage site.",
    reviews: [
      {
        name: "Rajdip",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: tapovan,
    featured: false,
  },
  {
    id: "17",
    title: "Big Vagator Beach",
    city: "Goa",
    distance: 500,
    address: "Goa, India",
    price: 7000,
    maxGroupSize: 7,
    desc: "Stunning coastline, golden sands, lively atmosphere, popular Goa destination.",
    reviews: [
      {
        name: "Nilesh",
        rating: 4.3,
      },
    ],
    avgRating: 4.5,
    photo: vagator,
    featured: false,
  },
  {
    id: "18",
    title: "Shri Mata Vaishno Devi",
    city: "Katra",
    distance: 300,
    address: "Jammu & Kashmir, India",
    price: 4000,
    maxGroupSize: 4,
    desc: "Revered Hindu shrine, arduous pilgrimage, serene surroundings, spiritual devotion.",
    reviews: [
      {
        name: "Raushan",
        rating: 5.0,
      },
    ],
    avgRating: 5.0,
    photo: vaishnodevi,
    featured: false,
  },
  {
    id: "19",
    title: "Ruins Of Vikramshila",
    city: "Bhagalpur",
    distance: 400,
    address: "Bihar, India",
    price: 5000,
    maxGroupSize: 4,
    desc: "Revered Hindu shrine, arduous pilgrimage, serene surroundings, spiritual devotion.",
    reviews: [
      {
        name: "Amit",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: vikramshila,
    featured: false,
  },
  {
    id: "20",
    title: "Vrindavan",
    city: "Vrindavan",
    distance: 600,
    address: "Uttar Pradesh , India",
    price: 5000,
    maxGroupSize: 5,
    desc: "Krishna's birthplace, devotional temples, colorful festivals, spiritual atmosphere, pilgrimage destination.",
    reviews: [
      {
        name: "Anand",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: vrindavan,
    featured: false
  },
];


export default tours;