"use client";

import { useForm } from "react-hook-form";
import { graphqlClient } from "useCases/Providersclients/api";
import { verifyCredentialsTokenQuery } from "graphql/query/user";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin,TokenResponse } from "@react-oauth/google";
import { useCallback } from "react";
import { verifyGoogleTokenMutation } from "graphql/mutation/user";

export default function SkillExchange() {
  const { register, handleSubmit, reset } = useForm<{ email: string; password: string }>();

  const onSubmit = async (data: { email: string; password: string }) => {
    const token = await graphqlClient.request(verifyCredentialsTokenQuery, data);
    window.localStorage.setItem("__Varuna_Token", token.verifyCredentialsToken as string);
    reset();
    redirect("/");
  };
  const googlelogin = useGoogleLogin({
    onSuccess: (cred:TokenResponse) => {
      console.log(cred);
      handleLoginGoogle(cred);
    },
    onError: () => console.log('Login Failed'),
    scope: 'openid profile email',
  });
  const handleLoginGoogle=useCallback(async (cred:TokenResponse)=>{
    const googleToken=cred.access_token
    if(googleToken){
      const { verifyGoogleToken } = await graphqlClient.request(verifyGoogleTokenMutation,{token:googleToken});
      console.log(verifyGoogleToken);
      if(verifyGoogleToken){
        window.localStorage.setItem("__Varuna_Token",verifyGoogleToken);
        redirect("/");
      }
    }
  },[])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Skill Exchange Platform</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
          <div className="mb-4">
            <label className="block text-left font-semibold">Your Email:</label>
            <input
              type="text"
              {...register("email", { required: true })}
              className="w-full p-2 border rounded-lg mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left font-semibold">Password:</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full p-2 border rounded-lg mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Enter
          </button>
        </form>

        <button
          className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100"
          onClick={() => googlelogin()}
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
