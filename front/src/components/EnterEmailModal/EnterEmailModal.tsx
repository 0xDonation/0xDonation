import { Modal, ModalContent, ModalBody, Button, Input, Image } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { PRIMARY_BUTTON_CN } from "../styleClassNames";

export const EnterEmailModal = ({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (isOpen: boolean) => void }) => {

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (isOpen === false) {
            setEmail('')
        }

    }, [isOpen]);

    return (
        <Modal size={'3xl'} isOpen={isOpen} onOpenChange={onOpenChange} className={'bg-[#0F0811] text-white p-5'}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody className={'flex flex-row justify-between'}>
                            <div className="flex w-7/12 flex-col gap-6 text-3xl font-extrabold" >Enter your email

                                <Input
                                    className={'flex w-full '}
                                    variant="bordered"
                                    isRequired placeholder="Enter your email" label="Email"
                                    inputMode={'email'} type={'email'} value={email} onValueChange={setEmail}
                                />
                                <Button className={PRIMARY_BUTTON_CN + ' text-white w-4/12'} onPress={onClose}>
                                    Subscribe
                                </Button>
                            </div>
                            <Image className={'flex '} src="src/assets/emailLetter.svg" />

                        </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    )
}