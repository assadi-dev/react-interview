import React, { useEffect, useState } from "react";
import {
  Movie,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  ThumbDownAlt,
  ThumbDownAltOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  delete_movie,
  update_dislikes,
  update_likes,
} from "../../redux/Action";
import { getLikesPourcent } from "../../utils/utils";
import {
  BackCard,
  CardContainer,
  FaceCard,
  InnerCard,
  LikesBtn,
  LikesMeters,
  LikeZone,
  Presentation,
  RemoveBtn,
  Title,
} from "./styled";

const MovieCard = ({
  id,
  title,
  category,
  likes,
  dislikes,
  filter,
  ...props
}) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [likesPourcent, setLikesPourcents] = useState(0);
  const [btnState, setBtnState] = useState({
    likes: false,
    dislikes: false,
    value: 0,
  });

  const handleHover = () => {
    setHover(true);
  };

  const handlExit = () => {
    setHover(false);
  };

  const deleteMovie = (id) => {
    dispatch(delete_movie(id));
  };

  const handleLike = () => {
    if (!btnState.likes && !btnState.dislikes) {
      setBtnState({ ...btnState, likes: true });
      dispatch(update_likes({ id: id, likes: likes + 1 }));
    } else if (btnState.likes && !btnState.dislikes) {
      setBtnState({ ...btnState, likes: false });
      dispatch(update_likes({ id: id, likes: likes - 1 }));
    } else if (!btnState.likes && btnState.dislikes) {
      setBtnState({ ...btnState, likes: true, dislikes: false });
      dispatch(update_likes({ id: id, likes: likes + 1 }));
      dispatch(update_dislikes({ id: id, dislikes: dislikes - 1 }));
    }
  };

  const handleDisLike = () => {
    if (!btnState.dislikes && !btnState.likes) {
      setBtnState({ ...btnState, dislikes: true });
      dispatch(update_dislikes({ id: id, dislikes: dislikes + 1 }));
    } else if (btnState.dislikes && !btnState.likes) {
      setBtnState({ ...btnState, dislikes: false });
      dispatch(update_dislikes({ id: id, dislikes: dislikes - 1 }));
    } else if (btnState.likes && !btnState.dislikes) {
      setBtnState({ ...btnState, likes: false, dislikes: true });
      dispatch(update_likes({ id: id, likes: likes - 1 }));
      dispatch(update_dislikes({ id: id, dislikes: dislikes + 1 }));
    }
  };

  useEffect(() => {
    let pourcent = getLikesPourcent(likes, dislikes);
    setLikesPourcents(pourcent);
  }, [likes, dislikes, btnState.likes, btnState.dislikes]);

  return (
    <CardContainer
      {...props}
      onMouseEnter={handleHover}
      onMouseLeave={handlExit}
    >
      <InnerCard hover={hover}>
        <FaceCard>
          <Movie sx={{ width: "100%", fontSize: "300px" }} />
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
              <LikesBtn onClick={handleLike}>
                <IconButton aria-label="Like" color="success">
                  {btnState.likes ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
                </IconButton>
                {likes}
              </LikesBtn>
              <LikesBtn onClick={handleDisLike}>
                <IconButton aria-label="Dislike" color="error">
                  {btnState.dislikes ? (
                    <ThumbDownAlt />
                  ) : (
                    <ThumbDownAltOutlined />
                  )}
                </IconButton>
                {dislikes}
              </LikesBtn>
            </LikeZone>
            <LikesMeters likesPourcent={likesPourcent}></LikesMeters>
          </Presentation>
        </BackCard>
      </InnerCard>
    </CardContainer>
  );
};

export default MovieCard;
