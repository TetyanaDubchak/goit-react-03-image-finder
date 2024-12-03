import React, { Component } from "react";
import { FaSearch } from "react-icons/fa"; 

import css from "./Searchbar.module.css";

export class Searchbar extends Component{

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.props.handleSubmit}> 
                    <button type="submit" className={css.button}>
                        <FaSearch size={ 26}/>
                    </button>

                    <input
                    name='search'
                    onChange={this.props.handleChange}
                    className={css.input}
                    type="text"
                    value={this.props.changeValue}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
                </header>
        )
    }
}