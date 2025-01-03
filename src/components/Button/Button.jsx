import css from "./Button.module.css";
export const Button = ({loadMore}) => {
    
    return (
        <button className={css.button} type="button" onClick={loadMore}>Load more</button>
    )
}