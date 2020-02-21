import React, { useState, useEffect } from 'react'

import { dataFequency } from '../../utils/sortArray'

const Alphabets = (props) => {

    let { contacts, alphabet, onClickAlphabet } = props
    const alphabetsFrequency = dataFequency(contacts)

    const createAlphabetsList = () => {
        let result = [];
        for (let i = 65; i < 91; i++) {
            result.push(
                <button
                    className={String.fromCharCode(i)===alphabet? 'active': null}
                    type="button" key={i}
                    onClick={onClickAlphabet}
                    value={String.fromCharCode(i)}
                >
                    {String.fromCharCode(i)}
                    <sub>{alphabetsFrequency[String.fromCharCode(i)] || 0}</sub>
                </button>
            )
        }
        return result;
    }

    return (
        <React.Fragment>
            {createAlphabetsList()}
        </React.Fragment>
    )
}

export default Alphabets