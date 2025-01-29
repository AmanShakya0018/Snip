"use client"
import React, { useState } from 'react'
import axios from 'axios';

const Hero = () => {

  const [post, setPost] = useState('');
  const [behaviour, setBehaviour] = useState('Professional');
  const [result, setResult] = useState('');
  const handleGenerate = async () => {
    const response = await axios.post('/api/generate', { post, behaviour });
    setResult(response.data.message);
  }

  return (
    <main>
      <input type="text" onChange={(e) => setPost(e.target.value)} className="text-black dark:text-white w-full" />
      <select name="behaviour" id="behaviour" onChange={(e) => setBehaviour(e.target.value)} className="text-black dark:text-white w-full">
        <option value="Professional">Professional</option>
        <option value="Inspirational">Inspirational</option>
        <option value="Friendly">Friendly</option>
        <option value="casual">Casual</option>
      </select>
      <button onClick={handleGenerate} className="bg-blue-500 text-white p-2 rounded-md">Generate</button>
      <div className="text-black dark:text-white w-full">{result}</div>
    </main>
  )
}

export default Hero