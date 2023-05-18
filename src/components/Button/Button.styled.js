import styled from 'styled-components';

export const LoadMore = styled.button`
 display: flex;
   min-width: 180px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  padding: 8px 16px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  justify-content: center;
  align-items: center;
   text-align: center;

  gap: 10px;

  background-color: tomato;
  color: #ffffff;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 8px 12px 0px rgba(240, 57, 57, 0.425),
      0px 8px 8px 0px rgba(148, 0, 0, 0.358),
      0px 12px 8px -8px rgba(145, 40, 40, 0.29);
`;
