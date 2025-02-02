"use client"

import { useState, useMemo } from "react"
import { categories, rooms } from "@utils/components/data/data"
import CategoryFilter from "@utils/components/self/CategoryFilter"
import SearchBar from "@utils/components/self/SearchBar"
import RoomGrid from "@utils/components/self/roomGrid"
import Pagination from "@utils/components/self/pagiantion"
import SlugPasswordForm from "@utils/components/self/createRoomForm";
const ITEMS_PER_PAGE = 15
export default function Page() {
 const [selectedCategory, setSelectedCategory] = useState("All")
 const [searchQuery, setSearchQuery] = useState("")
 const [currentPage, setCurrentPage] = useState(1)
 const filteredRooms = useMemo(() => {
  interface Room {
   id: string;
   name: string;
   description: string;
   category: string;
  }

  return rooms.filter((room: Room) => {
    const categoryMatch = selectedCategory === "All" || room.category === selectedCategory;
    const searchMatch =
     room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     room.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
   });
}, [selectedCategory, searchQuery])

const totalPages = Math.ceil(filteredRooms.length / ITEMS_PER_PAGE)
const paginatedRooms = filteredRooms.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE,
)
 return (
  <>
  <div className="bg-gray-100 h-screen w-screen flex items-center justify-center">
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(category)
          setCurrentPage(1)
        }}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4 md:p-6 space-y-4">
          <h1 className="text-2xl font-bold">Rooms</h1>
          <SearchBar
            onSearch={(query) => {
              setSearchQuery(query)
              setCurrentPage(1)
            }}
          />
        </div>
        <div className="flex-1 overflow-auto px-4 md:px-6">
          <RoomGrid rooms={paginatedRooms} />
        </div>
        <div className="p-4 md:p-6 border-t">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </main>
    </div>
   <div>
    <SlugPasswordForm></SlugPasswordForm>
   </div>
    
  </div>
  </>
)
}