import { useEffect,useState } from "react";
import { WS_URL } from "useCases/Providersclients/config";

export function useSocket(){
  const [loading,setLoading] = useState(true);
  const [socket,setSocket] = useState<WebSocket>();

  useEffect(() => {
   const ws=new WebSocket(WS_URL);
   ws.onopen=()=>{
     setLoading(false);
     setSocket(ws);
   }
  },[]);
  return {loading,socket};
}