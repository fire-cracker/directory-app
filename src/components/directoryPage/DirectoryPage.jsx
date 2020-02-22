import React, { useState, useEffect } from 'react'

import getContacts from '../apiCalls'
import Alphabets from '../alphabet/Alphabets'
import Contacts from '../contacts/Contacts'

import './styles.css'

/**
 * 
 * This is the Parent component which renders the Directory Page
 * @component
 * @method DirectoryPage
 * @returns {html} Returns html element
 */

const DirectoryPage = () => {
  const [state, setState] = useState({
    contacts: [],
    activeAlphabet: 'A',
    activeContactEmail: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data: { results } } = await getContacts()
      setState(prevState => ({
        ...prevState,
        contacts: results
      }))
    }
    fetchData()
  }, [])

  const onClickAlphabets = ({ currentTarget: { value } }) => {
    setState(prevState => ({
      ...prevState,
      activeAlphabet: value,
      activeContactEmail: ''
    }))
  }

  const onClickContact = (contactEmail) => {
    setState(prevState => ({
      ...prevState,
      activeContactEmail: contactEmail,
    }))
  }

  const onClickCloseDropdown = () => {
    setState((prev) => ({
      ...prev,
      activeContactEmail: ''
    }));
  }

  return (
    <div className="app__background">
      <div className="directory">
        <div className="alphabet__div">
          <ul className="alphabet">
            <Alphabets
              {...state}
              onClickAlphabet={onClickAlphabets}
            />
          </ul>
        </div>
        <div className="contact__div">
          <ul className="contact">
            <Contacts
              {...state}
              closeContactDropdown={onClickCloseDropdown}
              onClickContact={onClickContact}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DirectoryPage;
