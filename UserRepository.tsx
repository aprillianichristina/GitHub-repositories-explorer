import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type Repository = {
  name: string;
  html_url: string;
}

const UserRepositories: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepositories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepositories();
  }, [username]);

  return (
    <div>
      <h2>Repositories for {username}</h2>

      <ul>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositories;

