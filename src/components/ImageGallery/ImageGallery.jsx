import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({collection}) => {
    
    return (
        <ul className="gallery">
            <ImageGalleryItem collection={ collection} />
        </ul>
    )
}