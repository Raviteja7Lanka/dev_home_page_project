import React from 'react'
import Card from './Card'
import './Card-style.css'

export const Project = () => {
    return (
        <div>
            <div className= "container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-md-3">
                    <Card links="/things" title="Things"/>
                </div>
                <div className="col-md-3">
                    <Card links="/service" title="service"/>
                </div>
                <div className="col-md-3">
                    <Card links="/Relationship" title="Relationships"/>
                </div>
                <div className="col-md-3">
                    <Card  title="Apps"/>
                </div>
                </div>
                </div>
        </div>
    )
}
