import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import { Title, Form, Repositories, Error, Repository } from './style'
import { FiChevronsRight } from 'react-icons/fi'
import api from '../../services/api'

interface RepositoryIO {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}


const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<RepositoryIO[]>(() => {
    const storageRepos = localStorage.getItem('@GitHubExplore:repositories');
    if (storageRepos) {
      return JSON.parse(storageRepos);
    } else {
      return [];
    }
  });
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem("@GitHubExplore:repositories", JSON.stringify(repositories))
  }, [repositories]);

  function handleDeleteRepositorie(repo: RepositoryIO): number {
    console.log(repo);

    return 0;
  }

  async function handleAddRepositorie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // evita o forms de atualizar a página
    if (!newRepo) {
      setInputError("Digite o autor/nome do repositório !");
      return;
    }

    try {
      const response = await api.get<RepositoryIO>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');

    } catch (error) {
      setInputError("Erro na busca do repositório :(");
    }


  }

  return (
    <>
      <img src={logoImage} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepositorie}>
        <input value={newRepo} onChange={e => setNewRepo(e.target.value)} placeholder="Digite o repositório aqui">
        </input>
        <button type="submit">
          Pesquisar
        </button>
      </Form>

      {inputError && <Error>
        {inputError}
      </Error>
      }

      <Repositories>

        {repositories.map(repo => (
          <Repository>
            <Link to={`/repository/${repo.full_name}`}>
              <img src={repo.owner.avatar_url}
                alt={repo.owner.login}
              />

              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronsRight size={20} />
            </Link>
            <button >X</button>
          </Repository>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;
