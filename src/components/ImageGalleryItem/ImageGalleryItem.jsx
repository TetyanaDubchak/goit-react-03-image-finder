import { Modal } from "components/Modal/Modal"

export const ImageGalleryItem = ({collection}) => {
    
    return (<>
    {collection.map((item) => {
        return <li key={item.id} className="gallery-item">
            <img src={item.webformatURL} alt={item.tags} />
            <Modal item={item} />
        </li>
    })}
    </>  
    )
}