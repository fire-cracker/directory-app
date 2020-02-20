import React from 'react';
import { render } from 'react-dom';

import DirectoryPage from './components/DirectoryPage/Directory';

import './index.css'

const wrapper = document.getElementById("app");
render(<DirectoryPage />, wrapper);