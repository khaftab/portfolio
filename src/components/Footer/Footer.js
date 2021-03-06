import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper id="footer">
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Whatsapp</LinkTitle>
                    <LinkItem href="tel:+919091094411">+91 9091094411</LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:contact.khaftab@gmail.com">
                        contact.khaftab@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>"The best error message is the one that never shows up." - Thomas Fuchs</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/khaftab" target="_blank">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons
                        href="https://www.linkedin.com/in/kh-aftab-uddin-ahmed-b7649722a"
                        target="_blank"
                    >
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons
                        href="https://twitter.com/kh_aftabuddin"
                        target="_blank"
                    >
                        <AiFillTwitterCircle size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
