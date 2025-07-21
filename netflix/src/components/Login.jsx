import Header from './Header'
import Form from './Form'
import { loginBgImg } from '../utils/constant'

const Login = () => {

  return (<div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg")] w-[100%] h-[100vh]'>
    <Header />
    <Form />
  </div>
  )
}

export default Login