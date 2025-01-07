"use client";

import { useState } from "react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <>
      <div className="container-fluid py-5" id="contact">
        <div className="container pt-3">
          <div className="row g-2">
            <div className="col-12">
              <h1 className="title text-center border_bottom py-3">
                Get in touch
              </h1>
            </div>
            <div className="col-12 col-md-6 d-block mx-auto pt-3">
              <p className="contact-text text-center">
                We&apos;ll get back to you soon!
              </p>
              <button
                className="button_for_contact"
                onClick={() => setIsContactFormOpen(true)}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </>
  );
};
