import React, { Component } from 'react';
import '../stylesheet/jobs.css';


export default class Jobs extends Component {
    render() {
        return (
            <div className={"content"}>
                <div className={"searchContainer"}>
                    <h3>Busque sua vaga</h3>
                    <hr />
                </div>
                <div className={"jobsContainer"}>
                    <input placeholder={"Nome da vaga..."} />
                    <select >
                        <option selected disabled>Estado</option>
                        <option >test</option>
                    </select>
                    <button>Buscar</button>
                </div>
            </div> 
        );
    }
}

