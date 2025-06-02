import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Animals Hope Shelter</h1>
      <p>
        We are a pet adoption service that aims to give animals new homes for them to be nurtured in.
        We provide a plethora of animals, from nappiest cats to friendliest dogs. 
        Adoption is easy — contact us and we'll get the papers ready.
      </p>
      <Link to="/pets">
        <button>Adopt a Pet Now!</button>
      </Link>

      <div>
        <iframe
    src="https://www.chatbase.co/chatbot-iframe/nRrT1Y0iXTZxtPCVzdsY5"
    width="100%"
    style="height: 100%; min-height: 700px"
    frameborder="0"
></iframe>
      </div>
    </div>
  );
}
