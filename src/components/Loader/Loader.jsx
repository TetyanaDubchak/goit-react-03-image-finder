import { Circles } from 'react-loader-spinner';

import css from "./Loader.module.css";

<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

export const Loader = () => {
    return (
        <div className={css.wrapper}>
            <Circles/>
        </div>
    )
}