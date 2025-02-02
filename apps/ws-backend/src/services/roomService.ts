import { prismaClient } from "@repo/db/client";
import { users } from "..";
import { WebSocket } from "ws";
class RoomService {
  public static async joinRoom(room: string, password: string, ws: WebSocket) {
    const roominDb = await prismaClient.room.findUnique({
      where: {
        slug: room,
      },
    });
    if (!roominDb) {
      ws.send(JSON.stringify({ error: "Room not found" }));
      return;
    }
    if (roominDb.password !== password) {
      ws.send(JSON.stringify({ error: "Password Incorrect" }));
      return;
    }
    const user = users.find((u) => u.ws === ws);
    if (!user) {
      ws.send(JSON.stringify({ error: "User Not Found" }));
      ws.close();
      return;
    }
    user.rooms.push(room);
  }
  public static async leaveRoom(room: string, ws: WebSocket) {
    const user = users.find((u) => u.ws === ws);
    if (!user) {
      ws.send(JSON.stringify({ error: "User Not Found" }));
      ws.close();
      return;
    }
    const index = user.rooms.indexOf(room);
    if (index === -1) {
      ws.send(JSON.stringify({ error: "Room not found" }));
      return;
    }
    user.rooms.splice(index, 1);
  }
  public static async chatInRoom(room: string, ws: WebSocket, message: string) {
    if(message.length>500){
      ws.send(JSON.stringify({ error: "Message TOO Long" }));
      return;
    } 
    await prismaClient.chat.create({
      data: {
        roomId: room,
        message: message,
        userId: users.find((u) => u.ws === ws)?.userid as string,
      },
    });
    const user=await prismaClient.user.findUnique({
      where:{
        id:users.find((u) => u.ws === ws)?.userid as string,
      }
    });
    users.forEach((u) => { 
      if (u.rooms.includes(room)) {
        u.ws.send(JSON.stringify({
         type:"chat",
         message:"message",
         room:room,
         user:{
          name:user?.name as string,
          profilePhotoURL:user?.profilePhotoURL as string,
         },
        })); 
       }
     });
  }
}
export default RoomService;
