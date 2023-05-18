import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  Logo,
  LogoDot,
  LogoLink,
  LogoText,
  LogoWrapper,
  SearchForInput,
  SearchForm,
  SearchFormButton,
} from './Searchbar.styled';
import pixelLogo from '../../images/pixel.png';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  searchInputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input.trim());
    this.setState({
      input: '',
    });
  };

  render() {
    const { input } = this.state;
    return (
      <>
        <Header>
          <LogoWrapper>
            <LogoLink href="">
              <Logo src={pixelLogo} alt="pixel logo" />
              <LogoText>
                <LogoDot>.</LogoDot>picsEl
              </LogoText>
            </LogoLink>
          </LogoWrapper>

          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <ImSearch size={24} color="red" />
            </SearchFormButton>

            <SearchForInput
              onChange={this.searchInputHandler}
              type="text"
              name="input"
              value={input}
              autoComplete="off"
              placeholder="Search images and photos"
            />
          </SearchForm>
        </Header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
