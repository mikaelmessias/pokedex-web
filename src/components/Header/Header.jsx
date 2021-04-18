import classNames from 'classnames';
import PropTypes from 'prop-types';
import PokeDexLogo from '~/assets/images/logo.png';
import './Header.scss';

export const Header = ({ className, children }) => {
  return (
    <header className={classNames(className, 'header_wrapper')}>
      <img src={PokeDexLogo} alt="PokeDex!" title="Logo do site" />

      {children}
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  className: '',
};