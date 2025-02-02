"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@utils/components/ui/button"
import { Input } from "@utils/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@utils/components/ui/form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@utils/components/ui/card"
import {CreateRoomformSchema} from '@repo/common/types'
import { useRouter } from "next/navigation"

export default function SlugPasswordForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const router = useRouter();

  const form = useForm<z.infer<typeof CreateRoomformSchema>>({
    resolver: zodResolver(CreateRoomformSchema),
    defaultValues: {
      slug: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof CreateRoomformSchema>) {
    console.log(values)
    router.push(`/room/${values.slug}`)
    setFormSubmitted(true)
    router.push(`/room/${values.slug}?password=${values.password}`)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Room</CardTitle>
        <CardDescription>Enter your slug and password below.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="your-slug" {...field} />
                  </FormControl>
                  <FormDescription>This will be your unique identifier.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>Enter a strong password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Join Room</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        {formSubmitted && <p className="text-sm text-green-600">Form submitted! Wait till u get redirected to your room.</p>}
      </CardFooter>
    </Card>
  )
}

