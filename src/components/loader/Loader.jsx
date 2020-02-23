import React from 'react';

import img from '../../../public/spinner.gif';
import './styles.css';

/**
 *
 * Render the loading div
 * @component
 * @method LoaderComponent
 * @returns {html} Returns html element
 */
const LoaderComponent = () => (
  <div className="contact-div">
    <div className="custom-loader">
      <img src={img} alt="loader" className="custom-loader-img" />
    </div>
  </div>
);

export default LoaderComponent;
