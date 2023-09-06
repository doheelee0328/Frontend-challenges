import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobPost = () => {
  const { jobPostId } = useParams()
  const [jobPost, setJobPost] = useState('')
  // use useParams to access the post id that the user has clicked on

  const API_URL = `https://hacker-news.firebaseio.com/v0/item/${jobPostId}.json`

  const jobPostHandler = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()

    const { id, title, by, time } = data

    const jobPostInformation = [id, title, by, time]

    setJobPost(jobPostInformation)
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

  return <div>{informationJobPost()}</div>
}

export default JobPost
