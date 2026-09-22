import classicShirt from '../assets/Classic White Slim Fit Shirt.webp';
import denimJacket from '../assets/Casual Blue Denim Jacket.webp';
import floralDress from '../assets/Floral Print Summer Dress.webp';
import anarkaliKurti from '../assets/Anarkali Kurti with Dupatta.webp';
import highWaistJeans from '../assets/High-Waist Regular Jeans.webp';


const  products= [
    {
      "id": 1,
      "name": "Classic White Slim Fit Shirt",
      "brand": "Louis Philippe",
      "image":classicShirt,
      "category": "Men's Formal",
      "price": 2199.00,
      "currency": "INR",
      "isWhishList":false,
      "in_stock": true,
      "sizes": ["M", "L", "XL"]
    },
    {
      "id": 2,
      "name": "Casual Blue Denim Jacket",
      "brand": "Levis",
      "image":denimJacket,
      "category": "Men's Outerwear",
      "price": 3499.00, 
      "currency": "INR",
      "in_stock": true,
      "sizes": ["S", "M", "L"]
    },
    {
      "id": 3,
      "name": "Floral Print Summer Dress",
      "brand": "H&M",
      "image":floralDress,
      "category": "Women's Western",
      "price": 1799.00,
      "currency": "INR",
      "in_stock": true,
      "sizes": ["XS", "S", "M", "L"]
    },
    {
      "id": 4,
      "name": "Anarkali Kurti with Dupatta",
      "brand": "Biba",
      "image":anarkaliKurti,
      "category": "Women's Ethnic",
      "price": 2999.00,
      "currency": "INR",
      "in_stock": false,
      "sizes": ["M", "L", "XL", "XXL"]
    },
    {
      "id": 5,
      "name": "High-Waist Regular Jeans",
      "brand": "Zara",
      "image":highWaistJeans,
      "category": "Women's Western",
      "price": 2599.00,
      "currency": "INR",
      "in_stock": true,
      "sizes": ["28", "30", "32"]
    }
  ]

export default products