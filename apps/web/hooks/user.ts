import { useQuery,useMutation } from "@tanstack/react-query"
import { GetAllChatsQuery, GetAllChatsQueryVariables } from "gql/graphql"
import { getAllChatsQuery, getCurrentUserQuery, verifyCredentialsTokenQuery } from "graphql/query/user"
import { graphqlClient } from "useCases/Providersclients/api"

export const useGetAllChats = (room: string) => {
  const query=useQuery({
   queryKey:["getAllChats",room],
   queryFn:()=>{
     return graphqlClient.request<GetAllChatsQuery,GetAllChatsQueryVariables>(getAllChatsQuery,{room:room})
   }
  });
  return {...query,chat:query.data?.getAllChats,isLoading:query.isLoading}
}
export const useGetCurrentUser = () => {
  const query=useQuery({
   queryKey:["getCurrentUser"],
   queryFn:()=>{
     return graphqlClient.request(getCurrentUserQuery)
   }
  });
  return {...query,user:query.data?.getCurrentUser,isLoading:query.isLoading}
}