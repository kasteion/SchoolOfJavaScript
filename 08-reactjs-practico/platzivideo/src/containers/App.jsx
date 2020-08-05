import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import CarouselItem from '../components/CarouselItem'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initialState'

const App = () => {
    const videos = useInitialState(API)

    if (videos.length === 0){
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div className="app">
                <Header />
                <Search />
                {
                    (videos.mylist.length > 0) &&
                    <Carousel title={'Mi Lista'}>
                        {
                            videos.mylist.map((item) => {
                                return (<CarouselItem key={item.id} {...item}/>)
                            })
                        }
                    </Carousel>
                }
                {
                    (videos.trends.length > 0) &&
                    <Carousel title={'Tendencias'}>
                        {
                            videos.trends.map((item) => {
                                return (<CarouselItem key={item.id} {...item}/>)
                            })
                        }
                    </Carousel>
                }
                {
                    (videos.originals.length > 0) &&
                    <Carousel title={'Originales de Platzi Video'}>
                        {
                            videos.originals.map((item) => {
                                return (<CarouselItem key={item.id} {...item}/>)
                            })
                        }
                    </Carousel>
                }
                <Footer/>
            </div>
        )
    }
    
}

export default App