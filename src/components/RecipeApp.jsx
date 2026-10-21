import React, { useState } from 'react';
import { Search, BookOpen, Clock, Users, Info } from 'lucide-react';

// Using your exact JSON structures as the default data
const recipeData = [
  {
    "title_bengali": "Shilpy B- এর ওরশ বিরিয়ানি",
    "title_english": "Shilpy B.'s Urs Biryani",
    "category": "Meat",
    "servings": "N/A",
    "ingredients_bengali": ["মাংস", "দই", "আদা", "রসুন", "তেল (double - polao ও মাংসের জন্য)", "হলুদ গুঁড়ো (মরিচের সমান পরিমাণ)", "মরিচ গুঁড়ো (হলুদের সমান পরিমাণ)", "পিঁয়াজ বাটা (বেশী)", "গরম মশলা", "জিরা", "জায়ফল ও জয়ত্রী", "চাল", "১/৪ অংশ পানি", "৩/৪ অংশ দুধ", "ছোট করে রাখা আখের গুড়", "কাঁচা মরিচ"],
    "ingredients_english": ["Meat", "Yogurt", "Ginger paste", "Garlic paste", "Oil (double quantity, to cover both meat and polao)", "Turmeric powder (equal to chili)", "Chili powder (equal to turmeric)", "Onion paste (generous amount)", "Garam masala", "Cumin", "Nutmeg and mace", "Rice", "Water (1/4 part)", "Milk (3/4 part)", "Sugarcane jaggery (chopped small)", "Green chilies"],
    "instructions_bengali": ["মাংস দই, আদা ও রসুন দিয়ে marinate করে রাখতে হবে।", "বেশি পরিমাণ তেল দিয়ে high জ্বালে মাংস হলুদ ও মরিচ সমান সমান, পিঁয়াজ বাটা বেশি, গরম মশলা, জিরা ও জায়ফল-জয়ত্রী দিয়ে কষিয়ে রান্না করতে হবে।", "মাংস তুলে ফেলে সেই তেল অন্য পাত্রে নিয়ে তার সাথে ১/৪ পানি, ৩/৪ দুধ, ছোট করে কাটা আখের গুড় ও কাঁচা মরিচ দিয়ে বলক উঠাতে হবে।", "বলক উঠিলে চাল দিয়ে দিতে হবে।", "চাল হয়ে গেলে মাংসের হাঁড়িতে পোলাও দিয়ে মৃদু আঁচে দমে রাখতে হবে।"],
    "instructions_english": ["Marinate the meat with yogurt, ginger, and garlic.", "Heat a double measure of oil on high flame and cook the meat with equal amounts of turmeric and red chili powder, a generous amount of onion paste, garam masala, cumin, nutmeg, and mace.", "Remove the cooked meat pieces from the pot and transfer the remaining spiced oil to another pan.", "Add 1/4 part water, 3/4 part milk, finely chopped sugarcane jaggery, and green chilies to the oil and bring it to a boil.", "Once boiling, add the rice and cook.", "When the rice (polao) is cooked, layer it over the meat in the meat pot and keep on gentle dum (low heat)."],
    "notes": "The recipe starts on the bottom of the first page and continues on the top of the next page.",
    "recipe_id": "recipe_115_d",
    "source_images": ["IMG_1720.jpeg", "IMG_1721.jpeg"]
  },
  {
    "title_bengali": "রাখীর স্যুপ (Rakhee's Soup)",
    "title_english": "Rakhee's Soup",
    "category": "Soup",
    "servings": "N/A",
    "ingredients_bengali": ["তেল: ৩ বা ৪ ফোঁটা", "রসুন: ২ কোয়া (থেঁতো করা)", "সবজি (পেঁপে, ফুলকপি, নরম শাকসবজি)", "চিকেন স্টক: প্রয়োজনমতো", "নুন: প্রয়োজনমতো", "পেঁয়াজ: বড় টুকরো করে কাটা", "ধনেপাতা (সিলান্ত্রো)"],
    "ingredients_english": ["Oil: 3 to 4 drops", "Garlic: 2 cloves (smashed)", "Vegetables: papaya, cauliflower, soft veggies", "Chicken stock: as needed", "Salt: as needed", "Onion: cut in chunks", "Cilantro: as needed"],
    "instructions_bengali": ["একটি পাত্রে ৩-৪ ফোঁটা তেল গরম করে তাতে ২ কোয়া থেঁতো করা রসুন দিয়ে বাদামি করে ভেজে নিন (browned)।", "সেই তেলে পছন্দের সবজি (পেঁপে, ফুলকপি বা অন্যান্য নরম সবজি) দিয়ে সামান্য সাঁতলে নিন (saute)।", "এরপর প্রয়োজনমতো চিকেন স্টক ও নুন যোগ করুন।", "ঢাকনা দিয়ে ফুটতে দিন (cover and boil)।", "বড় টুকরো করে কাটা পেঁয়াজ দিয়ে নরম হওয়া পর্যন্ত সেদ্ধ হতে দিন।", "শেষে ধনেপাতা (cilantro) ছড়িয়ে নামিয়ে পরিবেশন করুন।"],
    "instructions_english": ["Heat 3 to 4 drops of oil in a pan and brown 2 smashed garlic cloves.", "Add the vegetables (papaya, cauliflower, or other soft veggies) and sauté them in the oil.", "Add chicken stock and salt as needed.", "Cover the pot and bring it to a boil.", "Add onion cut in chunks and leave to simmer until tender/soft.", "Garnish with fresh cilantro before serving."],
    "notes": "Written entirely in English in a personal planner dated Saturday, 25 May.",
    "recipe_id": "recipe_116",
    "source_images": ["IMG_1722.jpeg"]
  },
  {
    "title_bengali": "Jazz/Apple Thxsgivg Mix Green Salad",
    "title_english": "Jazz/Apple Thanksgiving Mix Green Salad",
    "category": "Salad",
    "servings": "N/A",
    "ingredients_bengali": ["Olive Oil - ১/৪ কাপ", "Apple Cider Vinegar - ১ টেবিল চামচ", "Salt / Pepper (লবণ ও গোলমরিচ)", "Orange zest (কমলার খোসা কুচি)", "Goat Cheese", "Walnut & Cranberry", "Apple (আপেল)"],
    "ingredients_english": ["1/4 cup Olive oil", "1 tbsp Apple cider vinegar", "Salt and black pepper to taste", "Orange zest", "Goat cheese", "Walnuts & cranberries", "Apple"],
    "instructions_bengali": ["সব উপকরণ একসঙ্গে মিশিয়ে সালাদ প্রস্তুত করুন।"],
    "instructions_english": ["Combine all the ingredients together to prepare the green salad."],
    "notes": "Listed under 'FOOD ITEM IDEA' at the top of the page: 1. Rakhee's Bengan, Shrimp & egg ভর্তা; 2. Tulip's sway fillet -> fishball & gravy; 3. Badal Bhai's wife's broccoli & garlic ভাজি.",
    "recipe_id": "recipe_117_a",
    "source_images": ["IMG_1723.jpeg"]
  }
];

