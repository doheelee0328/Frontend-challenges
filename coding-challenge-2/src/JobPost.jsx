import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobPost = () => {
  const { jobPostId } = useParams()

  const [jobPost, setJobPost] = useState('')
  const [error, setError] = useState('')
  const [spinner, setSpinner] = useState(false)

  // use useParams to access the post id that the user has clicked on

  const API_URL = `https://hacker-news.firebaseio.com/v0/item/${jobPostId}.json`

  const jobPostHandler = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()

      const { id, title, by, time } = data

      const jobPostInformation = [id, title, by, time]

      setJobPost(jobPostInformation)
      setSpinner(false)
    } catch (error) {
      setError(error.message)
      setSpinner(false)
    }
  }

  useEffect(() => {
    jobPostHandler()
  }, [])

  const informationJobPost = () => {
    const [id, title, by, time] = jobPost
    return (
      <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{by}</p>
        <p>{time}</p>
      </div>
    )
  }

  return (
    <div>
      {spinner ? <p>loading</p> : informationJobPost()}
      {error && error}
    </div>
  )
}

export default JobPost
