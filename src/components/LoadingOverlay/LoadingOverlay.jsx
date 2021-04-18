import './LoadingOverlay.scss';
import { useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Pokeball from '~/assets/images/pokeball.png';

export const LoadingOverlay = (props) => {
  const { isLoading } = props;

  useEffect(() => {
    if (isLoading) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isLoading]);

  return (
    <div className={classnames(
      "loading-overlay", {
        'is--loading': isLoading,
      })}>
      <img
        className="loading-overlay__spinner"
        src={Pokeball}
        alt="Pokéball"
        title="Pokéball"
      />
    </div>
  );
};

LoadingOverlay.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};