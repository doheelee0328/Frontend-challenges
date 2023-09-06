import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const JobFeed = () => {
  const API_URL = `https://hacker-news.firebaseio.com/v0/jobstories.json`

  const [hackerNews, setHackerNews] = useState([])

  const fetchHackNewsAPI = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    setHackerNews(data)
    // console.log(data)
    // random word
    const randomWord = data[Math.floor(Math.random() * data.length)]
    // data[Math.floor(Math.random()*data.length)]
    // it has 60 items then the math random generates a random number from 0 to 59
    // as 0 being inclusive and math.floor generates a integer instead of floating number
  }

  useEffect(() => {
    fetchHackNewsAPI()
  }, [])

  const hackerNewsAPIHandler = () => {
    let element = []
    for (let i = 0; i < 5; i++) {
      element.push(
        <Link to={`/${hackerNews[i]}`}>
          <li key={i}>{hackerNews[i]}</li>
        </Link>
      )
    }
    return element
  }

  return (
    <div>
      {hackerNewsAPIHandler()}
      <button>Load more</button>
    </div>
  )
}

export default JobFeed
