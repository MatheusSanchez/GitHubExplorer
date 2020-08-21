import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import logoImage from '../../assets/logo.svg';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { Header, RepoInfo, Issues } from './style';
import api from '../../services/api'

interface RepoParams {
  repository: string;
}
interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepoParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);


  useEffect(() => {

    console.log("here");
    /* const [repository, issues] = await Promise.all([
       api.get(`repos/${params.repository}`),
       api.get(`repos/${params.repository}/issues`)
     ]);*/

    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });




  }, [params.repository]);


  return (
    <>
      <Header>
        <img src={logoImage} alt="GitHub Explorer" />
        <Link to="/"> Voltar
        <FiChevronsLeft size={16}>

          </FiChevronsLeft>
        </Link>
      </Header>
      {repository && (
        <RepoInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>

              <strong>{repository.full_name}</strong>
              <p>
                {repository.description}
              </p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>67</strong>
              <span>issues Abertas</span>
            </li>
          </ul>
        </RepoInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title} </strong>
              <p>
                {issue.user.login}
              </p>

            </div>
          </a>
        ))}
      </Issues>
    </>

  )
}



export default Repository;
