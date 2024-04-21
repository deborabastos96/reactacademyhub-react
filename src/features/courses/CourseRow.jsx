import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ListRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  /* padding: 1rem; */
  margin-top: 2rem;
  /* border: solid 1px var(--color-grey-300); */
  border-radius: 5px;
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.5) translateX(-7px); */
`;

const Course = styled(NavLink)`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  transition: all 0.3s;

  &:hover {
    color: var(--color-grey-900);
  }
`;

function CourseRow({ course }) {
  const { fullName, visibility, image } = course;

  if (!visibility) return null;

  return (
    <ListRow role="row">
      <Img src={image} />
      <Course to="/dashboard">{fullName}</Course>
    </ListRow>
  );
}

export default CourseRow;
