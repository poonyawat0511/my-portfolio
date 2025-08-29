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
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
      <ModalContent className="max-w-5xl w-full">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">My Resume</ModalHeader>
            <ModalBody>
              <iframe
                src="/pdf/CV_Poonyawat.pdf"
                className="w-full h-[70vh] border"
                title="Resume PDF"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}