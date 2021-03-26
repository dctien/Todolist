import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            task_name:'',
            task_level:''
        }
    }
    handleCancel=()=>{
        this.props.onClickCancel()
    }
    handleChange=(event)=>{
        let target = event.target;
        // let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            // [name]: value
            [name]: target.value
        });
    }
    handleSubmit=(event)=>{
        let {task_name,task_level}=this.state
        this.props.onClickSubmit(task_name,task_level)
        event.preventDefault()
        console.log(this.state.task_name + " - "+ this.state.task_level)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label className="sr-only">label</label>
                    <input name="task_name" value={this.state.task_name} onChange={this.handleChange} type="text" className="form-control" placeholder="Task Name" />
                    </div>
                    <div className="form-group">
                    <label className="sr-only">label</label>
                    <select name="task_level" value={this.state.task_level} onChange={this.handleChange} id="inputDs" className="form-control" required="required">
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                    </div>
                    <button type="submit" value="submit" className="btn btn-primary">Submit</button>
                    <button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
                </form>
                </div>
			</div>
        )
    }
}
