import React from 'react';
import { render } from 'react-dom';

import Form from './components/Form';

const wrapper = document.getElementById("app");
wrapper ? render(<Form />, wrapper) : false;