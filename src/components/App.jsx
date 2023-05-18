import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImages } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: '',
    page: 1,
    totalHits: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, totalHits } = this.state;

    if (query === '') {
      toast.warn('Please enter your search request');
      return;
    }

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const { hits, totalHits } = await getImages(query, page);
        if (hits.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        if (hits.length > 0 && page === 1) {
          toast.success(`Hooray! We found ${totalHits} images!`);
        }

        const images = hits.map(({ id, largeImageURL, webformatURL, tags }) => {
          return { id, largeImageURL, webformatURL, tags };
        });

        return this.setState(prevState => ({
          images: [...prevState.images, ...images],
          totalHits: totalHits,
        }));
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (totalHits !== null && totalHits <= page * 12) {
      toast.info(`We're sorry, but you've reached the end of search results.`);
    }
  }

  handleSearch = query => {
    this.setState({ query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, page, totalHits } = this.state;
    const showButton = images.length > 0 && totalHits > page * 12;

    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && <Loader />}
        {images?.length > 0 && <ImageGallery images={images} />}
        {showButton && <Button onClick={this.handleLoadMore} />}
        <ToastContainer autoClose={1000} />
      </>
    );
  }
}
