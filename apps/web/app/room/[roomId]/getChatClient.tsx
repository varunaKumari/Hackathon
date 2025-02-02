import { useGetCurrentUser } from "hooks/user";
import { useSocket } from "hooks/useSockets";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
 interface Chat {
  __typename?: "Chat";
  message: string;
  createdAt: string;
  user: {
   __typename?: "User";
   name: string;
   profilePhotoURL?: string | null;
  };
 }
export function ChatRoomClient({
  messages,
  room,
  password,
}: {
  messages: Chat[];
  room: string;
  password: string;
}) {
  const [chats, setChats] = useState(messages);
  useEffect(() => {
    setChats(messages);
  }, [messages]);
  const { socket, loading } = useSocket();
  const [currentMessage, setCurrentMessage] = useState("");
  const currentUser=useGetCurrentUser();
  useEffect(() => {
   
    if (socket && !loading) {
      socket.send(
        JSON.stringify({
          type: "join_room",
          room: room,
          password:password,
        })
      );
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "chat_in_room") {
          setChats((chats) => [...chats, { 
           message: data.message,
           createdAt: new Date().toISOString(),
           user: {
            name: data.name,
            profilePhotoURL: data.profilePhotoURL,
           },
           }]);
        }
      };
    }
  }, [socket, room, loading]);
  function handleChatSend() {
   socket?.send(
    JSON.stringify({
     type: "chat_in_room",
     room: room,
     message: currentMessage,
    })
   );
   setCurrentMessage("");
   setChats((chats) => [...chats, { message: currentMessage 
    , createdAt: new Date().toISOString(),
    user: {
     name: currentUser?.user?.name as string,
     profilePhotoURL: currentUser?.user?.profilePhotoURL as string,
    },
   }]);
  }
    const messageContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
     if (messageContainerRef.current) {
       messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
     }
   }, [messages]);
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex flex-col max-w-full mx-auto mt-10 bg-white rounded-lg shadow-md overflow-hidden" style={{ width: '1160px' }}>
     <div className="flex items-center justify-between p-4 border-b">
       <h2 className="text-lg font-semibold">Direct</h2>
       <div className="space-x-4 text-gray-500">
      <i className="fas fa-video cursor-pointer"></i>
      <i className="fas fa-phone cursor-pointer"></i>
      <i className="fas fa-info-circle cursor-pointer"></i>
       </div>
     </div>
     <div ref={messageContainerRef} className="flex-grow overflow-y-auto p-4 bg-gray-100">
       {chats.map((msg, index) => (
      <div key={index} className={`flex ${msg.user.name === currentUser.user?.name ? "justify-end" : "justify-start"} mb-3`}>
     {msg.user.name !== currentUser.user?.name && <Image src={(msg.user.profilePhotoURL === null) ? "https://www.w3schools.com/howto/img_avatar2.png" : msg.user.profilePhotoURL as string} alt="Bot" width={50} height={10} className="rounded-full mr-2" />}
     <div className={`p-3 rounded-lg shadow-md ${msg.user.name === currentUser.user?.name ? "bg-blue-500 text-white" : "bg-white"}`}>
       {msg.message}
     </div>
     {msg.user.name === currentUser.user?.name && <Image src={(currentUser.user.profilePhotoURL === null) ? "https://www.w3schools.com/howto/img_avatar2.png" : currentUser.user.profilePhotoURL as string} alt="User" width={50} height={10} className="rounded-full ml-2" />}
      </div>
       ))}
     </div>
     <div className="flex items-center p-4 border-t">
       <input
      type="text"
      value={currentMessage}
      onChange={(e) => setCurrentMessage(e.target.value)}
      onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
      className="flex-grow p-2 border rounded-full outline-none"
      placeholder="Message..."
       />
       <button onClick={handleChatSend} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full">Send</button>
     </div>
      </div>
    </div>
  );
}
