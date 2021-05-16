import React, { useState, useEffect } from 'react'
import GitAppCard from './GitAppCard'
import GitAppLoading from './GitAppLoading';

const GitAppMain = () => {
    const [gitProfiles,setgitProfiles] = useState([]);
    const [loading,setLoading]=useState(true);
    const getUsers = async() => {
        try {
            setLoading(false);
            const response = await fetch('https://api.github.com/users');
            setgitProfiles(await response.json());
        } catch (error) {
            console.log("My error is" + error);
        }
        
    }
    useEffect(() => {
        getUsers();
    }, [])

    if(loading){
        return <GitAppLoading/>
    }

    return (
        <div>
            <GitAppCard gitProfiles={gitProfiles}/>
        </div>
    )
}

export default GitAppMain
