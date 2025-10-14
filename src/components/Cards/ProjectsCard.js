import React from "react";
import styled from "styled-components";

const Document = styled.div`
display: none;
height: 70px;
width: fit-content;
background-color: #000;
border-radius: 10px;

&:hover {
cursor: pointer;
opacity?: 0.8;
}
`;

const Card = styled.div`
width: 650px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
padding: 12px 16px;
justify-content: space-between;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 12px;
transition: all 0.3s ease-in-out;

&:hover {
box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
transform: translateY(-5px);
}

&: hover${Document}{
display: flex;
}

@media (max-width: 768px)
{
padding: 10px;
gap: 8px;
width: 300px;
}

border: 0.1px solid #306ee8;
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;

const Top = styled.div`
display: flex;
gap: 12px;
width: 100%;
`;

const Logo = styled.img`
height: 50px;
bacjground-color: #000;
border-radius: 10px;
margin-top: 4px;

@media (max-width: 768px){
height: 40px;
}
`;


const Body = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

const Role = styled.div`
font-size: 18px;
font-weight: 600;
color: ${({ theme }) => theme.text_primary + 99};

@media (max-width: 768px){
font-size: 14px;
}
`;

const Company = styled.div`
font-size: 14px;
font-weight: 500;
color: ${({ theme }) => theme.text_primary + 99};

@media (max-width: 768px){
font-size: 12px;
}
`;

const Duration = styled.div`
font-size: 12px;
font-weight: 400px;
color: ${({ theme }) => theme.text_secondary + 80};

@media (max-width: 768px){
font-size: 10px;
}
`;


const Description = styled.div`
width: 100%
font-size: 15px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 99};
margin-bottom: 10px;

@media (max-width: 768px)
{
font-size 12px;
}
`;

const Skills = styled.div`
width: 100%;
display: flex;
gap: 12px;
margin-top: 10px;
`;

const ItemWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`;

const Skill = styled.div`
font-size: 15px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 99};

@media (max-width: 768px)
{
font-size: 12px;
}
`;

const DemoButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 200px;
  text-align: center;
  padding: 16px 0; /* Default padding for larger screens */
  color: ${({ theme }) => theme.white};
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px; /* Default font size for larger screens */
  font-weight: 600;
  margin-right: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
  }

  /* Apply responsive styles for smaller screens (max-width: 640px) */
  @media (max-width: 640px) {
    padding: 12px 0;  /* Reduced padding for small screens */
    font-size: 18px;  /* Smaller font size for small screens */
  }

  /* Apply styles for medium screens (between 640px and 1024px) */
  @media (max-width: 1024px) {
    padding: 14px 0;  /* Adjusted padding for medium screens */
    font-size: 19px;  /* Adjusted font size for medium screens */
  }
`;

const ProjectsCard = ({ projects }) => {
    return (
        <Card>
            <Top>
                <Logo src={projects?.image} />
                <Body>
                    <Role>{projects?.title}</Role>
                    <Company>{projects?.description}</Company>
                    <Duration>{projects?.date}</Duration>
                </Body>
            </Top>
            <Description>{projects?.desc}
                {projects?.tags && <>
                    <br />
                    <Skills>
                        <b>Skills:</b>
                        <ItemWrapper>
                            {projects?.tags.map((tags) => (
                                <Skill>• {tags}</Skill>
                            ))}
                        </ItemWrapper>
                    </Skills>
                </>}
            </Description>
            {projects?.webapp && (
                <DemoButton href={projects.webapp} target="_blank" rel="noopener noreferrer">Live Demo</DemoButton>
            )}
        </Card>
    );
};

export default ProjectsCard;