import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

import { fetchImages } from "../api";

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    value: ''

  }

  receiveImages = async () => {
    try {
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


   handleOnSubmit= async(e) => {
     e.preventDefault();
     this.setState({ searchValue: e.target.search.value })
     
  }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }))
  }


  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar handleSubmit={this.handleOnSubmit} handleChange={this.handleChange} changeValue={ this.state.value} />
        <ImageGallery collection={ this.state.images}/>
        <Button loadMore={ this.handleLoadMore}/>
      </div>
    );
  }
};
