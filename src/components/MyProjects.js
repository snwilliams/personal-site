import { useEffect, useState } from "react";

export function MyProjects() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(`https://api.github.com/users/snwilliams/repos`)
        .then(response=> {
            if(response.status===403) {
                //console.log("API response: " + response.status);
                setError(response.status);
            } else {
                console.log(response.status);
                return response.json()
            }
        })
        .then(setData)
        .catch(setError)
    },[]);

    if (error) {
        //console.log(error);
        return (
            <div className="error">
                <h1>This page was built using the GitHub API. If you are seeing this message, it means that the limit of calls to the API was exceeded. Please view my repositories on Github.</h1>
                <a href="https://github.com/snwilliams?tab=repositories"><button className="contact-me">Go to GitHub</button></a>
            </div>

        );
    } 

    if(!data) return null;
    
    const repoData = data.map((repo)=> {
        return(
            <div>
                <h4><a href={repo.html_url}>{repo.name}</a></h4>
                <p>{repo.description}</p>
            </div>
        )
    })
    return(
        <div>
            <h1>Repositories</h1>
            {repoData}
        </div>
    ); 
  

}