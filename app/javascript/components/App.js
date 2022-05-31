import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import HelloWorld from './HelloWorld'
const store= configureStore();
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<h1>Hello</h1>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App
