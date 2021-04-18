import classNames from 'classnames';
import PropTypes from 'prop-types';
import PokeDexLogo from '~/assets/images/logo.png';
import './Header.scss';

export const Header = ({ className }) => {
  return (
    <header className={classNames(className, 'header_wrapper')}>
      <img src={PokeDexLogo} alt="PokeDex!" title="Logo do site" />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};