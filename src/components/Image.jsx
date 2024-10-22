import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  withEffect: PropTypes.bool,
};

const StyledImage = styled.div`
  & img {
    width: 100%;
    height: auto;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover; /* Maintain aspect ratio */
  }
  ${(props) =>
    props.$withEffect &&
    css`
      &:hover img {
        transform: scale(1.3) translateX(1.2rem);
        transition: transform 0.7s ease;
      }
    `}
`;

const BASE_IMAGE_SRC = "http://image.tmdb.org/t/p/w500";
function Image({ src, alt, withEffect = false }) {
  return (
    <StyledImage $withEffect={withEffect}>
      <img loading="lazy" src={`${BASE_IMAGE_SRC}${src}`} alt={alt} />
    </StyledImage>
  );
}

export default Image;
