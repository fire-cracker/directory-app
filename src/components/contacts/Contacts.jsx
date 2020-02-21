import React, { useState, useEffect } from 'react'

import { filterContacts } from '../../utils/sortArray'
import ContactModal from '../modal/ContactModal'

const Contacts = (props) => {
   
    const { contacts, alphabet, activeContact, onClickContact, closeContactDropdown } = props

    return filterContacts(contacts, alphabet).map((contact, index) => (
        <li key={index}>
            <span onClick={() => onClickContact(contact.email)}>{contact.name.first} {contact.name.last}</span>
            {activeContact === contact.email
                ? <ContactModal
                    onClickCloseDropdown={closeContactDropdown}
                    contactDetails={contact}
                />
                : null}
        </li>))
}

export default Contacts