export default function RecipeApp({ initialRecipes = recipeData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(initialRecipes[0]);
  
  // 1. Changed to an array to allow MULTIPLE category selections
  const [selectedCategories, setSelectedCategories] = useState([]);

  // 2. Extract unique categories (removed 'All' since no selection = All)
  const categories = [...new Set(initialRecipes.map(r => r.category).filter(Boolean))];

  // Toggle function for selecting/deselecting multiple categories
  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) // Remove if already selected
        : [...prev, category]              // Add if not selected
    );
  };

  // 3. Updated filtering logic
  const filteredRecipes = initialRecipes
    .filter(recipe => {
      const matchesSearch = recipe.title_english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (recipe.title_bengali && recipe.title_bengali.includes(searchTerm));
      
      // If array is empty, show all. Otherwise, check if recipe category is in the selected array
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(recipe.category);
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => a.title_english.localeCompare(b.title_english));  

  const getCategoryStyles = (category) => {
    const styles = {
      Seafood: { bg: 'bg-[#E2ECE8]', text: 'text-[#668780]' },
      Meat: { bg: 'bg-[#F3E4DC]', text: 'text-[#B36E53]' },
      Vegetarian: { bg: 'bg-[#E6EBDD]', text: 'text-[#758566]' },
      Dessert: { bg: 'bg-[#F2E4E6]', text: 'text-[#B67D88]' },
      Salad: { bg: 'bg-[#E6EBDD]', text: 'text-[#758566]' },
      Soup: { bg: 'bg-[#F3E4DC]', text: 'text-[#B36E53]' }
    };
    return styles[category] || { bg: 'bg-[#E9DFCF]', text: 'text-[#292522]' };
  };


  return (
    <div className="min-h-screen bg-[#A45D59] text-[#292522] flex flex-col md:flex-row font-['DM_Sans',sans-serif]">
      
      {/* LEFT COLUMN: Strictly stacked vertically */}
      <div className="w-full md:w-80 flex flex-col h-screen border-r border-[#5a3034] bg-[#F7F2E9]">
        
        {/* Top Section: Header, Search, and Category Icons */}
        <div className="flex flex-col flex-shrink-0 bg-[#753f44]">
          <div className="p-6 pb-4">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 text-[#fdfbf7]">
              <BookOpen className="w-6 h-6" />
              <h1 className="text-xl font-bold font-serif tracking-wide">Ammi's Recipes</h1>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e8dcc4]" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#5a3034] text-[#fdfbf7] placeholder-[#e8dcc4] pl-10 pr-4 py-2 rounded-md border border-[#4a262a] focus:outline-none focus:ring-1 focus:ring-[#e8dcc4] text-sm"
              />
            </div>
          </div>

          {/* Category Icons/Pills (Horizontal Scroll) */}
          <div className="px-6 pb-4 overflow-x-auto whitespace-nowrap flex gap-2 hide-scrollbar">
            {categories.map(category => {
              const isSelected = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    isSelected 
                      ? 'bg-[#e8dcc4] text-[#5a3034] border-[#e8dcc4] shadow-inner' 
                      : 'bg-transparent text-[#e8dcc4] border-[#e8dcc4] hover:bg-[#5a3034]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Recipe List Section */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredRecipes.map((recipe) => (
            <button
              key={recipe.recipe_id}
              onClick={() => setSelectedRecipe(recipe)}
              className={`w-full text-left p-4 rounded-md transition-all duration-200 border ${
                selectedRecipe.recipe_id === recipe.recipe_id
                  ? 'bg-white border-[#D9D0C4] shadow-sm'
                  : 'bg-transparent border-transparent hover:bg-[#E9DFCF]'
              }`}
            >
              <div className={`font-semibold text-lg mb-1 font-['Cormorant_Garamond',serif] ${
                selectedRecipe.recipe_id === recipe.recipe_id ? 'text-[#702F3B]' : 'text-[#292522]'
              }`}>
                {recipe.title_english}
              </div>
              <div className="text-sm text-[#292522]/70 font-['Noto_Serif_Bengali',serif]">
                {recipe.title_bengali}
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* END OF LEFT COLUMN */}

      {/* Main Content Area - Muted Clay Workspace */}
      <div className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Paper Recipe Card */}
          <div className="bg-[#F7F2E9] rounded-[4px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#D9D0C4] overflow-hidden relative">
            
            {/* Header section */}
            <div className="p-8 md:p-12 pb-8">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-[56px] font-bold text-[#292522] mb-4 font-['Cormorant_Garamond',serif] leading-tight">
                  {selectedRecipe.title_english}
                </h2>
                <h3 className="text-2xl md:text-[28px] text-[#292522]/80 mb-8 font-['Noto_Serif_Bengali',serif]">
                  {selectedRecipe.title_bengali}
                </h3>
                
                <div className="flex justify-center gap-4 text-xs font-semibold uppercase tracking-widest">
                  {selectedRecipe.category && (
                    <span className={`px-4 py-1.5 rounded-full ${getCategoryStyles(selectedRecipe.category).bg} ${getCategoryStyles(selectedRecipe.category).text}`}>
                      {selectedRecipe.category}
                    </span>
                  )}
                  {selectedRecipe.servings && selectedRecipe.servings !== "N/A" && (
                    <span className="flex items-center gap-2 px-4 py-1.5 bg-[#E9DFCF] text-[#292522] rounded-full">
                      <Users size={14} /> Serves {selectedRecipe.servings}
                    </span>
                  )}
                </div>
              </div>

              {/* Dynamic Photo Render from source_images array */}
              {selectedRecipe.source_images && selectedRecipe.source_images.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  {selectedRecipe.source_images.map((imgName, idx) => (
                    <div key={idx} className="relative group rotate-[-1deg] transition-transform hover:rotate-0 duration-300">
                      <div className="absolute inset-0 bg-[#292522]/10 translate-x-2 translate-y-2 blur-[2px]"></div>
                      <div className="relative bg-[#F7F2E9] p-2.5 shadow-sm border border-[#D9D0C4]">
                        {/* The exact path expected by Astro's public folder */}
                        <img 
                          src={`/images/${selectedRecipe.recipe_id.replace(/_[a-z]$/i, '')}/${imgName}`}
                          alt={`Original Recipe - Page ${idx + 1}`} 
                          className="w-full max-w-[280px] md:max-w-sm h-auto max-h-[400px] object-cover grayscale-[10%] sepia-[5%] contrast-[1.1]"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1548943487-a2e4b43b5852?auto=format&fit=crop&q=80&w=600";
                          }}
                        />
                        <div className="text-center mt-2 text-[10px] text-[#292522]/60 uppercase tracking-widest font-semibold">
                          Original Notes {idx + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <hr className="border-[#D9D0C4] mt-8" />
            </div>

            {/* Ingredients & Instructions Grid */}
            <div className="p-8 md:p-12 pt-0 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Ingredients Column */}
              <div className="lg:col-span-4 space-y-10 border-r border-[#D9D0C4]/50 pr-6">
                <div>
                  <h4 className="text-[26px] font-bold text-[#292522] mb-6 font-['Cormorant_Garamond',serif]">Ingredients</h4>
                  <ul className="space-y-4">
                    {selectedRecipe.ingredients_english.map((item, i) => (
                      <li key={`eng-${i}`} className="flex gap-3 text-[#292522] font-semibold text-[16px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9B66F] shrink-0 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-8 border-t border-[#D9D0C4]">
                  <h4 className="text-[24px] font-bold text-[#292522] mb-6 font-['Noto_Serif_Bengali',serif]">উপকরণ</h4>
                  <ul className="space-y-4">
                    {selectedRecipe.ingredients_bengali.map((item, i) => (
                      <li key={`ben-${i}`} className="flex gap-3 text-[#292522]/90 font-medium font-['Noto_Serif_Bengali',serif]">
                        <span className="w-1 h-1 rounded-full bg-[#D9D0C4] shrink-0 mt-2.5"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions Main Column */}
              <div className="lg:col-span-8 space-y-8">
                <h4 className="text-[26px] font-bold text-[#292522] mb-8 font-['Cormorant_Garamond',serif]">Instructions</h4>
                
                <div className="space-y-10">
                  {selectedRecipe.instructions_english.map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#702F3B] rounded-full flex items-center justify-center border-2 border-[#D9B66F] text-[#F7F2E9] font-bold text-sm shadow-sm">
                          {i + 1}
                        </div>
                      </div>
                      <div className="space-y-3 pt-1">
                        <p className="text-[#292522] leading-relaxed text-[16px]">
                          {step}
                        </p>
                        {selectedRecipe.instructions_bengali[i] && (
                          <p className="text-[#292522]/70 leading-relaxed font-['Noto_Serif_Bengali',serif] text-[15px]">
                            {selectedRecipe.instructions_bengali[i]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ammi's Notes */}
                {selectedRecipe.notes && (
                  <div className="mt-14 bg-[#E9DFCF] border border-[#E2D4BC] border-l-[3px] border-l-[#D9B66F] p-6 rounded-[4px] relative">
                    <div className="flex items-start gap-4">
                      <Info className="text-[#702F3B] shrink-0 mt-0.5" size={20} />
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-widest text-[#702F3B] mb-2">Ammi's Note</span>
                        <p className="text-[#292522] italic leading-relaxed text-[15px]">
                          {selectedRecipe.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}