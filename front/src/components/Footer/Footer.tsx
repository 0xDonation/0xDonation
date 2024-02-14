import { Button, Divider, Link } from "@nextui-org/react"
import { PRIMARY_BUTTON_CN } from "../styleClassNames"

import BridgeLogo from '../../assets/logo.svg';
import { useContext } from "react";
import { AppContext } from "../../context";


const FooterMenuClassName = 'flex w-4/12 flex-col gap-8';
const FooterMenuHeaderClassName = 'font-bold text-[20px] leading-[28px]';
const FooterMenuLinkClassName = 'text-white font-light';


export const Footer = () => {
    const { openEmailModal } = useContext(AppContext);

    return <div className={'h-[268px] w-full max-w-[1440px] bg-black mt-[-268px] justify-self-center'}>
        <div className={'flex p-16 gap-6 h-full'}>
            <div className={'flex flex-col w-4/12 pl-20 gap-8 align-baseline'}>
                <div className={'flex gap-4 items-center'}>
                    <img src={BridgeLogo} alt="bridge logo" className="h-9" />
                    <p className="text-white font-light text-3xl">0xDonation</p>
                </div>
                <div className={'flex gap-4 items-center'}>
                    <Button className={PRIMARY_BUTTON_CN + ' text-white w-[129px]'} onClick={openEmailModal}>
                        Register
                    </Button>
                </div>
            </div>
            <div className={'flex w-1/12 justify-center'}>
                <Divider className={'bg-gradient-to-b from-[#DB479C] to-[#DA42B5]'} orientation={'vertical'} />
            </div>
            <div className={'flex w-7/12 text-white'}>
                <div className={FooterMenuClassName}>
                    <div className={FooterMenuHeaderClassName}>
                        How it works
                    </div>
                    <a href="#client" className={FooterMenuLinkClassName}>For the client</a>
                    <a href="#supporter" className={FooterMenuLinkClassName}>For the supporter</a>
                </div>
                <div className={FooterMenuClassName}>
                    <div className={FooterMenuHeaderClassName}>
                        Our Community
                    </div>
                    <a href="#community" className={FooterMenuLinkClassName}>About us</a>
                </div>

                <div className={FooterMenuClassName}>
                    <div className={FooterMenuHeaderClassName}>
                        0xDonation Modes
                    </div>
                    <a href="#classic" className={FooterMenuLinkClassName}>Classic</a>
                    <a href="#blast" className={FooterMenuLinkClassName}>Blast</a>

                </div>

            </div>
        </div >
    </div>
}