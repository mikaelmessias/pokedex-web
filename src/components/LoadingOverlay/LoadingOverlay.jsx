import './LoadingOverlay.scss';
import PropTypes from 'prop-types';

import Pokeball from '@Assets/images/pokeball.png';

export const LoadingOverlay = (props) => {
  const { isLoading } = props;

  return isLoading && (
    <div className="loading-overlay">
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