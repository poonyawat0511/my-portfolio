import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export default function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" className="bg-black rounded-xl">
      <ModalContent className="max-w-5xl w-full">
        <>
          <iframe
            src="/pdf/CV_Poonyawat.pdf"
            className="w-full h-[80vh] rounded-xl"
            title="Resume PDF"
          />
        </>
      </ModalContent>
    </Modal>
  );
}