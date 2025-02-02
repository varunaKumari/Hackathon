"use client"
import { useGetAllChats } from "hooks/user"
import { usePathname } from "next/navigation";
import { ChatRoomClient } from "./getChatClient";
export default function Page(){

  const roomId = usePathname().split("/")[2];
  const queryParams = new URLSearchParams(usePathname().split("?")[1]);
  const password = queryParams.get("password");
  const {chat}=useGetAllChats(roomId as string);
  const filteredChat = chat?.filter((message) => message !== null) ?? [];
  console.log(filteredChat);
  return (
    <>
      <div>
          <ChatRoomClient messages={filteredChat} room={roomId as string} password={password as string}></ChatRoomClient>
      </div>
    </>
  )
}