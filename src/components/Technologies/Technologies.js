import React from "react";
import { DiFirebase, DiReact, DiZend, DiAws } from "react-icons/di";
import { SiAzuredevops } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range a technologies in the web development world. From Back-end To
            Front-end
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <DiReact size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experiece with <br />
                        React.js, Next.js Tailwind CSS
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiFirebase size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node and Databases (SQL, NoSQL)
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiZend size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        tools like Figma
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <SiAzuredevops size="2.3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>DevOps</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Docker, Docker Swarm (Orchestration tool), Github Actions, CI/CD Pipeline
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
        <SectionDivider colorAlt />
    </Section>
);

export default Technologies;
