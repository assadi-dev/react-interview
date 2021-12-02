import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 5px;
  width: 13rem;
  margin: 0.3rem;
  background: transparent;
  height: 320px;
  color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  position: relative;
  perspective: 1000px;
  @media (max-width: 768px) {
    width: 100%;
    height: 240px;
  }
  @media (max-width: 550px) {
    width: 90%;
    height: 280px;
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
  background: rgba(100, 36, 36, 0.5);
`;

export const BackCard = styled.div`
  background-color: rgba(36, 36, 36, 1);
  color: white;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
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
  color: #fff;
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

export const LikesMeters = styled.div`
  background: #fff;
  height: 3px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease;
  :before {
    background: blue;
    width: ${(props) => props.likesPourcent}%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.4s ease;
    content: "&";
  }
`;
