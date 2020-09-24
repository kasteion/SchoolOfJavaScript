import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { match, playing, history } = props;
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  console.log(props);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : setTimeout(() => <Redirect to='/404' />, 0);
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

//export default Player
export default connect(mapStateToProps, mapDispatchToProps)(Player);
