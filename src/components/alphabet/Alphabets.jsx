import React from 'react';
import PropTypes from 'prop-types';

import { dataFequency } from '../../utils/sortArray';

/**
 * 
 * Renders a list of alphabet buttons
 * @component
 * @method Alphabets
 * @param {object} props - contains the
 * @returns {html} Returns html element of button tags of alphabet A -Z
 */

const Alphabets = props => {
  const { contacts, activeAlphabet, onClickAlphabet } = props;
  const alphabetsFrequency = dataFequency(contacts);

  const createAlphabetsList = () => {
    const result = [];
    for (let i = 65; i < 91; i++) {
      result.push(
        <button
          className={
            String.fromCharCode(i) === activeAlphabet ? 'active' : null
          }
          type="button"
          key={i}
          onClick={onClickAlphabet}
          value={String.fromCharCode(i)}
        >
          {String.fromCharCode(i)}
          <sub>{alphabetsFrequency[String.fromCharCode(i)] || 0}</sub>
        </button>
      );
    }
    return result;
  };

  return <React.Fragment>{createAlphabetsList()}</React.Fragment>;
};

Alphabets.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  activeAlphabet: PropTypes.string.isRequired,
  onClickAlphabet: PropTypes.func.isRequired
};

export default Alphabets;
