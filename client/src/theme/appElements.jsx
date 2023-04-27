import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: min(1120px, 80%);
  margin-inline: auto;
`;

export const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 56px repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Button = styled.button`
  width: 100%;

  user-select: none;
  cursor: pointer;

  display: inline-block;
  padding: 1.2rem 1.6rem;
  text-align: center;
  border-radius: 2px;

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.6rem;
  text-decoration: none;

  color: var(--white);
  background-color: var(--accent);
  /* TODO: Secondary, Positive, Notice, Destructive */
  /* background-color: ${(props) => props.secondary && '...'} */
`;

export const SideBar = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  flex-direction: column;
  padding-block: 32px;
  row-gap: 16px;

  span {
    display: flex;
    flex-direction: row;
    column-gap: 5px;
  }
`;

export const NavPage = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100%;

  padding: 0px 32px;
  gap: 32px;
`;

export const Main = styled.div`
  grid-area: 2 / 2 / 4 / 3;
  margin-left: 72px;
  padding-block: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Heading1 = styled.h1`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.6rem;

  color: var(--black);
`;

export const Heading2 = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  line-height: 3rem;
  color: var(--accent);
`;

export const Caption = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;

  color: var(--black);
`;

export const Small = styled.small`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;

  color: var(--black);
`;

export const Link = styled(NavLink)`
  font-size: inherit;
  color: var(--accent);

  &:hover {
    text-decoration: underline;
  }
`;

export const Select = styled.select`
  background-color: var(--black-quaternary);
  border-radius: 8px;
  padding-inline: 10px;
  padding-block: 4px;
`;

export const DivTop = styled.div`
  border-bottom: 1px solid var(--black-quaternary);
  position: absolute;
  width: 100%;
  height: 56px;
  z-index: -1;
`;

export const LinkIcon = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  column-gap: 6px;
  color: var(--black);

  &:hover {
    text-decoration: underline;
    color: var(--accent);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50vh;
  font-size: 32px;

  svg {
    color: var(--accent);
    width: 80px;
    height: 80px;
  }
`;
