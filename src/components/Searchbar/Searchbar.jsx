import { Component } from 'react';
import css from './Searchbar.module.css';

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
        <header className={css.Searchbar}>
          <form onSubmit={this.handleSubmit} className={css.SearchForm}>
            <button type="submit" className={css.SearchFormButton}>
              <span className="button-label">Search</span>
            </button>

            <input
              onChange={this.searchInputHandler}
              className={css.SearchForInput}
              type="text"
              name="input"
              value={input}
              autoComplete="off"
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
