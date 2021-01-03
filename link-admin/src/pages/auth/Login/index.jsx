import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin } from 'store/auth'

import { useForm } from 'react-hook-form'

import logo from 'images/link-sf.png'
import { Field, Label, Input } from '@zendeskgarden/react-forms'
import { STATUS } from 'link-rest-client/api'
import { useNavigation } from 'components/Routing'

const Login = () => {
  const navigate = useNavigation()
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const { register, handleSubmit } = useForm()

  const handleLogin = data => {
    dispatch(loginAdmin(data))
  }

  useEffect(() => {
    if(auth.status === STATUS.SUCCESS) {
      navigate('/')
    }
  }, [auth.status, dispatch])

  return (
    <div className='flex items-center justify-center w-full h-full'>

      <div className='shadow-default rounded-default max-w-md p-8 mb-48'>
        <h1>Sign in to</h1>
        <img src={ logo } className="max-w-full max-h-full" />

        <form onSubmit={ handleSubmit(handleLogin) }>
          <Field>
            <Label>Email</Label>
            <Input ref={ register } name='email' />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input type='password' ref={ register } name='password' />
          </Field>
          <br />
          <Field>
            <Input type='submit' value='Log In' isPrimary />
          </Field>
        </form>
      </div>

    </div>
  )
}

export default Login
