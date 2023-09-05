import React from 'react'
import '../../sass/main.scss'

const Message = ({ clickedLength }) => {
  let message
  switch (clickedLength) {
    case 1:
      message =
        "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right."
      break
    case 2:
      message =
        'We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.'
      break
    case 3:
      message =
        "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve."
      break
    case 4:
      message =
        "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support."
      break
    case 5:
      message =
        "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform"
      break

    default:
      message = 'We are extremely sorry that you had a very bad experience'
  }
  return <div className='conditional-message'>{message}</div>
}

export default Message
