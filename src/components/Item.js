import React, { Component } from 'react'

export default class Item extends Component {
    showLevel(number){
        let eleLevel = <span className="label label-info">Small</span>
        if(number===1){
            eleLevel = <span className="label label-warning">Medium</span>
        }else if(number===2){
            eleLevel = <span className="label label-danger">High</span>
        }
        return eleLevel
    }
    render() {
        let {item,index} = this.props
        return (
            <tr>
                <td className="text-center">{index+1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showLevel(item.level)}</td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}
