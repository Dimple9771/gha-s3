// ---------- Configure your restaurant here ----------
const RESTAURANT = {
  name: "Sri krishna vilas",
  phoneE164: "+1678 272 4444", // <-- change
  whatsappE164: "+1678 272 4444", // <-- change (same as phone ok)
  address: "2255 callaway court cumming Georgia 30041",
  googleMapsQuery: "2255 callaway court cumming Georgia 30041",
  currency: "USD",
  hours: [
    { day: "Mon", time: "10:00 AM – 10:00 PM" },
    { day: "Tue", time: "10:00 AM – 10:00 PM" },
    { day: "Wed", time: "10:00 AM – 10:00 PM" },
    { day: "Thu", time: "10:00 AM – 10:00 PM" },
    { day: "Fri", time: "08:00 AM – 10:00 PM" },
    { day: "Sat", time: "08:00 AM – 10:00 PM" },
    { day: "Sun", time: "08:00 PM – 10:00 PM" },
  ],
};

// MENU constant (Sri Krishna Vilas)
// Notes:
// - veg: set true for all items shown (your menu appears vegetarian).
// - spicy: set true for items with Chilli/Schezwan/Kara/Gongura/Manchurian etc.
// - popular: rough defaults; edit anytime.

const MENU = [
  // ===================== BREAD =====================
  { id: "plain-naan", name: "Plain Naan", category: "Bread", veg: true, spicy: false, price: 2.95, popular: 80 },
  { id: "butter-naan", name: "Butter Naan", category: "Bread", veg: true, spicy: false, price: 3.45, popular: 82 },
  { id: "chilly-naan", name: "Chilly Naan", category: "Bread", veg: true, spicy: true, price: 3.45, popular: 78 },
  { id: "garlic-naan", name: "Garlic Naan", category: "Bread", veg: true, spicy: false, price: 3.45, popular: 84 },
  { id: "chilly-garlic-naan", name: "Chilly Garlic Naan", category: "Bread", veg: true, spicy: true, price: 3.95, popular: 80 },
  { id: "cheese-naan", name: "Cheese Naan", category: "Bread", veg: true, spicy: false, price: 3.95, popular: 83 },
  { id: "onion-kulcha", name: "Onion Kulcha", category: "Bread", veg: true, spicy: false, price: 3.45, popular: 79 },
  { id: "plain-roti", name: "Plain Roti", category: "Bread", veg: true, spicy: false, price: 2.95, popular: 76 },
  { id: "butter-roti", name: "Butter Roti", category: "Bread", veg: true, spicy: false, price: 3.50, popular: 78 },
  { id: "chapathi-1", name: "Chapathi (1)", category: "Bread", veg: true, spicy: false, price: 2.00, popular: 70 },
  { id: "puri-batura-1", name: "Puri/Batura", category: "Bread", veg: true, spicy: false, price: 2.50, popular: 72 },
  { id: "chapathi-2", name: "Chapathi (2)", category: "Bread", veg: true, spicy: false, price: 3.50, popular: 72 },
  { id: "puri-batura-2", name: "Puri/Batura (2)", category: "Bread", veg: true, spicy: false, price: 3.95, popular: 72 },
  { id: "paratha-1", name: "Paratha (1)", category: "Bread", veg: true, spicy: false, price: 2.55, popular: 74 },
  { id: "paratha-2", name: "Paratha (2)", category: "Bread", veg: true, spicy: false, price: 4.95, popular: 74 },

  // ===================== SPECIALS =====================
  { id: "veg-thali", name: "Veg Thali (11am to 4pm)", category: "Specials", veg: true, spicy: false, price: 12.95, popular: 90 },
  { id: "veg-thali-weekends", name: "Veg Thali Weekends", category: "Specials", veg: true, spicy: false, price: 15.95, popular: 88 },
  { id: "puri-potato-channa", name: "Puri with Potato/Channa", category: "Specials", veg: true, spicy: false, price: 11.95, popular: 84 },
  { id: "puri-halwa-ravva-kesari", name: "Puri with Halwa (Ravva Kesari)", category: "Specials", veg: true, spicy: false, price: 11.95, popular: 84 },
  { id: "chapathi-potato-channa", name: "Chapathi with Potato/Channa", category: "Specials", veg: true, spicy: false, price: 8.50, popular: 82 },
  { id: "chole-bhatura", name: "Chole Bhatura", category: "Specials", veg: true, spicy: false, price: 11.95, popular: 86 },
  { id: "kothu-paratha", name: "Kothu Paratha", category: "Specials", veg: true, spicy: true, price: 11.95, popular: 80 },
  { id: "veg-noodles", name: "Veg Noodles", category: "Specials", veg: true, spicy: false, price: 11.95, popular: 78 },
  { id: "schezwan-noodles", name: "Schezwan Noodles", category: "Specials", veg: true, spicy: true, price: 12.95, popular: 79 },
  { id: "schezwan-paneer-noodles", name: "Schezwan Paneer Noodles", category: "Specials", veg: true, spicy: true, price: 14.95, popular: 80 },
  { id: "paneer-noodles", name: "Paneer Noodles", category: "Specials", veg: true, spicy: false, price: 13.95, popular: 78 },
  { id: "chilli-kothu-dosa", name: "Chilli Kothu Dosa", category: "Specials", veg: true, spicy: true, price: 11.95, popular: 82 },
  { id: "paratha-with-khorma", name: "Paratha with Khorma", category: "Specials", veg: true, spicy: false, price: 12.95, popular: 80 },
  { id: "chilli-garlic-noodles", name: "Chilli Garlic Noodles", category: "Specials", veg: true, spicy: true, price: 12.95, popular: 79 },

  // ===================== DESSERTS =====================
  { id: "rasmalai", name: "Rasmalai", category: "Desserts", veg: true, spicy: false, price: 4.95, popular: 82 },
  { id: "gulab-jamun", name: "Gulab Jamun", category: "Desserts", veg: true, spicy: false, price: 4.95, popular: 82 },
  { id: "chakra-pongal", name: "Chakra Pongal", category: "Desserts", veg: true, spicy: false, price: 4.95, popular: 78 },
  { id: "carrot-halwa", name: "Carrot Halwa", category: "Desserts", veg: true, spicy: false, price: 4.95, popular: 80 },
  { id: "ravva-kesari", name: "Ravva Kesari", category: "Desserts", veg: true, spicy: false, price: 4.95, popular: 84 },
  { id: "sweet-paan", name: "Sweet Paan", category: "Desserts", veg: true, spicy: false, price: 3.00, popular: 72 },

  // ===================== STARTERS =====================
  { id: "onion-pakora", name: "Onion Pakora", category: "Starters", veg: true, spicy: false, price: 8.45, popular: 80 },
  { id: "spinach-pakora", name: "Spinach Pakora", category: "Starters", veg: true, spicy: false, price: 8.75, popular: 78 },
  { id: "paneer-pakora", name: "Paneer Pakora", category: "Starters", veg: true, spicy: false, price: 10.95, popular: 82 },
  { id: "veg-cutlet-2", name: "Veg Cutlet (2)", category: "Starters", veg: true, spicy: false, price: 6.95, popular: 76 },
  { id: "paneer-65", name: "Paneer 65", category: "Starters", veg: true, spicy: true, price: 10.95, popular: 84 },
  { id: "paneer-555", name: "Paneer 555", category: "Starters", veg: true, spicy: true, price: 10.95, popular: 80 },
  { id: "paneer-manchurian", name: "Paneer Manchurian", category: "Starters", veg: true, spicy: true, price: 10.95, popular: 82 },
  { id: "chilli-paneer", name: "Chilli Paneer", category: "Starters", veg: true, spicy: true, price: 10.95, popular: 85 },
  { id: "gobi-65", name: "Gobi 65", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 82 },
  { id: "gobi-555", name: "Gobi 555", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 78 },
  { id: "gobi-manchurian", name: "Gobi Manchurian", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 80 },
  { id: "gobi-pepper-fry", name: "Gobi Pepper Fry", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 78 },
  { id: "chilli-gobi", name: "Chilli Gobi", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 80 },
  { id: "veg-manchurian", name: "Veg Manchurian", category: "Starters", veg: true, spicy: true, price: 10.95, popular: 79 },
  { id: "baby-corn-manchurian", name: "Baby Corn Manchurian", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 78 },
  { id: "baby-corn-555", name: "Baby Corn 555", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 76 },
  { id: "baby-corn-pepper-fry", name: "Baby Corn Pepper Fry", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 76 },
  { id: "chilli-baby-corn", name: "Chilli Baby Corn", category: "Starters", veg: true, spicy: true, price: 9.95, popular: 78 },
  { id: "samosa-2", name: "Samosa (2)", category: "Starters", veg: true, spicy: false, price: 4.95, popular: 82 },
  { id: "onion-samosa-3", name: "Onion Samosa (3)", category: "Starters", veg: true, spicy: false, price: 4.50, popular: 78 },
  { id: "corn-samosa-3", name: "Corn Samosa (3)", category: "Starters", veg: true, spicy: false, price: 4.50, popular: 76 },

  // ===================== CURRIES =====================
  { id: "dal-tadka", name: "Dal Tadka", category: "Curries", veg: true, spicy: false, price: 11.95, popular: 80 },
  { id: "dal-makhni", name: "Dal Makhni", category: "Curries", veg: true, spicy: false, price: 11.95, popular: 80 },
  { id: "spinach-dal", name: "Spinach Dal", category: "Curries", veg: true, spicy: false, price: 11.95, popular: 78 },
  { id: "aloo-palak", name: "Aloo Palak", category: "Curries", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "aloo-mutter", name: "Aloo Mutter", category: "Curries", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "aloo-gobi", name: "Aloo Gobi", category: "Curries", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "palak-paneer", name: "Palak Paneer", category: "Curries", veg: true, spicy: false, price: 14.95, popular: 85 },
  { id: "kadai-paneer", name: "Kadai Paneer", category: "Curries", veg: true, spicy: true, price: 14.95, popular: 84 },
  { id: "kadai-veg", name: "Kadai Veg", category: "Curries", veg: true, spicy: true, price: 12.95, popular: 80 },
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", category: "Curries", veg: true, spicy: false, price: 14.95, popular: 90 },
  { id: "paneer-tikka-masala", name: "Paneer Tikka Masala", category: "Curries", veg: true, spicy: true, price: 14.95, popular: 86 },
  { id: "gobi-tikka-masala", name: "Gobi Tikka Masala", category: "Curries", veg: true, spicy: true, price: 12.95, popular: 80 },
  { id: "shahi-paneer", name: "Shahi Paneer", category: "Curries", veg: true, spicy: false, price: 14.95, popular: 84 },
  { id: "paneer-khorma", name: "Paneer Khorma", category: "Curries", veg: true, spicy: false, price: 14.95, popular: 82 },
  { id: "malai-kofta", name: "Malai Kofta", category: "Curries", veg: true, spicy: false, price: 14.95, popular: 82 },
  { id: "malai-mutter", name: "Malai Mutter", category: "Curries", veg: true, spicy: false, price: 14.95, popular: 80 },
  { id: "bagara-baigan", name: "Bagara Baigan", category: "Curries", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "veg-palak", name: "Veg Palak", category: "Curries", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "veg-khorma", name: "Veg Khorma (North/South)", category: "Curries", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "channa-masala", name: "Channa Masala", category: "Curries", veg: true, spicy: false, price: 12.95, popular: 80 },
  { id: "channa-aloo-khorma", name: "Channa Aloo Khorma", category: "Curries", veg: true, spicy: false, price: 12.95, popular: 78 },

  { id: "kadai-bindi-masala", name: "Kadai Bindi Masala", category: "Curries", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "gobi-manchurian-wet", name: "Gobi Manchurian Wet", category: "Curries", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "veg-manchurian-wet", name: "Veg Manchurian Wet", category: "Curries", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "paneer-manchurian-wet", name: "Paneer Manchurian Wet", category: "Curries", veg: true, spicy: true, price: 14.95, popular: 78 },

  // ===================== RICE ITEMS =====================
  { id: "veg-biryani", name: "Veg Biryani", category: "Rice Items", veg: true, spicy: true, price: 11.95, popular: 86 },
  { id: "paneer-biryani", name: "Paneer Biryani", category: "Rice Items", veg: true, spicy: true, price: 13.95, popular: 84 },
  { id: "veg-fried-rice", name: "Veg Fried Rice", category: "Rice Items", veg: true, spicy: false, price: 11.95, popular: 80 },
  { id: "paneer-fried-rice", name: "Paneer Fried Rice", category: "Rice Items", veg: true, spicy: false, price: 13.95, popular: 80 },
  { id: "schezwan-fried-rice", name: "Schezwan Fried Rice", category: "Rice Items", veg: true, spicy: true, price: 12.95, popular: 79 },
  { id: "tamarind-lemon-rice", name: "Tamarind Rice / Lemon Rice", category: "Rice Items", veg: true, spicy: false, price: 11.95, popular: 82 },
  { id: "sambar-rice", name: "Sambar Rice", category: "Rice Items", veg: true, spicy: false, price: 11.95, popular: 80 },
  { id: "bisibelebath", name: "Bisibelebath", category: "Rice Items", veg: true, spicy: false, price: 11.95, popular: 78 },
  { id: "curd-rice", name: "Curd Rice", category: "Rice Items", veg: true, spicy: false, price: 10.95, popular: 78 },
  { id: "veg-palav", name: "Veg Palav", category: "Rice Items", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "paneer-palav", name: "Paneer Palav", category: "Rice Items", veg: true, spicy: false, price: 13.95, popular: 78 },
  { id: "gutti-vankaya-palav", name: "Gutti Vankaya Palav", category: "Rice Items", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "chilli-garlic-fried-rice", name: "Chilli Garlic Fried Rice", category: "Rice Items", veg: true, spicy: true, price: 12.95, popular: 79 },
  { id: "schezwan-paneer-fried-rice", name: "Schezwan Paneer Fried Rice", category: "Rice Items", veg: true, spicy: true, price: 14.95, popular: 80 },

  // ===================== DOSA =====================
  { id: "plain-dosa", name: "Plain Dosa", category: "Dosa", veg: true, spicy: false, price: 8.95, popular: 85 },
  { id: "plain-ghee-dosa", name: "Plain Ghee Dosa", category: "Dosa", veg: true, spicy: false, price: 9.95, popular: 84 },
  { id: "masala-dosa", name: "Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 11.95, popular: 92 },
  { id: "masala-ghee-dosa", name: "Masala Ghee Dosa", category: "Dosa", veg: true, spicy: false, price: 12.95, popular: 90 },
  { id: "mysore-dosa", name: "Mysore Dosa", category: "Dosa", veg: true, spicy: true, price: 10.95, popular: 86 },
  { id: "mysore-onion-dosa", name: "Mysore Onion Dosa", category: "Dosa", veg: true, spicy: true, price: 11.95, popular: 84 },
  { id: "mysore-masala-dosa", name: "Mysore Masala Dosa", category: "Dosa", veg: true, spicy: true, price: 12.95, popular: 86 },
  { id: "mysore-masala-onion", name: "Mysore Masala Onion", category: "Dosa", veg: true, spicy: true, price: 13.45, popular: 84 },

  { id: "kara-dosa", name: "Kara Dosa", category: "Dosa", veg: true, spicy: true, price: 10.95, popular: 84 },
  { id: "kara-ghee-dosa", name: "Kara Ghee Dosa", category: "Dosa", veg: true, spicy: true, price: 11.95, popular: 82 },
  { id: "kara-onion-dosa", name: "Kara Onion Dosa", category: "Dosa", veg: true, spicy: true, price: 11.50, popular: 82 },
  { id: "kara-onion-ghee-dosa", name: "Kara Onion Ghee Dosa", category: "Dosa", veg: true, spicy: true, price: 12.50, popular: 82 },
  { id: "kara-masala-dosa", name: "Kara Masala Dosa", category: "Dosa", veg: true, spicy: true, price: 12.95, popular: 84 },
  { id: "kara-masala-onion-dosa", name: "Kara Masala Onion Dosa", category: "Dosa", veg: true, spicy: true, price: 13.45, popular: 82 },
  { id: "kara-masala-ghee-dosa", name: "Kara Masala Ghee Dosa", category: "Dosa", veg: true, spicy: true, price: 13.95, popular: 82 },
  { id: "kara-cheese-masala-dosa", name: "Kara Cheese Masala Dosa", category: "Dosa", veg: true, spicy: true, price: 13.95, popular: 80 },
  { id: "kara-onion-cheese-masala", name: "Kara Onion Cheese Masala", category: "Dosa", veg: true, spicy: true, price: 14.95, popular: 80 },

  { id: "onion-dosa", name: "Onion Dosa", category: "Dosa", veg: true, spicy: false, price: 10.95, popular: 82 },
  { id: "onion-ghee-dosa", name: "Onion Ghee Dosa", category: "Dosa", veg: true, spicy: false, price: 11.95, popular: 80 },
  { id: "onion-chilli-dosa", name: "Onion Chilli Dosa", category: "Dosa", veg: true, spicy: true, price: 11.25, popular: 80 },
  { id: "onion-masala-dosa", name: "Onion Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 12.95, popular: 82 },

  { id: "onion-chilli-masala", name: "Onion Chilli Masala", category: "Dosa", veg: true, spicy: true, price: 13.25, popular: 80 },
  { id: "onion-masala-ghee-dosa", name: "Onion Masala Ghee Dosa", category: "Dosa", veg: true, spicy: false, price: 14.25, popular: 80 },

  { id: "plain-ravva-dosa", name: "Plain Ravva Dosa", category: "Dosa", veg: true, spicy: false, price: 10.95, popular: 82 },
  { id: "plain-ravva-masala-dosa", name: "Plain Ravva Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 12.95, popular: 80 },
  { id: "onion-ravva-dosa", name: "Onion Ravva Dosa", category: "Dosa", veg: true, spicy: false, price: 11.95, popular: 80 },
  { id: "onion-ravva-masala-dosa", name: "Onion Ravva Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 13.95, popular: 80 },
  { id: "onion-podi-ravva-dosa", name: "Onion Podi Ravva Dosa", category: "Dosa", veg: true, spicy: true, price: 12.50, popular: 78 },

  { id: "pesarattu-dosa", name: "Pesarattu Dosa", category: "Dosa", veg: true, spicy: false, price: 10.95, popular: 78 },
  { id: "pesarattu-upma-dosa", name: "Pesarattu Upma Dosa", category: "Dosa", veg: true, spicy: false, price: 13.95, popular: 78 },

  { id: "podi-dosa", name: "Podi Dosa", category: "Dosa", veg: true, spicy: true, price: 10.95, popular: 80 },
  { id: "podi-ghee-dosa", name: "Podi Ghee Dosa", category: "Dosa", veg: true, spicy: true, price: 11.95, popular: 80 },
  { id: "podi-masala-dosa", name: "Podi Masala Dosa", category: "Dosa", veg: true, spicy: true, price: 12.95, popular: 80 },
  { id: "podi-masala-ghee", name: "Podi Masala Ghee", category: "Dosa", veg: true, spicy: true, price: 13.95, popular: 80 },

  { id: "spring-dosa", name: "Spring Dosa", category: "Dosa", veg: true, spicy: false, price: 10.95, popular: 78 },
  { id: "spring-masala-dosa", name: "Spring Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "upma-dosa", name: "Upma Dosa", category: "Dosa", veg: true, spicy: false, price: 12.95, popular: 78 },

  { id: "gongura-dosa", name: "Gongura Dosa", category: "Dosa", veg: true, spicy: true, price: 10.95, popular: 78 },
  { id: "gongura-masala-dosa", name: "Gongura Masala Dosa", category: "Dosa", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "gongura-onion-dosa", name: "Gongura Onion Dosa", category: "Dosa", veg: true, spicy: true, price: 11.50, popular: 78 },
  { id: "gongura-onion-masala-dosa", name: "Gongura Onion Masala Dosa", category: "Dosa", veg: true, spicy: true, price: 13.95, popular: 78 },

  { id: "cheese-dosa", name: "Cheese Dosa", category: "Dosa", veg: true, spicy: false, price: 11.95, popular: 80 },
  { id: "cheese-masala-dosa", name: "Cheese Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 13.95, popular: 80 },
  { id: "madurai-malli-dosa", name: "Madurai Malli Dosa", category: "Dosa", veg: true, spicy: false, price: 11.95, popular: 78 },
  { id: "madurai-malli-masala-dosa", name: "Madurai Malli Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 13.95, popular: 78 },
  { id: "pav-bajji-dosa", name: "Pav Bajji Dosa", category: "Dosa", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "skv-special-dosa", name: "SKV Special Dosa", category: "Dosa", veg: true, spicy: false, price: 12.95, popular: 85 },
  { id: "paper-dosa", name: "Paper Dosa", category: "Dosa", veg: true, spicy: false, price: 16.95, popular: 78 },
  { id: "paper-masala-dosa", name: "Paper Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 18.95, popular: 78 },
  { id: "chettinadu-dosa", name: "Chettinadu Dosa", category: "Dosa", veg: true, spicy: true, price: 10.95, popular: 78 },
  { id: "chettinadu-masala-dosa", name: "Chettinadu Masala Dosa", category: "Dosa", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "palak-dosa", name: "Palak Dosa", category: "Dosa", veg: true, spicy: false, price: 11.95, popular: 78 },
  { id: "palak-paneer-dosa", name: "Palak Paneer Dosa", category: "Dosa", veg: true, spicy: false, price: 13.95, popular: 78 },
  { id: "palak-masala-dosa", name: "Palak Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 12.95, popular: 78 },
  { id: "palak-paneer-masala-dosa", name: "Palak Paneer Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 15.95, popular: 78 },
  { id: "pizza-dosa", name: "Pizza Dosa", category: "Dosa", veg: true, spicy: false, price: 14.95, popular: 78 },
  { id: "paneer-dosa", name: "Paneer Dosa", category: "Dosa", veg: true, spicy: false, price: 13.95, popular: 78 },
  { id: "paneer-masala-dosa", name: "Paneer Masala Dosa", category: "Dosa", veg: true, spicy: false, price: 15.95, popular: 78 },
  { id: "schezwan-dosa", name: "Schezwan Dosa", category: "Dosa", veg: true, spicy: true, price: 10.95, popular: 78 },
  { id: "schezwan-masala-dosa", name: "Schezwan Masala Dosa", category: "Dosa", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "schezwan-onion-dosa", name: "Schezwan Onion Dosa", category: "Dosa", veg: true, spicy: true, price: 11.95, popular: 78 },
  { id: "sandwich-dosa", name: "Sandwich Dosa", category: "Dosa", veg: true, spicy: false, price: 13.95, popular: 78 },

  // ===================== SOUTH INDIAN TIFFINS =====================
  { id: "idly-2", name: "Idly (2)", category: "South Indian Tiffins", veg: true, spicy: false, price: 6.45, popular: 88 },
  { id: "ghee-idly", name: "Ghee Idly", category: "South Indian Tiffins", veg: true, spicy: false, price: 7.45, popular: 82 },
  { id: "podi-idly", name: "Podi Idly", category: "South Indian Tiffins", veg: true, spicy: true, price: 8.45, popular: 84 },
  { id: "karam-idly", name: "Karam Idly", category: "South Indian Tiffins", veg: true, spicy: true, price: 8.45, popular: 82 },
  { id: "vada-2", name: "Vada (2)", category: "South Indian Tiffins", veg: true, spicy: false, price: 7.45, popular: 84 },
  { id: "pongal", name: "Pongal", category: "South Indian Tiffins", veg: true, spicy: false, price: 9.45, popular: 80 },
  { id: "upma", name: "Upma", category: "South Indian Tiffins", veg: true, spicy: false, price: 9.95, popular: 78 },
  { id: "punugulu-15", name: "Punugulu (15)", category: "South Indian Tiffins", veg: true, spicy: false, price: 9.95, popular: 78 },
  { id: "mirchi-bajji-4", name: "Mirchi Bajji (4)", category: "South Indian Tiffins", veg: true, spicy: true, price: 7.45, popular: 80 },
  { id: "potato-bajji-6", name: "Potato Bajji (6)", category: "South Indian Tiffins", veg: true, spicy: false, price: 7.45, popular: 78 },
  { id: "cut-mirchi", name: "Cut Mirchi", category: "South Indian Tiffins", veg: true, spicy: true, price: 9.45, popular: 78 },
  { id: "mysore-bonda-4", name: "Mysore Bonda (4)", category: "South Indian Tiffins", veg: true, spicy: false, price: 9.45, popular: 78 },
  { id: "aloo-bonda-4", name: "Aloo Bonda (4)", category: "South Indian Tiffins", veg: true, spicy: false, price: 9.45, popular: 78 },
  { id: "pongal-vada-1", name: "Pongal + Vada (1)", category: "South Indian Tiffins", veg: true, spicy: false, price: 10.95, popular: 80 },
  { id: "idly1-vada1", name: "Idly (1) + Vada (1)", category: "South Indian Tiffins", veg: true, spicy: false, price: 6.95, popular: 80 },
  { id: "idly2-vada1", name: "Idly (2) + Vada (1)", category: "South Indian Tiffins", veg: true, spicy: false, price: 8.45, popular: 82 },

  { id: "vada2-idly1", name: "Vada (2) + Idly (1)", category: "South Indian Tiffins", veg: true, spicy: false, price: 8.95, popular: 78 },
  { id: "mini-idly-sambar-14", name: "Mini Idly Sambar (14)", category: "South Indian Tiffins", veg: true, spicy: false, price: 8.95, popular: 82 },
  { id: "skv-mirchi-bajji-4", name: "SKV Mirchi Bajji (4)", category: "South Indian Tiffins", veg: true, spicy: true, price: 9.45, popular: 78 },
  { id: "idly-vada-dipped-sambar", name: "Idly + Vada (Dipped in Sambar)", category: "South Indian Tiffins", veg: true, spicy: false, price: 7.95, popular: 80 },
  { id: "sambar-idly-2", name: "Sambar Idly (2)", category: "South Indian Tiffins", veg: true, spicy: false, price: 8.45, popular: 80 },
  { id: "sambar-vada-2", name: "Sambar Vada (2)", category: "South Indian Tiffins", veg: true, spicy: false, price: 8.95, popular: 80 },
  { id: "mini-idly-sambar-side", name: "Mini Idly (Sambar Side)", category: "South Indian Tiffins", veg: true, spicy: false, price: 7.45, popular: 78 },
  { id: "idly-3-pieces", name: "Idly (3 Pieces)", category: "South Indian Tiffins", veg: true, spicy: false, price: 8.45, popular: 78 },

  // ===================== UTHAPPAM =====================
  { id: "plain-uthappam", name: "Plain Uthappam", category: "Uthappam", veg: true, spicy: false, price: 9.95, popular: 84 },
  { id: "onion-uthappam", name: "Onion Uthappam", category: "Uthappam", veg: true, spicy: false, price: 11.50, popular: 82 },
  { id: "onion-chilli-uthappam", name: "Onion Chilli Uthappam", category: "Uthappam", veg: true, spicy: true, price: 11.95, popular: 80 },
  { id: "masala-uthappam", name: "Masala Uthappam", category: "Uthappam", veg: true, spicy: false, price: 12.95, popular: 80 },
  { id: "veggie-uthappam", name: "Veggie Uthappam", category: "Uthappam", veg: true, spicy: false, price: 11.95, popular: 82 },
  { id: "kara-uthappam", name: "Kara Uthappam", category: "Uthappam", veg: true, spicy: true, price: 10.95, popular: 78 },
  { id: "kara-masala-uthappam", name: "Kara Masala Uthappam", category: "Uthappam", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "cheese-uthappam", name: "Cheese Uthappam", category: "Uthappam", veg: true, spicy: false, price: 11.95, popular: 80 },
  { id: "gongura-uthappam", name: "Gongura Uthappam", category: "Uthappam", veg: true, spicy: true, price: 11.95, popular: 78 },
  { id: "gongura-onion-uthappam", name: "Gongura Onion Uthappam", category: "Uthappam", veg: true, spicy: true, price: 12.95, popular: 78 },
  { id: "paneer-chilli-uthappam", name: "Paneer Chilli Uthappam", category: "Uthappam", veg: true, spicy: true, price: 13.95, popular: 78 },
  { id: "pizza-uthappam", name: "Pizza Uthappam", category: "Uthappam", veg: true, spicy: false, price: 14.50, popular: 78 },

  // ===================== CHAT'S =====================
  { id: "samosa-chat", name: "Samosa Chat", category: "Chat's", veg: true, spicy: true, price: 9.95, popular: 82 },
  { id: "dahi-vada-2", name: "Dahi Vada (2)", category: "Chat's", veg: true, spicy: false, price: 9.95, popular: 80 },
  { id: "papadi-chat", name: "Papadi Chat", category: "Chat's", veg: true, spicy: true, price: 8.95, popular: 78 },
  { id: "pani-puri", name: "Pani Puri", category: "Chat's", veg: true, spicy: true, price: 8.95, popular: 85 },
  { id: "sev-puri", name: "Sev Puri", category: "Chat's", veg: true, spicy: true, price: 7.95, popular: 80 },
  { id: "dahi-puri", name: "Dahi Puri", category: "Chat's", veg: true, spicy: true, price: 8.95, popular: 78 },
  { id: "pav-bajji", name: "Pav Bajji", category: "Chat's", veg: true, spicy: true, price: 10.95, popular: 82 },
  { id: "extra-pav", name: "Extra Pav", category: "Chat's", veg: true, spicy: false, price: 0.99, popular: 60 },
  { id: "cheese-pav-bajji", name: "Cheese Pav Bajji", category: "Chat's", veg: true, spicy: true, price: 11.95, popular: 78 },
  { id: "aloo-tikki-chat", name: "Aloo Tikki Chat", category: "Chat's", veg: true, spicy: true, price: 9.95, popular: 78 },
  { id: "bhel-puri", name: "Bhel Puri", category: "Chat's", veg: true, spicy: true, price: 8.95, popular: 78 },
  { id: "idly-chat", name: "Idly Chat", category: "Chat's", veg: true, spicy: true, price: 9.95, popular: 76 },
  { id: "masala-pav", name: "Masala Pav", category: "Chat's", veg: true, spicy: true, price: 8.95, popular: 76 },
  { id: "vada-pav", name: "Vada Pav", category: "Chat's", veg: true, spicy: true, price: 7.95, popular: 78 },

  // ===================== SOUPS =====================
  { id: "tomato-soup", name: "Tomato Soup", category: "Soups", veg: true, spicy: false, price: 4.95, popular: 78 },
  { id: "hot-and-sour-soup", name: "Hot and Sour Soup", category: "Soups", veg: true, spicy: true, price: 4.95, popular: 78 },
  { id: "veg-corn-soup", name: "Veg Corn Soup", category: "Soups", veg: true, spicy: false, price: 4.95, popular: 78 },
];


// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);
const fmt = (n) => new Intl.NumberFormat(undefined, { style: "currency", currency: RESTAURANT.currency }).format(n);

const STORAGE_KEY = "restaurant_cart_v1";
const NOTES_KEY = "restaurant_notes_v1";

function loadCart() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}
function loadNotes() {
  return localStorage.getItem(NOTES_KEY) || "";
}
function saveNotes(notes) {
  localStorage.setItem(NOTES_KEY, notes);
}

function getCategories() {
  return Array.from(new Set(MENU.map(m => m.category))).sort();
}

// ---------- Render Menu ----------
function getFilters() {
  return {
    q: $("searchInput").value.trim().toLowerCase(),
    category: $("categorySelect").value,
    vegOnly: $("vegOnlyToggle").checked,
    spicyOnly: $("spicyToggle").checked,
    sort: $("sortSelect").value,
  };
}

function applyFilters(items, f) {
  let out = [...items];

  if (f.q) {
    out = out.filter(i =>
      i.name.toLowerCase().includes(f.q) ||
      i.desc.toLowerCase().includes(f.q) ||
      i.category.toLowerCase().includes(f.q)
    );
  }
  if (f.category !== "all") out = out.filter(i => i.category === f.category);
  if (f.vegOnly) out = out.filter(i => i.veg === true);
  if (f.spicyOnly) out = out.filter(i => i.spicy === true);

  if (f.sort === "popular") out.sort((a, b) => b.popular - a.popular);
  if (f.sort === "price_asc") out.sort((a, b) => a.price - b.price);
  if (f.sort === "price_desc") out.sort((a, b) => b.price - a.price);

  return out;
}

function renderMenu() {
  const f = getFilters();
  const items = applyFilters(MENU, f);

  const grid = $("menuGrid");
  grid.innerHTML = "";

  items.forEach(item => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <div class="item__top">
        <div>
          <div class="item__name">${item.name}</div>
          <div class="item__badges">
            <span class="tag ${item.veg ? "tag--veg" : ""}">${item.veg ? "VEG" : "NON-VEG"}</span>
            ${item.spicy ? `<span class="tag tag--spicy">SPICY</span>` : `<span class="tag">MILD</span>`}
            <span class="tag">${item.category}</span>
          </div>
        </div>
        <div class="price">${fmt(item.price)}</div>
      </div>
      <div class="item__desc">${item.desc}</div>
      <div class="item__foot">
        <div class="muted small">Popularity: ${item.popular}</div>
        <button class="btn btn--secondary" type="button" data-add="${item.id}">Add</button>
      </div>
    `;
    grid.appendChild(el);
  });

  // Bind add buttons
  grid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.getAttribute("data-add")));
  });
}

// ---------- Cart ----------
let cart = loadCart();

function cartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}
function cartSubtotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU.find(m => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  renderCartBadge();
  renderCart();
}

function decFromCart(id) {
  if (!cart[id]) return;
  cart[id] = cart[id] - 1;
  if (cart[id] <= 0) delete cart[id];
  saveCart(cart);
  renderCartBadge();
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart(cart);
  renderCartBadge();
  renderCart();
}

function clearCart() {
  cart = {};
  saveCart(cart);
  renderCartBadge();
  renderCart();
}

function renderCartBadge() {
  $("cartCount").textContent = String(cartCount());
  $("cartSubtitle").textContent = `${cartCount()} items`;
  $("subtotal").textContent = fmt(cartSubtotal());
}

function renderCart() {
  const root = $("cartItems");
  root.innerHTML = "";

  const entries = Object.entries(cart);
  if (entries.length === 0) {
    root.innerHTML = `<div class="muted">Your cart is empty. Add items from the menu.</div>`;
    return;
  }

  entries.forEach(([id, qty]) => {
    const item = MENU.find(m => m.id === id);
    if (!item) return;

    const el = document.createElement("div");
    el.className = "cartItem";
    el.innerHTML = `
      <div class="cartItem__row">
        <div>
          <div class="cartItem__name">${item.name}</div>
          <div class="cartItem__meta">${fmt(item.price)} • ${item.veg ? "Veg" : "Non-Veg"} • ${item.spicy ? "Spicy" : "Mild"}</div>
        </div>
        <button class="iconBtn danger" type="button" data-remove="${id}" title="Remove">🗑</button>
      </div>

      <div class="qty">
        <button type="button" data-dec="${id}">−</button>
        <span>${qty}</span>
        <button type="button" data-inc="${id}">+</button>
        <div style="margin-left:auto;font-weight:900">${fmt(item.price * qty)}</div>
      </div>
    `;
    root.appendChild(el);
  });

  root.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => addToCart(b.getAttribute("data-inc"))));
  root.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => decFromCart(b.getAttribute("data-dec"))));
  root.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => removeFromCart(b.getAttribute("data-remove"))));

  updateWhatsAppLinks();
}

// ---------- WhatsApp / Checkout ----------
function buildOrderText() {
  const lines = [];
  lines.push(`Order for: ${RESTAURANT.name}`);
  lines.push(`--------------------------------`);
  Object.entries(cart).forEach(([id, qty]) => {
    const item = MENU.find(m => m.id === id);
    if (!item) return;
    lines.push(`${qty} x ${item.name} — ${fmt(item.price * qty)}`);
  });
  lines.push(`--------------------------------`);
  lines.push(`Subtotal: ${fmt(cartSubtotal())}`);

  const notes = $("orderNotes").value.trim();
  if (notes) {
    lines.push(``);
    lines.push(`Notes: ${notes}`);
  }

  lines.push(``);
  lines.push(`Pickup/Delivery: (please confirm)`);
  lines.push(`Name:`);
  lines.push(`Address (if delivery):`);
  return lines.join("\n");
}

function updateWhatsAppLinks() {
  const text = encodeURIComponent(buildOrderText());
  const wa = `https://wa.me/${RESTAURANT.whatsappE164.replace(/\+/g, "")}?text=${text}`;
  $("whatsAppLink").href = wa;
  $("checkoutWhatsAppBtn").href = wa;
}

function updateContactLinks() {
  $("callLink").href = `tel:${RESTAURANT.phoneE164}`;
  $("mapsLink").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT.googleMapsQuery)}`;
  $("addressText").textContent = RESTAURANT.address;
}

// ---------- Drawer ----------
function openCart() {
  $("cartBackdrop").classList.remove("hidden");
  $("cartDrawer").classList.remove("hidden");
  $("cartDrawer").setAttribute("aria-hidden", "false");
}
function closeCart() {
  $("cartBackdrop").classList.add("hidden");
  $("cartDrawer").classList.add("hidden");
  $("cartDrawer").setAttribute("aria-hidden", "true");
}

// ---------- Init ----------
function initCategories() {
  const categories = getCategories();
  categories.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    $("categorySelect").appendChild(opt);
  });
}

function initHours() {
  const ul = $("hoursList");
  ul.innerHTML = "";
  RESTAURANT.hours.forEach(h => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${h.day}</span><strong>${h.time}</strong>`;
    ul.appendChild(li);
  });
}

function initKpis() {
  const top = [...MENU].sort((a, b) => b.popular - a.popular)[0];
  $("kpiPopular").textContent = top ? top.name : "Chef Special";
}

function bindEvents() {
  ["searchInput", "categorySelect", "vegOnlyToggle", "spicyToggle", "sortSelect"].forEach(id => {
    $(id).addEventListener("input", renderMenu);
    $(id).addEventListener("change", renderMenu);
  });

  $("viewCartBtn").addEventListener("click", openCart);
  $("closeCartBtn").addEventListener("click", closeCart);
  $("cartBackdrop").addEventListener("click", closeCart);

  $("clearCartBtn").addEventListener("click", clearCart);

  $("quickOrderBtn").addEventListener("click", () => {
    document.location.hash = "#menu";
    openCart();
  });

  $("openHoursBtn").addEventListener("click", () => {
    document.location.hash = "#hours";
  });

  $("saveNotesBtn").addEventListener("click", () => {
    saveNotes($("orderNotes").value);
    updateWhatsAppLinks();
  });

  $("orderNotes").addEventListener("input", updateWhatsAppLinks);
}

function init() {
  $("year").textContent = String(new Date().getFullYear());
  $("orderNotes").value = loadNotes();

  initCategories();
  initHours();
  initKpis();

  updateContactLinks();
  renderMenu();
  renderCartBadge();
  renderCart();
  updateWhatsAppLinks();
  bindEvents();
}

init();
