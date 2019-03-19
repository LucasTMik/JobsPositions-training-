import React, { Component } from 'react';
import '../stylesheet/job.css';

export default class Job extends Component {

    render() {
        return (
            <div className={"jobContainer"}>
              <h3>{this.props.name}</h3>
              <p>Salary: {this.props.salary}</p>
              <style jsx>{`
                .jobContainer {
                    ${this.props.range ? `grid-column: ${this.props.range}` : ''}
                }
              `}</style>
            </div> 
        );
    }
}

