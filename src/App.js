
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './component/Profile';

function App() {
const user = { fullName :"Iram hosny", bio : " 'Instead of worrying about what you cannot control, shift your energy to what you can create' ",
profession :"job_seeker"}
const handleName=(N)=> alert(N);
  return (
      <div className='app' >
      <Profile user = {user} 
      handleName= {handleName}>
      <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/343762987_1391386025033591_8097438057699298114_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tb_245mKS4cAX-_z3RB&_nc_oc=AQkr5Y8bL3WBjIsNHkqKsUK8l5bafAbe7ckWZLqwo_V-Bl4DEvTacDDcpHmAgmeK9WQ&_nc_ht=scontent.ftun14-1.fna&oh=00_AfBCEnCC8_M55ZVTVkdQGD8JEhj-_sMlyBRDqHeJ8tOT2g&oe=6466E0E4" alt='' /> 
      </Profile>
    </div>
  );
}

export default App;
