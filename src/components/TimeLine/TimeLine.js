import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { ImageSection, Img } from "./TimeLineStyles.js";

const Timeline = () => {
    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <ImageSection>
                <SectionText style={{ textAlign: "justify", maxWidth: "650px" }}>
                    I am very passionate about learning new technologies and contribute to open source projects. Apart from that I am also interested in web scrapping, browser automation etc. I do all types of PSD to HTML, Xd to React, JAMSTACK
                    application, working with Serverless function, building REST or GraphQL API in
                    Node js, containerizing application with Docker etc. Currently I am pursuing my undergraduate degree in Informartion Technology from GCELT.
                </SectionText>
                <Img src="/images/profile.png" />
            </ImageSection>
            <SectionDivider />
        </Section>
    );
};

export default Timeline;
