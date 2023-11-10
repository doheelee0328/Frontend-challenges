import React, { useState, useEffect } from 'react'

const Form = () => {
  const [state, setState] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    isFormValid: false,
    nameErrorMessage: '',
    passwordErrorMessage: '',
    confirmPasswordErrorMessage: '',
  })

  const usernameValid = function (username) {
    const regex = /^[A-Za-z0-9]+$/
    const length = username.length >= 4 && username.length <= 15
    return length && regex.test(username)
  }

  const passwordValid = function (password) {
    const regex = /^[A-Za-z0-9]+$/
    const length = password.length >= 4 && password.length <= 15
    return length && regex.test(password)
  }

  const isMatchPassword = state.password === state.confirmPassword

  const updateFormValidity = () => {
    const isUsernameValid = usernameValid(state.name)
    const isPasswordValid = passwordValid(state.password)

    setState((prevState) => ({
      ...prevState,
      isFormValid: isUsernameValid && isPasswordValid && isMatchPassword,
    }))
  }

  const handleUsernameChange = (e) => {
    const newName = e.target.value
    setState((prevState) => ({
      ...prevState,
      name: newName,
      nameErrorMessage:
        newName === ''
          ? 'This field must be filled'
          : newName.length < 4
          ? 'Username should be more than 4'
          : '',
    }))
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setState((prevState) => ({
      ...prevState,
      password: newPassword,
    }))
  }

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value
    setState((prevState) => ({
      ...prevState,
      confirmPassword: newConfirmPassword,
    }))
  }

  useEffect(() => {
    updateFormValidity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.name, state.password, state.confirmPassword])

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input
        type='text'
        onChange={handleUsernameChange}
        value={state.name}
        onBlur={handleUsernameChange}
      />
      {state.nameErrorMessage ? <p>{state.nameErrorMessage}</p> : ''}
      <label>Password</label>
      <input
        type='password'
        onChange={handlePasswordChange}
        value={state.password}
      />
      {state.passwordErrorMessage ? <p>{state.passwordErrorMessage}</p> : ''}
      <label>Confirm Password</label>
      <input
        type='password'
        onChange={handleConfirmPasswordChange}
        value={state.confirmPassword}
      />
      <button disabled={!state.isFormValid}>Submit</button>
    </form>
  )
}

export default Form
