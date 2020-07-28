import React from 'react';
import './SwipeButtons.css';
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__close">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__favorite">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__flash">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
