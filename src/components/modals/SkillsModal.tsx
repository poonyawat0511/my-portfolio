"use client"

import { Button, Card, Modal, ModalBody, ModalContent, ModalFooter } from "@heroui/react"

type skillProps = {
    isOpen: boolean;
    onClose: () => void;
}

export default function SkillsModal({ isOpen, onClose }: skillProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
            <ModalContent>
                <ModalBody>
                <Card>
                    hello world
                </Card>
                </ModalBody>
            </ModalContent>
            <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    )
}