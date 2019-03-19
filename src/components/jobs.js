import React, { Component } from 'react';
import '../stylesheet/jobs.css';

import Job from './job';


export default class Jobs extends Component {

    constructor() {
        super();
        this.state = {
            jobs: []
        }

        this.updateJobs = this.updateJobs.bind(this);
    }

    componentWillMount() {
        this.updateJobs();
    }

    updateJobs() {
        fetch('http://localhost:4100/jobs')
        .then(jobsPromise => {
            jobsPromise.json()
                .then(jobs => {
                    this.setState({ jobs });
                })
        });
    }

    render() {
        const jobsList = this.state.jobs.map(function (job) {
            return <Job name={job.name} salary={job.salary} />;
        })

        return (
            <div className={"content"}>
                <div className={"searchContainer"}>
                    <h3>Busque sua vaga</h3>
                </div>
                <div className={"searchOptions"}>
                    <input placeholder={"Nome da vaga..."} />
                    <select >
                        <option selected disabled>Estado</option>
                        <option >test</option>
                    </select>
                    <button>Buscar</button>
                </div>
                <div className={"jobsGrid"}>
                    {jobsList}
                </div>
            </div>
        );
    }
}

