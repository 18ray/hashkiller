import React, { Component } from 'react';
import './app.css';
import axios from 'axios';

import EncryptBar from './components/EncryptBar';
import DecryptBar from './components/DecryptBar';

class App extends Component {
  state = { enrypt: '' }

  onEncryptSubmit = async (term) => {
    const response = await axios.get(`https://indosec.web.id/api/ultra_hash.php?action=custom&value=${term}&type=md5`)

    this.setState({ encrypt: response.data.data.md5 });
  }

  onDecryptSubmit = async (term) => {
    const response = await axios.get(`https://indosec.web.id/api/ultra_hash.php?action=dec&value=${term}`)

    console.log(response)
    this.setState({ decrypt: response.data.data });
  }

  render() {
    return (
      <div className="ui container">
        <EncryptBar onSubmit={this.onEncryptSubmit} />
        MD5: {this.state.encrypt}
        <DecryptBar onSubmit={this.onDecryptSubmit} />
        Plaintext: {this.state.decrypt}
      </div>
    );
  }
}

export default App;
