import React, { useState, useEffect, useContext, Suspense, lazy, useCallback } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./OpenSource.css";
import { openSource } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../loading/Loading";

export default function OpenSource() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  const getRepoData = useCallback( () => {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${openSource.githubConvertedToken}`,
          },
        });
      },
    });

    Promise.all(openSource.projects.map(project => client.query({
      query: gql`
      {
        repository(owner:"${project.owner}", name:"${project.name}") {
          id,
          name,
          owner {
            ... on RepositoryOwner {
              ... on Organization {
                name
              }
            }
          },
          description,
          url,
          forkCount,
          stargazerCount,
          languages(first: 1) {
            nodes {
              color,
              name
            }
          }
        }
      }
      `
    })
    ))
      .then((result) => {
        const repos = result.map(repo => repo.data.repository)
        setrepoFunction(repos);
      })
      .catch(function (error) {
        console.log(error);
        setrepoFunction("Error");
        console.log(
          "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
        );
      });
  }, []);

  useEffect(() => {
    getRepoData();
  }, [getRepoData]);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (!(typeof repo === "string" || repo instanceof String) && openSource.display) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source 
          <span role="img" aria-label="open hands">👐</span>
          </h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              return (
                <GithubRepoCard repo={v} key={v.id} isDark={isDark} />
              );
            })}
          </div>
          {/* <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          /> */}
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
