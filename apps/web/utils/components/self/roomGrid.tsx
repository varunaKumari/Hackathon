import type { Room } from "@utils/components/data/data"
import RoomCard from "./RoomCard"

type roomGridProps = {
  rooms: Room[]
}

export default function RoomGrid({ rooms }: roomGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  )
}

