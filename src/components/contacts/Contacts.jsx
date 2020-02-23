import React from 'react';
import PropTypes from 'prop-types';

import { filterContacts } from '../../utils/sortArray';
import ContactModal from '../modal/ContactModal';

import './styles.css';

/**
 *
 * Renders a list of contacts
 * @component
 * @method Contacts
 * @param {object} props - contains set of values passed from the Parent Component
 * @returns {html} Returns a html element of li tag of the list of contacts
 */

const Contacts = props => {
  const {
    contacts,
    activeAlphabet,
    activeContactEmail,
    onClickContact,
    closeContactDropdown
  } = props;

  return filterContacts(contacts, activeAlphabet).map((contact, index) => (
    <li key={index}>
      <span onClick={() => onClickContact(contact.email)}>
        {contact.name.first}, {contact.name.last.toUpperCase()}
      </span>
      {activeContactEmail === contact.email ? (
        <ContactModal
          onClickCloseDropdown={closeContactDropdown}
          contactDetails={contact}
        />
      ) : null}
    </li>
  ));
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  activeAlphabet: PropTypes.string.isRequired,
  activeContactEmail: PropTypes.string.isRequired,
  onClickContact: PropTypes.func.isRequired,
  closeContactDropdown: PropTypes.func.isRequired
};

export default Contacts;
