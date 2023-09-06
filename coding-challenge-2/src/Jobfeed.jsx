import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const JobFeed = () => {
  const API_URL = `https://hacker-news.firebaseio.com/v0/jobstories.json`

  const [hackerNews, setHackerNews] = useState([])
  const [error, setError] = useState('')
  const [spinner, setSpinner] = useState(true)
  const [perPage, setPerPage] = useState(5)
  const [pageNumber, setPageNumber] = useState(0)
  const [endReach, setEndReached] = useState(false)

  const fetchHackNewsAPI = async () => {
    try {
      if (!endReach) {
        const response = await fetch(API_URL)
        const data = await response.json()
        const intial = pageNumber * perPage
        const end = intial + perPage
        const postIds = data.slice(intial, end)

        if (hackerNews.length >= data.length) {
          setEndReached(true)
        }

        setSpinner(false)
        setHackerNews((prev) => [...prev, ...postIds])
      }
      // random word
      // const randomWord = data[Math.floor(Math.random() * data.length)]
      // data[Math.floor(Math.random()*data.length)]
      // it has 60 items then the math random generates a random number from 0 to 59
      // as 0 being inclusive and math.floor generates a integer instead of floating number
    } catch (error) {
      setError(error.message)
      setSpinner(false)
    }
  }

  const getMoreProjects = () => {
    setPageNumber(pageNumber + 1)
  }

  useEffect(() => {
    fetchHackNewsAPI()
  }, [pageNumber])

  const hackerNewsAPIHandler = () => {
    return (
      <>
        {hackerNews.map((el, idx) => (
          <Link to={`/${el}`}>
            <li key={idx}>{el}</li>
          </Link>
        ))}
      </>
    )
  }
  // return element

  return (
    <div>
      {spinner ? <p>loading</p> : hackerNewsAPIHandler()}
      <button onClick={getMoreProjects}>Load more</button>
      {error && error}
    </div>
  )
}

export default JobFeed
