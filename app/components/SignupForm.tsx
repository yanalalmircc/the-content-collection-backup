"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SpinnerIcon } from "@/app/icons";
import { signUpVisitor } from "@/app/api";
import React from "react";

const signupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SignupSchema = z.infer<typeof signupSchema>;

export const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupSchema) => {
    try {
      setIsSubmitting(true);
      const response = await signUpVisitor(data);

      // Set success state
      setIsSuccess(true);

      // If we get a redirectUrl, redirect the user
      if (response?.redirectUrl) {
        window.location.href = response.redirectUrl;
      }
    } catch (error) {
      console.error("Failed to sign up:", error);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Please enter your email address"
          disabled={isSubmitting}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="emailsubmit mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting || isSuccess}
      >
        {isSubmitting ? (
          <span className="flex items-center w-full justify-center">
            <SpinnerIcon />
          </span>
        ) : (
          "Continue"
        )}
      </button>
      {isSuccess && (
        <span className="text-green-600">Successfully signed up!</span>
      )}
    </form>
  );
};
