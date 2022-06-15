import {useState} from 'react'

function AddUser(props){
  const usersList = props.usersList;
  const setUsersList = props.setUsersList;

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  function addUser(e){
    e.preventDefault();
    const user = {
      name,
      surname,
      tel,
      email,
    }
    usersList.push(user);
    setUsersList([...usersList]); // ??
    console.log(usersList);
    setName('');
    setSurname('');
    setTel('');
    setEmail('');
  }

  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input 
        name='name' 
        id='name' 
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor='surname'>Surame</label>
      <input 
        name='surname' 
        id='surname' 
        placeholder='Surname'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />

      <label htmlFor='tel'>Tel</label>
      <input 
        name='tel' 
        id='tel' 
        placeholder='Tel'
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        />

      <label htmlFor='email'>Email</label>
      <input 
        name='email' 
        id='email' 
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button 
        type='submit'
        onClick={addUser}
        >Add new user</button>
    </form>
  )
}

export default AddUser;