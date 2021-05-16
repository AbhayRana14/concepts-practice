import React from 'react'
import '../../App.css';


const GitAppCard = (props) => {
    return (
        <>
        <h1>Git Profiles</h1>
            <div className="Card-Container">
                
                {props.gitProfiles.map((currElem)=>{
                    return(   
                    <div  key={currElem.id} >
                        <div className="Card-User">
                            <h4>Name: {currElem.login}</h4>
                            <div className="Card-Image">
                              <img alt="" src={currElem.avatar_url} width="155"></img>
                            </div>
                            <div className="Card-Id">
                                ID: {currElem.id}
                            </div>
                            <div className="Card-Name">
                                Office ID: {currElem.node_id}
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default GitAppCard
