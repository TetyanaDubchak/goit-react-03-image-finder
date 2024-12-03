import css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({collection, openModal}) =>{

    return (<>
                {collection.map((item) => {
                    return <li key={item.id} className={css.item}>
                    <img className={css.picture} src={item.webformatURL} alt={item.tags} onClick={()=> openModal(item)} />
                </li>
    })}
    </>)
    
}