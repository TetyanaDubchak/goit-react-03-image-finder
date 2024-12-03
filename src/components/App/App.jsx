import React, { Component } from "react";
import { Notify } from 'notiflix';

import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";

import { fetchImages } from "../../api";

import css from './App.module.css'
import { Loader } from "components/Loader/Loader";

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    value: '',
    isLoading: false,
  }

  receiveImages = async () => {
    try {
      this.setState({isLoading: true})
      const data = await fetchImages(this.state.searchValue, this.state.page);

      this.setState((prevState) => ({
        images: [
        ...prevState.images,
        ...data.data.hits.filter(
            (newImage) =>
                !prevState.images.some((existingImage) => existingImage.id === newImage.id)
        ),
    ],
}));

    } catch (error) {
      console.log(error.message);
      Notify.failure('Sorry, something went wrong')
    } finally {
      this.setState({isLoading: false})
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchValue:prevSearchValue, page: prevPage } = prevState;
    const { searchValue:currentSearchValue, page: currentPage } = this.state;
   
    if (prevSearchValue !== currentSearchValue) {
      this.setState({ images: [], page: 1})
    }

    if (prevSearchValue !== currentSearchValue || prevPage!==currentPage) {
      this.receiveImages()
    }
  }


   handleOnSubmit= (e) => {
     e.preventDefault();

     if (e.target.search.value.trim() === '') {
      Notify.warning('Please, enter something what you want to see')
      return;
    }
     this.setState({ searchValue: e.target.search.value })
     this.setState({ value: '' })
  }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }))
  }


  render() {
    return (
      <div className={css.wrapper}>
        <Searchbar handleSubmit={this.handleOnSubmit} handleChange={this.handleChange} changeValue={this.state.value} />
        {this.state.isLoading && <Loader/>}
        <ImageGallery collection={ this.state.images}/>
        { this.state.images.length>0 && <Button loadMore={ this.handleLoadMore}/>}
      </div>
    );
  }
};
