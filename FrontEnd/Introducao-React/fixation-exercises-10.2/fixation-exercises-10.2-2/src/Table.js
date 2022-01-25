import React from 'react';
import UserName from './UserName';
import OtherInfo from './OtherInfo';
import Image from './Image';

class Table extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      },
      {
        id: 57,
        name: "Luca",
        email: "luca@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 75,
        name: "Francisca",
        email: "francisca@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      },
      {
        id: 66,
        name: "Arthur",
        email: "Arthur@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 36,
        name: "Fernanda",
        email: "fernanda@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      },
    ];
    return (
      users.map((user) => (
        <article>
          <UserName name={ user.name }/>
          <div>
          <Image source={user.avatar}/>
          </div>
          <OtherInfo email={ user.email } id={ user.id }/>
          <Image source={ user.image }/>
        </article>
      ))
    );
  }
}

export default Table;