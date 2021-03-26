import React, { Component } from 'react'

export default class Sreach extends Component {
    constructor(props){
        super(props)
        this.state = {
			strSearch	: '',
        }
    }
    handleSearch=()=>{
        this.props.onClickSearch(this.state.strSearch)
    }
    handleChange=(e)=>{
        this.setState({strSearch: e.target.value})
    }
    handleClear=()=>{
        this.setState({strSearch:''})
        this.props.onClickSearch('')
    }
    handleEnter=(e)=>{
        if(e.key === "Enter"){
            this.props.onClickSearch(this.state.strSearch)
        }

        return false;
    }
    render() {
        let strSearch = this.state.strSearch
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input value={strSearch} onKeyPress={this.handleEnter} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button onClick={this.handleSearch}  className="btn btn-info" type="button">Go!</button>
                        <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear</button>
                    </span>
                </div>
            </div>
        )
    }
}
