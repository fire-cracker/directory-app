import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

/**
 *
 * Renders the contact details dropdown
 * @component
 * @method ContactModal
 * @param {object} props - contains set of values passed from the Parent Component
 * @returns {html} Returns html elements of the contact details dropdown
 */

const ContactModal = ({
  onClickCloseDropdown,
  contactDetails: {
    name: { first, last },
    location: { street, city, state, postcode },
    picture: { thumbnail },
    email,
    phone
  }
}) => {
  return (
    <div className="modal-content">
      <div className="close-button">
        <span onClick={onClickCloseDropdown}>&times;</span>
      </div>
      <div className="contact-details">
        <div className="right-div">
          <img src={thumbnail} alt="John"></img>
        </div>
        <div className="details-div">
          <h2>
            {last.toUpperCase()}, {first}
          </h2>
          <table>
            <tbody>
              <tr>
                <td>email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>phone</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>street</td>
                <td>
                  {street.number} {street.name}
                </td>
              </tr>
              <tr>
                <td>city</td>
                <td>{city}</td>
              </tr>
              <tr>
                <td>state</td>
                <td>{state}</td>
              </tr>
              <tr>
                <td>postcode</td>
                <td>{postcode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  contactDetails: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired
    }),
    location: PropTypes.shape({
      street: PropTypes.shape({
        number: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postcode: PropTypes.any.isRequired
    }),
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired
    }),
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired,
  onClickCloseDropdown: PropTypes.func.isRequired
};

export default ContactModal;
