import {z} from 'zod';
export const CreateUserSchema = z.object({
  email: z.string().email().min(3).max(50),
  password: z.string().min(6).max(25),
  name: z.string(),
});
export const SignInSchema = z.object({
  email: z.string().email().min(3).max(50),
  password: z.string().min(6).max(25),
});
export const CreateRoomSchema = z.object({
  slug: z.string().min(3).max(25),
  password: z.string().min(6).max(25),
});
export const CreateRoomformSchema = z.object({
  slug: z.string().min(3, {
    message: "Slug must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 8 characters.",
  }),
})