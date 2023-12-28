import { useState } from 'react'
import './App.css'
import.meta.env.VITE_MY_API_KEY;
import {Configuration, OpenAIApi} from "openai";

const configuration = new OpenAIApi(configuration)
function App() {

  async function fetchData() {
    try{
      const response = await OpenAI.createImage({
        prompt
      })
    }
  }

    return ( 
    <>
      
    </>
  )
}

export default App
 