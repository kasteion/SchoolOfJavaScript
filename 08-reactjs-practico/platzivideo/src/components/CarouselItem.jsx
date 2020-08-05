import React from 'react'
import PropTypes from 'prop-types'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
    return (
        <div className="carousel--item">
            <img className="carousel--itemimg" src={cover} alt={title} width="200px" height="250px"/>
            <div className="carousel--itemdetails">
                <div>             
                    <img className="carousel--itemdetails-img" src={playIcon} alt="Play Icon"/>
                    <img className="carousel--itemdetails-img" src={plusIcon} alt="Plus Icon"/>
                </div>
                <p className="carousel--itemdetails-title">{title}</p>
                <p className="carousel--itemdetails-subtitle">{year} {contentRating} {duration}</p>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}

export default CarouselItem