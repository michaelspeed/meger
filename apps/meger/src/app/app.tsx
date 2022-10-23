// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
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
              <input type="text" placeholder='Email'/>
              <input type="text" placeholder='password'/>
            </div>
            <div style={{padding: 20}}>
              <button>Login with Rest</button>
            </div>
            <div style={{padding: 20}}>
              <span>On Login the token will be displayed here</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
