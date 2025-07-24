import Header from './Header'
import Form from './Form'
import { loginBgImg } from '../utils/constant'

const Login = () => {

  return (<div className={`bg-[url("${loginBgImg}")] w-[100%] h-[100vh]`}>
    <Header />
    <Form />
  </div>
  )
}

export default Login