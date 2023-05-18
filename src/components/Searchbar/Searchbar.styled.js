import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: linear-gradient(rgb(255, 114, 38) 0%, rgb(209, 72, 26) 100%);
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 5px 5px 5px rgba(138, 138, 138, 0.6);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchForInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &:: {
    font: inherit;
    font-size: 18px;
  }
`;

// Logo styles

export const LogoWrapper = styled.div`
 margin-left: 20px;
 
  @media screen and (min-width: 468px) {
       display: flex;
    align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 100%;
`;

export const LogoLink = styled.a`
  display: flex;
`;

export const LogoText = styled.p`
  display: none;

  @media screen and (min-width: 468px) {
    display: block;
  }

position: relative;
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;

  &::after {
    position: absolute;
    top: 41px;
    left: 19px;
    content: 'owered by Pixabay.com';
    font-size: 8px;
`;

export const LogoDot = styled.span`
  color: rgb(104, 0, 0);
`;
