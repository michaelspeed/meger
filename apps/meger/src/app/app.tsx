// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useState} from "react";
import {login, register} from "../lib/api";

export function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)

  const onRegister = async () => {
    if (!email && !password && email === '' && password === '') {
      return
    }
    const loginResponse = await register(email, password)
    console.log(loginResponse)
  }

  const onLogin = async () => {
    if (!email && !password && email === '' && password === '') {
      return
    }
    const loginResponse = await login(email, password)
    console.log(loginResponse)
    setToken(loginResponse.data.token)
  }

  return (
    <>
      <div>
        <div>
          <div style={{padding: 20}}>
            <span>
            Hello from meger
          </span>
          </div>
          <div style={{padding: 20}}>
            <span>
              Test Login Here
            </span>
            <div style={{padding: 20}}>
              <input type="text" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)}/>
              <input type="text" placeholder='password' value={password}
                     onChange={event => setPassword(event.target.value)}/>
            </div>
            <div style={{padding: 20}}>
              <button style={{marginRight: 10}} onClick={onLogin}>Login with Rest</button>
              <button onClick={onRegister}>Register with Rest</button>
            </div>
            <div style={{padding: 20}}>
              <span>On Login the token will be displayed here {token !== null && token}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
