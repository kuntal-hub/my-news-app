import React, { Component } from 'react'
import './Newsitem.css';

export default class Newsitem extends Component {


    render() {
        let { urlToImage, url, title, description, publishedAt, author, source } = this.props
        let date = new Date(publishedAt);

        return (
            <div className="card">
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className='source'>Source : {source.name}</span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.length > 200 ? description.slice(0, 197) + "..." : description}</p>
                    <p className="card-text"><span className='bold'>Author :</span> {author}</p>
                    <p className="card-text"><span className='bold'>Date :</span> {date.toTimeString()}</p>
                    <a href={url} className="btn btn-primary p-l-b">Read More</a>
                </div>
            </div>
        )
    }
}
