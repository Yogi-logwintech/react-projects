import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
      let {title, description, imgsrc, newsUrl} = this.props;
    return (
      <div>
          <div className="card my-3" style={{width: '18rem', minHeight: '10rem'}}>
            <img src={imgsrc} style={{minHeight: '10rem', maxHeight: '10rem'}} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} rel='noreferrer' target="_blank" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}
