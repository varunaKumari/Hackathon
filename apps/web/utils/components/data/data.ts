import {
 Zap,
 ShoppingCart,
 BarChart,
 Mail,
 Calendar,
 FileText,
 CreditCard,
 Phone,
 Video,
 Cloud,
 Globe,
 Shield,
 Camera,
 Music,
 Book,
 Briefcase,
 Coffee,
 Cpu,
 Database,
 Headphones,
 Heart,
 Image,
 Key,
 Laptop,
 Map,
 Printer,
 Rocket,
 Scissors,
 Truck,
 Wifi,
} from "lucide-react"
import type React from "react"

export type Room = {
 id: string
 name: string
 description: string
 category: string
 icon: React.ComponentType
 color: string
}

export const categories = [
 "All",
 "Analytics",
 "Marketing",
 "Productivity",
 "Sales",
 "Finance",
 "Communication",
 "Cloud Services",
 "Security",
 "Design",
 "Development",
 "Human Resources",
 "Customer Support",
 "E-commerce",
 "Social Media",
]

const iconMap = {
 Zap,
 ShoppingCart,
 BarChart,
 Mail,
 Calendar,
 FileText,
 CreditCard,
 Phone,
 Video,
 Cloud,
 Globe,
 Shield,
 Camera,
 Music,
 Book,
 Briefcase,
 Coffee,
 Cpu,
 Database,
 Headphones,
 Heart,
 Image,
 Key,
 Laptop,
 Map,
 Printer,
 Rocket,
 Scissors,
 Truck,
 Wifi,
}

const colorPalette = [
 "#FF4A00",
 "#96BF48",
 "#E37400",
 "#FFE01B",
 "#F06A6A",
 "#FFCC22",
 "#6772E5",
 "#F22F46",
 "#2D8CFF",
 "#0061FF",
 "#00A1E0",
 "#D32D27",
 "#4CAF50",
 "#9C27B0",
 "#FF9800",
 "#795548",
 "#607D8B",
 "#3F51B5",
 "#00BCD4",
 "#FFC107",
]

function generateIntegrations(count: number): Room[] {
 const Rooms: Room[] = []
 const iconKeys = Object.keys(iconMap)

 for (let i = 0; i < count; i++) {
   const iconKey = iconKeys[Math.floor(Math.random() * iconKeys.length)] as keyof typeof iconMap || "Zap"
   const category = categories[Math.floor(Math.random() * (categories.length - 1)) + 1] || "Uncategorized" 
   const color = colorPalette[Math.floor(Math.random() * colorPalette.length)] || "#000000"

   Rooms.push({
     id: `${i + 1}`,
     name: `Room ${i + 1}`,
     description: `This is a detailed description for Room ${i + 1}. It provides ${category.toLowerCase()} services to streamline your workflow and improve efficiency. With powerful features and easy Room, it's an essential tool for modern businesses looking to optimize their operations and stay ahead in the competitive market.`,
     category,
     icon: iconMap[iconKey],
     color,
   })
 }

 return Rooms
}

export const rooms = generateIntegrations(1000)

