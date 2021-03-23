import React, { Component } from 'react'
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
import items from './Mock/Task'

export default class App extends Component {
	constructor(props){
        super(props)
        this.state = {
            isShowForm: false,
			items: items
        }
		this.handleToogleForm = this.handleToogleForm.bind(this)
    }
	handleToogleForm(){
		this.setState({
			isShowForm: !this.state.isShowForm
		})
	}
	render() {
		console.log(this.state.items)
		let isShowForm = this.state.isShowForm
		let items = this.state.items
		let eleForm = null
		if (isShowForm) {
			eleForm = <Form/>
		}
		return (
			<div>
				{/* TITLE : START */}
				<Title/>
				{/* TITLE : END */}

				{/* CONTROL (SEARCH + SORT + ADD) : START */}
				<Control
					onClickAdd={this.handleToogleForm}
					isShowForm={isShowForm}/>
				{/* CONTROL (SEARCH + SORT + ADD) : END */}

				{/* FORM : START */}
				{eleForm}
				{/* FORM : END */}

				{/* LIST : START */}
				<List items={items}/>
			</div>
		)
	}
}
