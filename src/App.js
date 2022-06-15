
// Добавлять в список новых юзеров
// Кнопка редактировать юзера внутри user item 
// (disabled inputs, активируются после нажатия кнопки Edit. 
  // Кнопка Edit изменилась на копку Save. После нажатия на Save обновляется именно этот юзер)
// Кнопка delete у user item. 

// Главный компонент хранит States и обновляет их
// 1. usersList
// 

// Есть компонент AddUser: возвращает форму для добавления юзера, собирает данные из формы и меняет State usersList. 
// После этого форма должна очищаться

// Сделать компонент UsersList. Будет рендерить блоки с UserBox.
// Компонент UserBox, где inputs уже заполнены и поля недоступны по умолчанию. Будут рендериться внутри листа юзеров. Внутри две кнопки - редактировать(сохранить) и удалить.
  //  Имеет собственные States, согласно инпутам. В стейты распаковываются данные объекта юзера.
import { useState } from 'react';
import AddUser from './components/AddUser'

function App() {

  const [usersList, setUsersList] = useState([]);

  return (
    <AddUser 
      usersList={usersList}
      setUsersList={setUsersList}
    />
  );
}

export default App;