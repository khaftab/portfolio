import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { ImageSection, Img } from "./TimeLineStyles.js";

const Timeline = () => {
    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <ImageSection>
                <SectionText style={{ textAlign: "justify", maxWidth: "650px" }}>
                    I am very passionate about building production ready things. I always try to
                    build things in a more simplified, scalable and maintainable way. So that it can
                    be developed further. I can do all types of PSD to HTML, Xd to React, JAMSTACK
                    application, working with Serverless function, building REST or GraphQL API in
                    node js etc. Currently I am pursuing my undergraduate degree in Informartion
                    Technology from GCELT.
                </SectionText>
                <Img src="/images/profile.png" />
            </ImageSection>
            <SectionDivider />
        </Section>
    );
};

export default Timeline;
