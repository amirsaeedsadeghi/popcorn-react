import styled from "styled-components";
import Image from "../../components/Image";
import PropTypes from "prop-types";
import Rating from "../../components/Rating";

const StyledMovieCard = styled.div`
  height: 400px;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
`;

const CardFront = styled(CardFace)`
  background-color: var(--grey-light-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: var(--text-color);
  & p,
  h3 {
    text-align: center;
  }
  & p {
    padding: 0 0.5rem 2rem;
  }
  & h3 {
    padding: 0.5rem;
  }
`;

const CardBack = styled(CardFace)`
  background-color: var(--primary-light-color);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: rotateY(180deg);
  text-align: center;

  overflow-y: auto;
  & p {
    font-size: 0.75rem;
    padding: 20px;
    font-style: italic;
  }
`;
MovieCard.propTypes = {
  movie: PropTypes.object,
};

function MovieCard({ movie }) {
  const {
    poster_path: frontSrc,
    title,
    overview: description,
    backdrop_path: backSrc,
    vote_average: movieRate,
    vote_count: totalCount,
  } = movie;
  return (
    <StyledMovieCard>
      <CardInner>
        <CardFront>
          <Image src={frontSrc} alt={title} />
          <h3>{title}</h3>
        </CardFront>
        <CardBack>
          <Image src={backSrc} alt={title} withEffect={true} />
          <Rating
            maxStar={10}
            value={Math.round(movieRate)}
            totalCount={totalCount}
          />
          <p>{description}</p>
        </CardBack>
      </CardInner>
    </StyledMovieCard>
  );
}

export default MovieCard;
