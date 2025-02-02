import type { Room } from "@utils/components/data/data"
import { Card, CardContent } from "@utils/components/ui/card"

type roomCardProps = {
  room: Room
}

export default function RoomCard({ room }: roomCardProps) {
  const Icon: React.ElementType = room.icon

  return (
    <Card className="hover:shadow-lg transition-all duration-300 group h-full">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-center text-center space-y-2 mb-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: `${room.color}20` }}
          >
            <Icon
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              style={{ color: room.color }}
            />
          </div>
          <h3 className="font-semibold text-sm">{room.name}</h3>
        </div>
        <p className="text-xs text-gray-500 flex-grow overflow-hidden">
          {room.description.length > 150
            ? `${room.description.substring(0, 150)}...`
            : room.description}
        </p>
      </CardContent>
    </Card>
  )
}

