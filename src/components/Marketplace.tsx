import React, { useState } from 'react'
import { Plus, X } from 'lucide-react'

interface Item {
  id: number
  title: string
  description: string
  price: number
  category: string
  subcategory?: string
  seller: string
  image: string
}

interface Category {
  name: string
  subcategories?: string[]
}

const categories: Category[] = [
  { name: "Bikes" },
  { name: "Helmets" },
  { name: "Tires" },
  { name: "Groupsets" },
  { name: "Clothes", subcategories: ["Tops", "Bottoms", "Gloves", "Shoes"] },
  { name: "Other" }
]

const Marketplace: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      title: "Carbon Road Bike",
      description: "Lightweight carbon frame road bike, perfect for racing",
      price: 2500,
      category: "Bikes",
      seller: "Pro Cyclist",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Mountain Bike Helmet",
      description: "High-quality helmet for mountain biking",
      price: 120,
      category: "Helmets",
      seller: "Safety First",
      image: "https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Gravel Bike Tires",
      description: "Set of two gravel bike tires, 700x40c",
      price: 80,
      category: "Tires",
      seller: "Gravel Grinder",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Shimano 105 Groupset",
      description: "Complete Shimano 105 R7000 groupset",
      price: 600,
      category: "Groupsets",
      seller: "Bike Mechanic",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      title: "Cycling Jersey",
      description: "Breathable cycling jersey for summer rides",
      price: 70,
      category: "Clothes",
      subcategory: "Tops",
      seller: "Cycling Apparel Co.",
      image: "https://images.unsplash.com/photo-1565107241044-03501f98971d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 6,
      title: "Bike Computer",
      description: "GPS-enabled bike computer with navigation",
      price: 250,
      category: "Other",
      seller: "Tech Rider",
      image: "https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ])

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [showNewItemForm, setShowNewItemForm] = useState(false)

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category)
    setSelectedSubcategory(null)
  }

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory === selectedSubcategory ? null : subcategory)
  }

  const filteredItems = items.filter(item => {
    if (!selectedCategory) return true
    if (selectedCategory === item.category) {
      if (!selectedSubcategory) return true
      return item.subcategory === selectedSubcategory
    }
    return false
  })

  const handleNewItemSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add logic to handle new item submission
    setShowNewItemForm(false)
  }

  return (
    <div className="bg-white rounded-[20px] p-8 shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-navy-700">Marketplace</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 pr-0 lg:pr-6 mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4 text-navy-700">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <button
                  onClick={() => handleCategoryClick(category.name)}
                  className={`flex items-center w-full text-left py-2 px-3 rounded-xl transition-colors duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-brand-500 text-white font-semibold'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
                {category.subcategories && selectedCategory === category.name && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory}>
                        <button
                          onClick={() => handleSubcategoryClick(subcategory)}
                          className={`text-sm py-1 px-3 rounded-xl transition-colors duration-200 ${
                            selectedSubcategory === subcategory
                              ? 'bg-brand-50 text-brand-500 font-semibold'
                              : 'text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          {subcategory}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowNewItemForm(true)}
            className="mt-6 w-full bg-brand-500 text-white px-4 py-2 rounded-xl hover:bg-brand-600 transition-colors duration-200 flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Add New Item
          </button>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-navy-700">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl text-brand-500">${item.price}</span>
                    <span className="text-sm text-gray-500">{item.seller}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Item Form Modal */}
      {showNewItemForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-[20px] w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-navy-700">Add New Item</h3>
              <button
                onClick={() => setShowNewItemForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleNewItemSubmit} className="space-y-4">
              {/* Add form fields here */}
              <button
                type="submit"
                className="w-full bg-brand-500 text-white px-4 py-2 rounded-xl hover:bg-brand-600 transition-colors duration-200"
              >
                Add Item
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Marketplace