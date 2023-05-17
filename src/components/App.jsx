import { Component } from 'react';
import { getImages } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
    loading: false,
    error: '',
    page: 1,
    totalPages: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      try {
        this.setState({ loading: true });
        const { hits, totalHits } = await getImages(query, page);

        const images = hits.map(({ id, largeImageURL, webformatURL, tags }) => {
          return { id, largeImageURL, webformatURL, tags };
        });

        return this.setState({
          images: images,
          totalPages: Math.ceil(totalHits / 12),
        });
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSearch = query => {
    this.setState({ query });
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {images && <ImageGallery images={images} />}
      </>
    );
  }
}
