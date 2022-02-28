import React from 'react';
import './App.css';
import Input from './components/Input'
import Textarea from './components/Textarea'
import Select from './components/Select'
import FileInput from './components/FileInput'

function App() {

  return (
    <React.Fragment>
        <Input/>
        <Textarea/>
        <Select list={[{
          value: 'blud',
          text: 'blue'
        }, {
          value: 'red',
          text: 'red'
        }, {
          value: 'yellow',
          text: 'yellow'
        }]}/>
        <FileInput/>
    </React.Fragment>
  );
}

export default App;
