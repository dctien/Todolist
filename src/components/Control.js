import React, { Component } from 'react'
import Search from '../components/Sreach'
import Sort from '../components/Sort'

export default class Control extends Component {
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd(){
        this.props.onClickAdd()
    }
    render() {
        let eleButton = <button type="button" onClick={this.handleAdd} className="btn btn-info btn-block">Add Task</button>
        if(this.props.isShowForm){
            eleButton = <button type="button" onClick={this.handleAdd} className="btn btn-success btn-block">Clock Task</button>
        }

        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search/>
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort/>
                {/* SORT : END */}

                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {eleButton}
                    {/* <button type="button" className="btn btn-info btn-block">Add Task</button> */}
                </div>
                {/* ADD : END */}
            </div>
        )
    }
}
