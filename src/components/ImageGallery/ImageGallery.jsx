import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ModalElement } from "components/Modal/Modal";
import { Component } from "react";
import css from "./ImageGallery.module.css";

export class ImageGallery extends Component {
    state = {
        selectedItem: null,
    }

    openModal = (item) => {
        if (this.state.selectedItem) {
            return
        }
        this.setState({ selectedItem: item });
    } 
    closeModal = () => this.setState({ selectedItem: false });

    render() {
        return (<>
            <ul className={css.list}>
                    <ImageGalleryItem collection={this.props.collection} selectedItem={this.state.selectedItem} openModal={this.openModal} />
            </ul>
            {this.state.selectedItem && <ModalElement item={this.state.selectedItem} isModalOpen={Boolean(this.state.selectedItem)} onClose={this.closeModal}/>}
        </>

    )
    }
    
}