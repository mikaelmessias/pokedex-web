import { useState } from "react";
import PropTypes from 'prop-types';

import './Pagination.scss';

export const Pagination = (props) => {
  const { total, onNext, onPrev } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const serializedTotal = Math.round(parseFloat(total / 20));


  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    onPrev();
  };
  
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    onNext();
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__button--prev"
        type="button"
        onClick={handlePrev}
        disabled={currentPage < 2}
      >
          Anterior
      </button>

      <div className="pagination__pages">
        Página: {currentPage}/{serializedTotal}
      </div>

      <button
        className="pagination__button pagination__button--next"
        type="button"
        onClick={handleNext}
        disabled={currentPage >= serializedTotal}
      >
        Próxima
      </button>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};