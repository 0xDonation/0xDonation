import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react"

import BridgeLogo from '../../assets/logo.svg';

import styles from './NavBar.module.scss';
import { PRIMARY_BUTTON_CN } from "../styleClassNames";
import { useContext } from "react";
import { AppContext } from "../../context";

export const NavBar = () => {
    const { openEmailModal } = useContext(AppContext);

    return (
        <Navbar maxWidth="full" className={styles.background}>
            <NavbarBrand className="gap-2">
                <img src={BridgeLogo} alt="bridge logo" className="h-7" />
                <p className="font-bold text-3xl">0xDonation</p>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem>
                    <a color="foreground" href="#supporter">
                        For the supporter
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a color="foreground" href="#client">
                        For the client
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a color="foreground" href="#community">
                        Community
                    </a>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Button className={PRIMARY_BUTTON_CN} onClick={openEmailModal}>
                        Subscribe for updates
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}