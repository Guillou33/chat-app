import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Contact
        id='1'
        name='Anita Sutton'
        avatar='https://randomuser.me/api/portraits/women/75.jpg'
        online
      />
      <Contact
        id='2'
        name='Jim Georges'
        avatar='https://randomuser.me/api/portraits/men/97.jpg'
      />
      <Contact
        id='3'
        name='Charlotte Ryan'
        avatar='https://randomuser.me/api/portraits/women/20.jpg'
        online
      />
    </div>
  );
}

export default App;
