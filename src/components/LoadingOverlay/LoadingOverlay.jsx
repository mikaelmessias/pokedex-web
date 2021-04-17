import './LoadingOverlay.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Pokeball from '@Assets/images/pokeball.png';

export const LoadingOverlay = (props) => {
  const { isLoading } = props;

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