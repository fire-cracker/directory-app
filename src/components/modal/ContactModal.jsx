import React from 'react';

import './styles.css';


const ContactModal = ({
  onClickCloseDropdown,
  contactDetails: { 
    name : { title, first, last },
    location: { street, city, state, postcode },
    picture: { thumbnail },
    gender,
    email,
    phone }
}) => {

  return (
    <div className="modal-content">
      <div className="close-button"><span onClick={onClickCloseDropdown}>&times;</span></div>
      <div className="contact-details">
        <div className="right-div">
          <img src={thumbnail} alt="John"></img>
        </div>
        <div className="details-div">
          <h2>{first} {last}</h2>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{title}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>Street</td>
                <td>{street.number} {street.name}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{city}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{state}</td>
              </tr>
              <tr>
                <td>Postcode</td>
                <td>{postcode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}



export default ContactModal;