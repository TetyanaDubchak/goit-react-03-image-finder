import React, { Component } from "react";

export class Searchbar extends Component{

    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.props.handleSubmit}> 
                    <button type="submit" className="button">
                    <span className="button-label">Search</span>
                    </button>

                    <input
                    name='search'
                    onChange={this.props.handleChange}
                    className="input"
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