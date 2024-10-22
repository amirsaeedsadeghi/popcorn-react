import styled from "styled-components";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import PropTypes from "prop-types";

const FillStar = styled(HiStar)`
  color: var(--gold-color);
`;
const EmptyStar = styled(HiOutlineStar)`
  color: var(--gold-color);
`;

const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  row-gap: 0.25rem;
  margin-top: 1.5rem;
`;
const Star = styled.div`
  display: flex;
  flex-wrap: nowrap;
  column-gap: 2px;
`;

const RateInfo = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

Rating.propTypes = {
  maxStar: PropTypes.number,
  value: PropTypes.number,
  totalCount: PropTypes.numbre,
};

function Rating({ maxStar, value, totalCount }) {
  return (
    <StyledRating>
      <Star>
        {Array.from({ length: value }, (_, index) => (
          <FillStar key={index} />
        ))}
        {Array.from({ length: maxStar - value }, (_, index) => (
          <EmptyStar key={index} />
        ))}
      </Star>
      <RateInfo>
        {value} ({totalCount} Rating)
      </RateInfo>
    </StyledRating>
  );
}

export default Rating;
