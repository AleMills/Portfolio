"use client";

import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";

import { FaCheck } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_prfk6uo", // Reemplaza con tu Service ID
        "template_zrcr8xj", // Reemplaza con tu Template ID
        form.current!, // Referencia al formulario
        "zftj1eWygwOFGCCeg" // Reemplaza con tu Public Key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" }); // Limpiar los campos

           // Restablecer el estado `isSubmitted` después de 3 segundos
           setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Contacto
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <Input
            id="name"
            type="text"
            label="Nombre"
            name="name"
            value={formData.name} // Vincular al estado
            onChange={handleChange} // Manejar cambios
            variant="bordered"
            className="rounded-xl bg-white dark:bg-zinc-900"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input
            id="email"
            type="email"
            label="Email"
            name="email"
            value={formData.email} // Vincular al estado
            onChange={handleChange} // Manejar cambios
            variant="bordered"
            className="rounded-xl bg-white dark:bg-zinc-900"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Textarea
            id="message"
            name="message"
            label="Mensaje"
            value={formData.message} // Vincular al estado
            onChange={handleChange} // Manejar cambios
            required
            variant="bordered"
            className="bg-white dark:bg-zinc-900"
            disabled={isSubmitting}
          />
        </div>
        <Button
          type="submit"
          className="font-semibold"
          color="primary"
          disabled={isSubmitting}
          onPress={onOpen}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </span>
              Enviando
            </>
          ) : (
            <span className="dark:text-white">Enviar mensaje</span>
          )}
        </Button>
      </form>
      {isSubmitted && (
        <Modal
          placement="center"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="xs"
        >
          <ModalContent>
            <>
              <ModalBody>
                <div className="flex justify-center items-center gap-x-2">
                  <p className="text-lg font-semibold">Mensaje enviado</p>
                  <FaCheck className="text-green-500" />
                </div>
              </ModalBody>
            </>
          </ModalContent>
        </Modal>
      )}
    </section>
  );
}
