"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

const AddDocumentButton = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ email, userId });
      if (room) {
        router.push(`/documents/${room.id}`);
      }
    } catch (error) {}
  };
  return (
    <Button
      type="submit"
      onClick={addDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image src={"/assets/icons/add.svg"} alt="add" width={24} height={24} />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentButton;
