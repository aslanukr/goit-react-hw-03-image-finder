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
    totalPages: 1,
    totalHits: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, totalPages } = this.state;

    if (query === '') {
      if (prevState.images.length > 0) {
        this.setState({ images: [] });
      }
      toast.warn('Please enter your search request');
      return;
    }

    if (prevState.query !== query) {
      try {
        this.setState({ isLoading: true, images: [], page: 1 });
        const { hits, totalHits } = await getImages(query, page);
        if (hits.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        if (hits.length > 0) {
          toast.success(`Hooray! We found ${totalHits} images!`);
        }
        const images = hits.map(({ id, largeImageURL, webformatURL, tags }) => {
          return { id, largeImageURL, webformatURL, tags };
        });

        return this.setState({
          images: images,
          totalPages: Math.ceil(totalHits / 12),
          totalHits: totalHits,
        });
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const { hits } = await getImages(query, page);

        const images = hits.map(({ id, largeImageURL, webformatURL, tags }) => {
          return { id, largeImageURL, webformatURL, tags };
        });

        if (totalPages <= page) {
          toast.info(
            `We're sorry, but you've reached the end of search results.`
          );
        }

        return this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      } catch (error) {
        this.setState({ error: error.message });
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSearch = query => {
    this.setState({ query });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, totalPages, page, totalHits } = this.state;
    const showButton = images.length > 0 && totalPages > page && totalHits > 12;

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
