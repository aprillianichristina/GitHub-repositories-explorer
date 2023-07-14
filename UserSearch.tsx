import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type User = {
  login: string;
  html_url: string;
}

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const UserList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UserCard = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  text-align: center;
`;

const UserSearch: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchText}`);
      setUsers(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchContainer>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </SearchContainer>

      <UserList>
        {users.map((user) => (
          <UserCard key={user.login}>
            <Link to={`/users/${user.login}`}>
              <h3>{user.login}</h3>
            </Link>
          </UserCard>
        ))}
      </UserList>
    </div>
  );
};

export default UserSearch;

