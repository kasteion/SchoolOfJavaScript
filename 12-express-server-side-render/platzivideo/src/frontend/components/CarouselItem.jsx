import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { setFavorite, deleteFavorite } from '../actions'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList } = props
    
    const handleSetFavorite = () => {
        props.setFavorite(
            {
                id, cover, title, year, contentRating, duration
            }
        )
    }

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }

    return (
        <div className="carousel--item">
            <img className="carousel--itemimg" src={cover} alt={title} width="200px" height="250px"/>
            <div className="carousel--itemdetails">
                <div>             
                    <Link to={`/player/${id}`}>
                        <img 
                            className="carousel--itemdetails-img" 
                            src={playIcon} 
                            alt="Play Icon" 
                        />
                    </Link>
                    
                    {
                        (isList) 
                        ? <img 
                            className="carousel--itemdetails-img" 
                            src={removeIcon} alt="Remove Icon" 
                            onClick={() => handleDeleteFavorite(id)}/>
                        : <img 
                            className="carousel--itemdetails-img" 
                            src={plusIcon} 
                            alt="Plus Icon" 
                            onClick={handleSetFavorite}
                            />
                    }
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

const mapDispatchToProps = {
    setFavorite, 
    deleteFavorite
}

//export default CarouselItem
export default connect(null, mapDispatchToProps)(CarouselItem)