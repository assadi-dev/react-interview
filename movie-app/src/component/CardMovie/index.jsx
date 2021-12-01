import React, { useState } from "react";
import styled from "styled-components";
import {
  Movie,
  Clear,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { delete_movie, get_movieCategory } from "../../redux/Action";

const CardContainer = styled.div`
  border-radius: 5px;
  width: 13rem;
  margin: 0.3rem;
  background: transparent;
  height: 320px;
  color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  position: relative;
  perspective: 1000px;
`;

const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => props.hover && "rotateY(-180deg)"};
`;

const FaceCard = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BackCard = styled.div`
  background-color: rgba(36, 36, 36, 1);
  color: white;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(100, 36, 36, 0.5);
`;

const Presentation = styled.div`
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

const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

const LikeZone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.8rem;
`;

const RemoveBtn = styled.div`
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

const LikesBtn = styled.span``;

const LikesMeters = styled.div`
  background: #fff;
  height: 3px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease;
  :before {
    background: blue;
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.4s ease;
    content: "&";
  }
`;

const MovieCard = ({ id, title, category, ...props }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handlExit = () => {
    setHover(false);
  };

  const deleteMovie = (id) => {
    dispatch(delete_movie(id));
  };

  return (
    <CardContainer
      {...props}
      onMouseEnter={handleHover}
      onMouseLeave={handlExit}
    >
      <InnerCard hover={hover}>
        <FaceCard>
          <Movie sx={{ width: "100%", fontSize: "300px" }} />
          <Overlay></Overlay>
        </FaceCard>
        <BackCard>
          <RemoveBtn>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => deleteMovie(id)}
            >
              <DeleteOutlineOutlined />
            </IconButton>
          </RemoveBtn>
          <Presentation>
            <Title>{title}</Title>
            <p>{category}</p>

            <LikeZone>
              <LikesBtn>
                <IconButton aria-label="delete" color="success">
                  <ThumbUpAltOutlined />
                </IconButton>
                14 Likes
              </LikesBtn>
              <LikesBtn>
                <IconButton aria-label="delete" color="error">
                  <ThumbDownAltOutlined />
                </IconButton>
                14 DisLikes
              </LikesBtn>
            </LikeZone>
            <LikesMeters></LikesMeters>
          </Presentation>
        </BackCard>
      </InnerCard>
    </CardContainer>
  );
};

export default MovieCard;
