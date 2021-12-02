import styled from "styled-components";
import { styled as custom } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const CardContainer = styled.div`
  border-radius: 5px;
  width: 15rem;
  margin: 0.3rem;
  background: transparent;
  height: 320px;
  padding: 1rem;
  overflow: hidden;
  position: relative;
  perspective: 1000px;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
    padding: 0.2rem;
  }
  @media (max-width: 550px) {
    width: 95%;
    height: 250px;
    padding: 0rem;
  }
`;

export const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => props.hover && "rotateY(-180deg)"};
`;

export const FaceCard = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--color-bg);
  box-shadow: 0px 0px 13px 0px var(--color-blog);
  border-radius: 8px;

  overflow: hidden;
  @media (max-width: 768px) {
    border: 0.5px solid var(--color-text);
  }
`;

export const BackCard = styled.div`
  background: var(--gradient-bg);
  transform: rotateY(180deg);
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 0.5px solid var(--color-text);
  box-shadow: 0px 0px 13px 0px var(--color-blog);
`;

export const Presentation = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LikeZone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #fff;
`;

export const RemoveBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  z-index: 10;
  text-align: center;
  background: rgba(255, 255, 255, 0);
  border-radius: 50px;
  display: flex;
  justify-items: center;
  justify-content: center;
`;

export const LikesBtn = styled.div``;

export const LikesMeters = styled.progress`
  background-color: rgb(255,255,255);
  height: 3px;
  width: 100%;
  border-radius: 50px;
 margin-top:1rem;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease;
  ::-webkit-progress-bar {
    background-color:#eee;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
 
  ::-webkit-progress-value{
    background-color: rgb(26, 144, 255);
    transition: all 0.4s ease;
    border-radius: 100px;
  }
  }
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: contain;
`;
