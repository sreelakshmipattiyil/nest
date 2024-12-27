import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  states = [
    {
      "id": 1,
      "name": "Andhra Pradesh",
      "image": "https://example.com/image-andhra-pradesh.jpg",
      "description": "Known for its rich cultural heritage, historic temples, and beautiful coastline along the Bay of Bengal."
    },
    {
      "id": 2,
      "name": "Arunachal Pradesh",
      "image": "https://example.com/image-arunachal-pradesh.jpg",
      "description": "A northeastern state known for its pristine natural beauty, snow-capped mountains, and vibrant tribal culture."
    },
    {
      "id": 3,
      "name": "Assam",
      "image": "https://example.com/image-assam.jpg",
      "description": "Famous for its tea gardens, the Brahmaputra River, and the Kaziranga National Park, home to the one-horned rhinoceros."
    },
    {
      "id": 4,
      "name": "Bihar",
      "image": "https://example.com/image-bihar.jpg",
      "description": "Home to ancient historical sites such as Nalanda and Bodh Gaya, Bihar has a rich cultural and spiritual heritage."
    },
    {
      "id": 5,
      "name": "Chhattisgarh",
      "image": "https://example.com/image-chhattisgarh.jpg",
      "description": "Known for its dense forests, waterfalls, and unique tribal culture."
    },
    {
      "id": 6,
      "name": "Goa",
      "image": "https://example.com/image-goa.jpg",
      "description": "Famous for its beaches, Portuguese heritage, and vibrant nightlife."
    },
    {
      "id": 7,
      "name": "Gujarat",
      "image": "https://example.com/image-gujarat.jpg",
      "description": "Known for its historical sites, vibrant festivals, and the Gir National Park, home to Asiatic lions."
    },
    {
      "id": 8,
      "name": "Haryana",
      "image": "https://example.com/image-haryana.jpg",
      "description": "A leading agricultural state with a rich history and proximity to the national capital, Delhi."
    },
    {
      "id": 9,
      "name": "Himachal Pradesh",
      "image": "https://example.com/image-himachal-pradesh.jpg",
      "description": "A northern state renowned for its scenic beauty, hill stations, and adventure tourism."
    },
    {
      "id": 10,
      "name": "Jharkhand",
      "image": "https://example.com/image-jharkhand.jpg",
      "description": "Rich in mineral resources, waterfalls, and a unique tribal culture."
    },
    {
      "id": 11,
      "name": "Karnataka",
      "image": "https://example.com/image-karnataka.jpg",
      "description": "Known for its IT industry, historical monuments, and diverse landscapes."
    },
    {
      "id": 12,
      "name": "Kerala",
      "image": "https://example.com/image-kerala.jpg",
      "description": "Popularly known as 'God's Own Country,' Kerala is famous for its backwaters, lush greenery, and cultural traditions."
    },
    {
      "id": 13,
      "name": "Madhya Pradesh",
      "image": "https://example.com/image-madhya-pradesh.jpg",
      "description": "Known as the 'Heart of India,' it is famous for its wildlife reserves, ancient temples, and forts."
    },
    {
      "id": 14,
      "name": "Maharashtra",
      "image": "https://example.com/image-maharashtra.jpg",
      "description": "A leading industrial state with iconic landmarks like Mumbai, the Ajanta-Ellora caves, and hill stations."
    },
    {
      "id": 15,
      "name": "Manipur",
      "image": "https://example.com/image-manipur.jpg",
      "description": "A northeastern state known for its natural beauty, rich culture, and traditions like Manipuri dance."
    },
    {
      "id": 16,
      "name": "Meghalaya",
      "image": "https://example.com/image-meghalaya.jpg",
      "description": "Known as the 'Abode of Clouds,' it is famous for its lush green landscapes and living root bridges."
    },
    {
      "id": 17,
      "name": "Mizoram",
      "image": "https://example.com/image-mizoram.jpg",
      "description": "A picturesque state known for its rolling hills, pleasant climate, and vibrant culture."
    },
    {
      "id": 18,
      "name": "Nagaland",
      "image": "https://example.com/image-nagaland.jpg",
      "description": "Famous for its tribal culture, festivals like Hornbill, and scenic landscapes."
    },
    {
      "id": 19,
      "name": "Odisha",
      "image": "https://example.com/image-odisha.jpg",
      "description": "Known for its ancient temples, beaches, and the famous Rath Yatra in Puri."
    },
    {
      "id": 20,
      "name": "Punjab",
      "image": "https://example.com/image-punjab.jpg",
      "description": "Renowned for its vibrant culture, delicious cuisine, and the Golden Temple in Amritsar."
    },
    {
      "id": 21,
      "name": "Rajasthan",
      "image": "https://example.com/image-rajasthan.jpg",
      "description": "Known for its desert landscapes, historic palaces, and vibrant traditions."
    },
    {
      "id": 22,
      "name": "Sikkim",
      "image": "https://example.com/image-sikkim.jpg",
      "description": "A small northeastern state known for its stunning landscapes and Buddhist monasteries."
    },
    {
      "id": 23,
      "name": "Tamil Nadu",
      "image": "https://example.com/image-tamil-nadu.jpg",
      "description": "Famous for its ancient temples, classical music and dance, and rich cultural heritage."
    },
    {
      "id": 24,
      "name": "Telangana",
      "image": "https://example.com/image-telangana.jpg",
      "description": "Known for its historical monuments, IT industry, and vibrant culture."
    },
    {
      "id": 25,
      "name": "Tripura",
      "image": "https://example.com/image-tripura.jpg",
      "description": "A small northeastern state with a rich tribal culture and ancient temples."
    },
    {
      "id": 26,
      "name": "Uttar Pradesh",
      "image": "https://example.com/image-uttar-pradesh.jpg",
      "description": "Home to iconic landmarks like the Taj Mahal, Varanasi, and the Ganges River."
    },
    {
      "id": 27,
      "name": "Uttarakhand",
      "image": "https://example.com/image-uttarakhand.jpg",
      "description": "Known for its Himalayan beauty, pilgrimage sites, and adventure tourism."
    },
    {
      "id": 28,
      "name": "West Bengal",
      "image": "https://example.com/image-west-bengal.jpg",
      "description": "Famous for its cultural heritage, literature, and the Sundarbans mangrove forest."
    }
  ]


  constructor() { }

getStates(){
  return this.states;
}

getStateByID(id:any){
  return this.states.find(state => state.id == id);
}


}
