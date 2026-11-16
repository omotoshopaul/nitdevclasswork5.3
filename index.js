const express = require('express')
 const freshProject = express()

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    slug: "wireless-bluetooth-headphones",
    description:
      "Premium wireless headphones with noise cancellation and crystal-clear sound.",
    price: 85000,
    discountPrice: 69999,
    category: "Electronics",
    brand: "SoundPro",
    sku: "ELEC-001",
    stock: 45,
    rating: 2,
    reviews: 124,
    images: ["/images/headphones-1.jpg", "/images/headphones-2.jpg"],
    colors: ["Black", "White", "Blue"],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2026-10-01T10:00:00Z",
  },
  {
    id: 2,
    name: "Classic Leather Backpack",
    slug: "classic-leather-backpack",
    description:
      "A stylish and durable leather backpack suitable for work, school, and travel.",
    price: 55000,
    discountPrice: null,
    category: "Fashion",
    brand: "UrbanStyle",
    sku: "FAS-002",
    stock: 28,
    rating: 4.5,
    reviews: 86,
    images: ["/images/backpack-1.jpg", "/images/backpack-2.jpg"],
    colors: ["Brown", "Black"],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2026-10-03T12:30:00Z",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    slug: "smart-fitness-watch",
    description:
      "Track your daily activities, heart rate, sleep patterns, and fitness goals.",
    price: 120000,
    discountPrice: 99999,
    category: "Electronics",
    brand: "FitTech",
    sku: "ELEC-003",
    stock: 12,
    rating: 4.7,
    reviews: 203,
    images: ["/images/watch-1.jpg", "/images/watch-2.jpg"],
    colors: ["Black", "Silver", "Rose Gold"],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2026-10-05T09:15:00Z",
  },
  {
    id: 4,
    name: "Minimalist Ceramic Coffee Mug",
    slug: "minimalist-ceramic-coffee-mug",
    description:
      "Elegant ceramic coffee mug with a comfortable handle and modern design.",
    price: 8500,
    discountPrice: null,
    category: "Home & Kitchen",
    brand: "HomeEssentials",
    sku: "HOM-004",
    stock: 100,
    rating: 4.3,
    reviews: 52,
    images: ["/images/mug-1.jpg", "/images/mug-2.jpg"],
    colors: ["White", "Beige", "Black"],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2026-10-07T14:00:00Z",
  },
  {
    id: 5,
    name: "Men's Casual Sneakers",
    slug: "mens-casual-sneakers",
    description:
      "Comfortable everyday sneakers with a lightweight sole and breathable material.",
    price: 45000,
    discountPrice: 38000,
    category: "Footwear",
    brand: "StepUp",
    sku: "FOO-005",
    stock: 0,
    rating: 4.6,
    reviews: 167,
    images: ["/images/sneakers-1.jpg", "/images/sneakers-2.jpg"],
    colors: ["White", "Black", "Grey"],
    sizes: [40, 41, 42, 43, 44],
    isFeatured: false,
    isAvailable: false,
    createdAt: "2026-10-09T16:45:00Z",
  },
  {
    id: 6,
    name: "Portable Power Bank 20000mAh",
    slug: "portable-power-bank-20000mah",
    description:
      "High-capacity fast-charging power bank for smartphones and other devices.",
    price: 32000,
    discountPrice: 27500,
    category: "Electronics",
    brand: "PowerMax",
    sku: "ELEC-006",
    stock: 65,
    rating: 4.9,
    reviews: 312,
    images: ["/images/powerbank-1.jpg", "/images/powerbank-2.jpg"],
    colors: ["Black", "White"],
    isFeatured: true,
    isAvailable: true,
    createdAt: "2026-10-11T11:20:00Z",
  },
  {
    id: 7,
    name: "Luxury Skincare Gift Set",
    slug: "luxury-skincare-gift-set",
    description:
      "A complete skincare collection designed to keep your skin hydrated and refreshed.",
    price: 65000,
    discountPrice: 58000,
    category: "Beauty",
    brand: "GlowNaturals",
    sku: "BEA-007",
    stock: 19,
    rating: 4.4,
    reviews: 94,
    images: ["/images/skincare-1.jpg", "/images/skincare-2.jpg"],
    colors: [],
    isFeatured: false,
    isAvailable: true,
    createdAt: "2026-10-13T08:30:00Z",
  }]

  freshProject.get('/products', (req, res) => {
    return res.json({ message: 'Hello and Welcome Back', products })
  })

freshProject.get('/products/:rating', (req, res) => {
  const rating = Number(req.params.rating)

  const filteredProducts = products.filter((product) => product.rating >= rating)

  return res.json({
    message: `Products with rating ${rating} and above`,
    count: filteredProducts.length,
    products: filteredProducts,
  })
})
  
 freshProject.listen(4000, () => {
  console.log('Server is running on port 4000')
})