"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { LoginFormSchema } from "~/lib/validation-schema";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (value: z.infer<typeof LoginFormSchema>) => {
    setLoading(true);
    setError("");
    
    try {
      console.log(value.email, value.password);
      const response = await signIn("credentials", {
        redirect: false,
        email: value.email, 
        password: value.password,
      })

      console.log(response);

      if (response?.error) {
        setError("Invalid email or password.");
        return;
      }else{
        const {data: session} = useSession();
        if (session?.user?.fullName === "admin"){
          router.push("/admin");
        }else{
          router.push("/menu");
        }
      }

      console.log(response);
      router.push("/menu");
    } catch (error) {
      setError("Something went wrong. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} method="post" className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-1 focus:ring-custom-yellow"
                  type="email"
                  placeholder="email"
                  {...field}
                />
              </FormControl>
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
                <Input
                  className="focus:ring-1 focus:ring-custom-yellow"
                  type="password"
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && (
          <div className="text-sm font-medium text-red-500">{error}</div>
        )}
        <div className="mt-6">
          <Button
            className="w-full bg-custom-yellow text-lg font-medium text-white hover:bg-light-custom-yellow"
            disabled={loading}
            type="submit"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Login"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
