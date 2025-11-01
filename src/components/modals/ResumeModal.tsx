import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@heroui/react";

export default function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      classNames={{
        backdrop: "bg-black/60",         
        base: "bg-transparent shadow-none", 
        wrapper: "bg-transparent",          
        header: "bg-transparent text-white",
        body: "bg-transparent",
        footer: "bg-transparent",
        closeButton: "text-white hover:bg-white/10",
      }}
    >
      <ModalContent className="max-w-5xl w-full bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]">

          <>
            <ModalHeader className="flex flex-col gap-1">My Resume</ModalHeader>
            <ModalBody>
              <iframe
                src="/pdf/CV_Poonyawat.pdf"
                title="Resume PDF"
                className="w-full h-[70vh] border-0"
              />
            </ModalBody>
          </>
      </ModalContent>
    </Modal>
  );
}
