import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initialState'

const Home = ({ myList, trends, originals }) => {
  //const videos = useInitialState(API)

  // if (videos.length === 0){
  //     return (
  //         <h1>Loading...</h1>
  //     )
  // } else {
  return (
    <>
      <Header />
      <Search />
      {
        (myList.length > 0) && (
          <Carousel title='Mi Lista'>
            {
              myList.map((item) => {
                return (
                  <CarouselItem
                    key={item.id}
                    {...item}
                    isList
                  />
                );
              })
            }
          </Carousel>
        )
      }
      {
        (trends.length > 0) && (
          <Carousel title='Tendencias'>
            {
              trends.map((item) => {
                return (<CarouselItem key={item.id} {...item} />);
              })
            }
          </Carousel>
        )
      }
      {
        (originals.length > 0) && (
          <Carousel title='Originales de Platzi Video'>
            {
              originals.map((item) => {
                return (<CarouselItem key={item.id} {...item} />);
              })
            }
          </Carousel>
        )
      }

    </>
  );
  //}

};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };

};

//export default Home
//export default connect(props, actions)(Home)
export default connect(mapStateToProps, null)(Home);
