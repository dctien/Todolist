import React, { Component } from 'react'
import Item from '../components/Item'

export default class List extends Component {
    render() {
        let items = this.props.items
        let eleItem = items.map((item,index)=>{
            return(
                <Item 
                    item  = {item}
                    key   = {index}
                    index = {index}/>
            )
        })
        return (
            <div className="panel panel-success">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                        <th style={{width: '10%'}} className="text-center">#</th>
                        <th>Task</th>
                        <th style={{width: '20%'}} className="text-center">Level</th>
                        <th style={{width: '20%'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eleItem}
                    </tbody>
                </table>
            </div>
        )
    }
}
