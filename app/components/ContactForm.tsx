"use client";
import React from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SpinnerIcon } from "@/app/icons";
interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "xtend-media@outlook.com",
      message: data.message,
    };
    if (formRef.current) {
      setIsSubmitting(true);
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        )
        .then(
          () => {
            reset();
            setShowSuccess(true);
            setIsSubmitting(false);
            setTimeout(() => setShowSuccess(false), 5000);
          },
          (error) => {
            console.warn("FAILED...", JSON.stringify(error));
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <div className={`popup-overlay ${isOpen ? "show" : ""}`}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Contact us</h2>
        <form
          action="#"
          method="post"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Your name"
          />
          <div className="error-container">
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Your email"
          />
          <div className="error-container">
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            placeholder="Your message"
          ></textarea>
          <div className="error-container">
            {errors.message && (
              <span className="error-message">{errors.message.message}</span>
            )}
            {showSuccess && (
              <span className="success-message">
                Message sent successfully!
              </span>
            )}
          </div>
          <button type="submit" className="send-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center w-full justify-center">
                <SpinnerIcon />
              </span>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
