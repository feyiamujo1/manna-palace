"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { SignupFormSchema } from "~/lib/validation-schema";

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
import axios from "axios";
import { getToken } from "next-auth/jwt";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
  });

  const onSubmit = async (value: z.infer<typeof SignupFormSchema>) => {
    setLoading(true);
    setServerError("");

    try {
      const newUser = await (
        await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(value),
        })
      ).json();

      if (newUser?.error) {
        form.setError("password", {
          type: "custom",
          message: newUser.error,
        });
        return;
      }

      const response = await signIn("credentials", {
        redirect: false,
        email: value.email, 
        password: value.password,
      })

      if (response?.error) {
        setServerError("Invalid email or password.");
        return;
      }else{
        const {data: session} = useSession();
        if (session?.user?.fullName === "admin"){
          router.push("/admin");
        }else{
          router.push("/menu");
        }
      }

      router.push("/menu");
      console.log("created successfully");
    } catch (error) {
      setServerError("Something went wrong. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        method="post"
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-1 focus:ring-custom-yellow"
                  type="text"
                  placeholder="Fullname"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-1 focus:ring-custom-yellow"
                  type="tel"
                  placeholder="phone number"
                  {...field}
                  // onChange={(e) => {
                  //   const value = e.target.value;
                  //   const phone = value.replace(/\D/g, "");
                  //   field.onChange(phone);
                  // }}
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
        {serverError && (
          <div className="text-sm font-medium text-red-500">{serverError}</div>
        )}
        <div className="mt-6">
          <Button
            className={
              "w-full bg-custom-yellow text-lg font-medium text-white hover:bg-light-custom-yellow"
            }
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Register"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
