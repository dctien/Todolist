import React, { Component } from 'react'
import Search from './Sreach'
import Sort from './Sort'

export default class Control extends Component {
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd(){
        this.props.onClickAdd()
    }
    render() {
        let {sort_by,sort_dir} = this.props
        let eleButton = <button type="button" onClick={this.handleAdd} className="btn btn-info btn-block">Add Task</button>
        if(this.props.isShowForm){
            eleButton = <button type="button" onClick={this.handleAdd} className="btn btn-success btn-block">Clock Task</button>
        }

        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search onClickSearch={this.props.onClickSearch}/>
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort
                    onClickSort = {this.props.handleSort}
                    sort_by={sort_by}
                    sort_dir={sort_dir}/>
                {/* SORT : END */}

                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {eleButton}
                </div>
                {/* ADD : END */}
            </div>
        )
    }
}
