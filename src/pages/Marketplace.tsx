
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import Card, { CardContent } from "@/components/ui-components/Card";
import Button from "@/components/ui-components/Button";
import { 
  Search, 
  ShoppingBag, 
  Filter, 
  Grid, 
  Menu as MenuIcon, 
  ChevronDown,
  Star,
  Heart,
  ShoppingCart
} from "lucide-react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Handcrafted Basket",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1526625654848-3b23a56fe152?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 24,
    seller: "Artisan Crafts Co.",
    location: "Nairobi, Kenya",
    tags: ["Home", "Decor"],
  },
  {
    id: 2,
    name: "Organic Coffee Beans",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1595431548066-7c7e2a592c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 47,
    seller: "Highland Farms",
    location: "Addis Ababa, Ethiopia",
    tags: ["Food", "Organic"],
  },
  {
    id: 3,
    name: "Traditional Woven Scarf",
    price: 36.50,
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 18,
    seller: "Heritage Textiles",
    location: "Accra, Ghana",
    tags: ["Fashion", "Handmade"],
  },
  {
    id: 4,
    name: "Natural Shea Butter",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1585232351307-4f077cf39e06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 36,
    seller: "Pure Organics",
    location: "Lagos, Nigeria",
    tags: ["Beauty", "Organic"],
  },
  {
    id: 5,
    name: "Beaded Jewelry Set",
    price: 89.50,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 13,
    seller: "Artisan Treasures",
    location: "Cape Town, South Africa",
    tags: ["Jewelry", "Handmade"],
  },
  {
    id: 6,
    name: "Wooden Carved Figurine",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 9,
    seller: "Heritage Crafts",
    location: "Kampala, Uganda",
    tags: ["Art", "Decor"],
  },
];

const categories = [
  { name: "All Categories", count: 240 },
  { name: "Fashion & Clothing", count: 58 },
  { name: "Food & Agriculture", count: 42 },
  { name: "Home & Decor", count: 36 },
  { name: "Beauty & Wellness", count: 29 },
  { name: "Art & Crafts", count: 25 },
  { name: "Jewelry", count: 21 },
  { name: "Technology", count: 18 },
  { name: "Services", count: 11 },
];

const Marketplace = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  return (
    <Layout>
      <div className="mt-4 fade-in">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 slide-up" style={{ animationDelay: "0.1s" }}>
          <div>
            <h1 className="heading-lg mb-2">Marketplace</h1>
            <p className="paragraph">Discover products and services from small businesses</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (3)
            </Button>
          </div>
        </div>
        
        {/* Search & Filter Bar */}
        <div className="mb-8 slide-up" style={{ animationDelay: "0.15s" }}>
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/50" />
              <input
                type="search"
                placeholder="Search products, services, or sellers..."
                className="w-full h-12 pl-10 pr-4 rounded-lg bg-surface-50 border-surface-200 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Button variant="outline" className="h-12 gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative">
                <Button variant="outline" className="h-12 gap-2">
                  Sort By: Featured
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="hidden md:flex items-center gap-1 border border-surface-200 rounded-lg p-1">
                <button
                  className={`p-2 rounded ${
                    view === "grid" ? "bg-surface-100" : ""
                  }`}
                  onClick={() => setView("grid")}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  className={`p-2 rounded ${
                    view === "list" ? "bg-surface-100" : ""
                  }`}
                  onClick={() => setView("list")}
                >
                  <MenuIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 slide-up" style={{ animationDelay: "0.2s" }}>
            <Card variant="subtle">
              <CardContent className="p-4">
                <h2 className="text-lg font-medium mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm ${
                          selectedCategory === category.name
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-surface-100"
                        }`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs font-medium bg-surface-100 px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-surface-200">
                  <h3 className="text-sm font-medium mb-4">Price Range</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full rounded-md border-surface-200 bg-surface-50 p-2 text-sm"
                    />
                    <span className="text-foreground/50">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full rounded-md border-surface-200 bg-surface-50 p-2 text-sm"
                    />
                  </div>
                  <Button variant="outline" fullWidth size="sm">
                    Apply Filter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3 slide-up" style={{ animationDelay: "0.25s" }}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-medium">
                {selectedCategory}{" "}
                <span className="text-foreground/60 text-sm font-normal">
                  (Showing {products.length} products)
                </span>
              </h2>
            </div>
            
            <div className={`grid ${
              view === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "grid-cols-1 gap-4"
            }`}>
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  view={view} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    seller: string;
    location: string;
    tags: string[];
  };
  view: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({ product, view }) => {
  if (view === "list") {
    return (
      <Card variant="default" hoverEffect className="overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              style={{ maxHeight: "200px" }}
            />
          </div>
          <div className="sm:w-2/3 p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium bg-surface-50 text-foreground/70 py-0.5 px-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-foreground/50 hover:text-red-500">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            
            <h3 className="text-lg font-medium mb-1">{product.name}</h3>
            
            <div className="flex items-center gap-1 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-foreground/60">
                ({product.reviews} reviews)
              </span>
            </div>
            
            <p className="text-sm text-foreground/70 mb-4">
              Sold by <span className="font-medium">{product.seller}</span>
              <br />
              <span className="text-xs">{product.location}</span>
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-semibold">${product.price.toFixed(2)}</span>
              <Button size="sm">
                <ShoppingBag className="h-4 w-4 mr-1" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <Card variant="default" hoverEffect className="overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-foreground/50 hover:text-red-500">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      
      <CardContent>
        <div className="flex gap-2 mb-2">
          {product.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium bg-surface-50 text-foreground/70 py-0.5 px-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-medium mb-1">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-foreground/60">
            ({product.reviews} reviews)
          </span>
        </div>
        
        <p className="text-sm text-foreground/70 mb-4">
          Sold by <span className="font-medium">{product.seller}</span>
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">${product.price.toFixed(2)}</span>
          <Button size="sm">
            <ShoppingBag className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Marketplace;
