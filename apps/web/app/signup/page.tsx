'use client';

import { createCredentialsTokenMutation } from "graphql/mutation/user";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { graphqlClient } from "useCases/Providersclients/api";

export default function SkillConnectLogin() {
  const { register, handleSubmit, formState: { errors },reset } = useForm<FormData>();

  interface FormData {
   name: string;
   email: string;
   password: string;
  }

  interface TokenResponse {
   createCredentialsToken: string;
  }

  const onSubmit = async (data: FormData) => {
   const token = await graphqlClient.request<TokenResponse>(createCredentialsTokenMutation, data);
   window.localStorage.setItem("__Varuna_Token", token.createCredentialsToken);
   reset();
   redirect('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">Skill Connect</h1>
        <h2 className="text-lg font-semibold mb-4">Register Page</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-left font-medium">Name:</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded-md"
            />
            {errors.name?.message && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}
          </div>

          <div>
            <label className="block text-left font-medium">Email:</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" }
              })}
              className="w-full p-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
          </div>

          <div>
            <label className="block text-left font-medium">Password:</label>
            <input
              type="password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters required" } })}
              className="w-full p-2 border rounded-md"
            />
            {errors.password?.message && <p className="text-red-500 text-sm">{String(errors.password.message)}</p>}
          </div>
          <button type="submit" className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
