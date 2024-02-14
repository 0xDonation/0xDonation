import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { PRIMARY_BUTTON_CN, SECONDARY_BUTTON_CN } from "../../components/styleClassNames";
import { EnterEmailModal } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../context";


export const Main = () => {
    const { isEmailModalOpen, openEmailModal, changeEmailModalState } = useContext(AppContext);

    return (
        <div className="flex justify-between flex-col mt-28">
            <EnterEmailModal isOpen={isEmailModalOpen!} onOpenChange={changeEmailModalState!} />
            <div className={'flex gap-72'}>
                <div className="flex justify-between flex-col gap-[24px]">
                    <div className={'text-7xl font-bold'}>0XDonation</div>
                    <div className={'text'}>An Effective Way to Express Support!</div>
                    <div className={'flex gap-[16px]'}>
                        <Button className={PRIMARY_BUTTON_CN} onClick={openEmailModal}>
                            Start
                        </Button>
                        <Button className={SECONDARY_BUTTON_CN}>
                            How it works
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between flex-col gap-[24px]">
                    <div className={'text-6xl font-bold'}>110 986 133+</div>
                    <div className={'text'}>Funds transfered</div>
                    <div className={'text-6xl font-bold'}>6 583 324</div>
                    <div className={'text'}>Received unique content</div>
                </div>
            </div>
            <div id={'supporter'} className={'mt-80 pt-10 text-xl font-bold self-center'}>How it works fоr the supporter</div>
            <div className={'flex gap-6 pt-4'}>

                <div className="flex justify-between flex-col gap-[24px]">
                    <Card className={'pr-10 pl-10'}>
                        <CardHeader>
                            <Image src="src/icons/ConnectWalletIcon.svg" height={300} width={300} />
                        </CardHeader>
                        <CardBody className={'o-wrap w-min pt-24 gap-4'}>
                            <div className={'text-6xl font-bold'}>Connect Wallet</div>
                        </CardBody>
                        <CardFooter>
                            <div className={'text font-normal'}>To initiate interaction, the supporter must connect their wallet to the system</div>

                        </CardFooter>
                    </Card>
                </div>
                <div className="flex justify-between flex-col gap-[24px]">
                    <div className={PRIMARY_BUTTON_CN + ' rounded-3xl h-64 w-[691px] flex flex-col-reverse pl-10 gap-4 pb-6'}>
                        <div className={'text font-normal'}>The supporter selects a tariff plan and transfers funds through the platform</div>
                        <div className={'text-6xl font-bold '}>Choose tariff and transfer funds</div>
                    </div>
                    <div className={'flex gap-10'}>
                        <Card className={'max-w-[334px]'}>
                            <CardHeader>
                                <div className={'text-6xl font-bold'}>Receive Unique Content</div>
                            </CardHeader>
                            <CardFooter>
                                <div className={'text font-normal'}>In case unique content is offered, the supporter gains access to it, creating a mutually beneficial exchange</div>
                            </CardFooter>
                        </Card>
                        <Card className={'flex flex-col-reverse pb-6 max-w-[334px]'}>
                            <CardFooter>
                                <div className={'text font-normal'}>The supporter follows the unique link provided by the client</div>
                            </CardFooter>
                            <CardHeader>
                                <div className={'text-6xl font-bold'}>Follow the Link</div>
                            </CardHeader>

                        </Card>
                    </div>
                </div>
            </div>
            <div id={'client'} className={'mt-64 pt-10 text-xl font-bold self-center'}>How it works fоr the client</div>
            <div className={'flex pt-4 gap-6'}>
                <div className={'flex flex-col w-full max-w-[548px] h-[224px] bg-[#B73C88] rounded-[14px]'}>
                    {/* а хули так ????*/}
                    <div className={'flex w-4/12'}>
                        <div className={'ml-auto'}>
                            <Image className={'mt-[-20px] ml-[16px]'} src="src/assets/ConnectWalletClient/topLeftBitcoin.svg" />
                        </div>
                    </div>
                    <div className={'flex w-11/12'}>
                        <div className={'ml-auto'}>
                            <Image className={'mt-[-20px] ml-[16px]'} src="src/assets/ConnectWalletClient/rightBitcoin.svg" />
                        </div>
                    </div>
                    <div className={'flex w-8/12'}>
                        <div className={'ml-auto'}>
                            <Image className={'mt-[-60px] ml-[16px]'} src="src/assets/ConnectWalletClient/penultimateBitcoin.svg" />
                        </div>
                    </div>
                    <div className={'flex w-8/12 mt-[-100px] ml-[-40px] h-[35%]'}>
                        <Image className={''} src="src/assets/ConnectWalletClient/leftBitcoin.svg" />
                    </div>
                    <div className={'text-6xl font-bold self-center'}>Connect Wallet</div>
                </div>
                <div className={'flex flex-col w-full max-w-[548px] h-[224px] bg-[#B73C88] rounded-[14px]'}>
                    {/* а хули так ????*/}
                    <div className={'flex w-full'}>
                        <div className={'ml-auto'}>
                            <Image className={'mt-[-40px] mr-[-16px]'} src="src/assets/ConnectWalletClient/heartMessage.svg" />
                        </div>
                    </div>
                    <div className={'text-6xl font-bold self-start ml-10'}>Profile<br /> completion</div>
                </div>
            </div>
            <div className={'flex pt-4 gap-6'}>
                <div className={'flex w-6/12'}>
                    The process begins with the client connecting their wallet to the 0xDonation platform, ensuring a secure and reliable connection

                </div>
                <div className={'flex w-6/12'}>
                    The client fills out their profile, including a personal description, links to other resources, and settings for access to unique content. This allows for the creation of a personalized and engaging experience for supporters
                </div>
            </div >
            <div id={'blast'} className={'mt-64 pt-10 text-9xl font-bold self-center bg-gradient-to-b from-[#D83BD9] to-[#E0583E] bg-clip-text text-transparent blur-sm'}>MODES</div>
            <div className={'mt-[-80px] text-9xl font-bold self-center z-20'}>0xDonation</div>
            <div className={'mt-[40px] flex gap-6'}>
                <div className={'flex flex-col w-full max-w-[548px] h-[532px]'}>
                    <Image src="src/assets/DonationModes/laptop.svg" />
                </div>
                <div className={'flex flex-col w-full max-w-[548px] h-[532px] justify-between'}>
                    <div className={'bg-gradient-to-b from-[#D83BD9] to-[#E0583E] bg-clip-text text-transparent text-2xl font-bold'}>
                        Blast variant
                    </div>
                    <div className={'text-[41px] text-left font-extrabold tracking-wide leading-[49px]'}>
                        An additional level of interaction where a stake is placed on the 0xDonation smart contract for a pre-determined period. Blast returns will accrue to the client, while the principal funds remain with the supporter
                    </div>
                </div>
            </div>
            <div id={'classic'} className={'mt-[40px] flex gap-6'}>
                <div className={'flex flex-col w-full max-w-[548px] h-[532px]'}>
                    <div className={'bg-gradient-to-b from-[#D83BD9] to-[#E0583E] bg-clip-text text-transparent text-2xl font-bold'}>
                        Classic mode
                    </div>
                    <div className={'text-[41px] text-left font-extrabold tracking-wide leading-[49px] pt-10'}>
                        The supporter makes a classic donation without additional conditions
                    </div>
                </div>
                <div className={'flex flex-col w-full max-w-[548px] h-[532px]'}>
                    <Image src="src/assets/DonationModes/phone.svg" />
                </div>
            </div>
            <div id={'community'} className={'mt-64 pt-40 text-[56px] leading-[64px] font-bold self-center '}>Our</div>
            <div className={'text-[56px] leading-[64px] font-bold self-center bg-gradient-to-b from-[#D83BD9] to-[#E0583E] bg-clip-text text-transparent'}>community</div>
            <div className={'mt-4 max-w-[500px] text-[14px] leading-[22px] font-light self-center text-center'}>Our people value opportunities to monetise content and develop their creativity. Interaction within the community facilitates the exchange of ideas, support for each other and the overall development of a creative atmosphere.</div>
            <div className={'mt-64 pt-40 max-w-[693px] text-[56px] leading-[64px] font-bold self-center '}>TRY THE CRYPTO WALLET OF THE FUTURE, TODAY.</div>
            <div className={'self-center flex'}>
                <div className={PRIMARY_BUTTON_CN + ' flex items-center	 justify-center rounded-xl h-[56px] w-[292px]'}>
                    <div className={'text-2xl font-black italic leading-[40px] tracking-tighter cursor-pointer'} onClick={openEmailModal}>GET STARTED</div>
                </div>
            </div>
        </div >
    );
}