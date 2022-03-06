import React from "react";
import { LinkItem } from "../Footer/FooterStyles";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br />
                    My Personal Portfolio
                </SectionTitle>
                <SectionText style={{ textAlign: "justify" }}>
                    Hi! I am Aftab Uddin Ahmed. I build web application using Javascript ecosystem
                    (MERN). Along with that I have experiences in building web application from
                    scratch to production ready.
                </SectionText>
                <Button>
                    <a href="/#footer" style={{ color: "inherit" }}>
                        Let's Connect
                    </a>
                </Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;
