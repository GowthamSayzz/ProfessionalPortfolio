import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { TimelineContent } from "@mui/lab";
import ProjectsCard from "../Cards/ProjectsCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0px;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-widt: 768px) {
    font-size: 16px;
  }
`;

const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Projects = () => {
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc></Desc>
                <TimeLineSection>
                    <Timeline>
                        {projects.map((project, index) => (
                            <TimelineItem>
                                <TimelineContent sx={{ py: "12px", px: 2 }}>
                                    <ProjectsCard projects={project} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== projects.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    );
};

export default Projects;
