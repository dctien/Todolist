import React, { Component } from 'react'
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
import items from './Mock/Task'

import {filter, includes, orderBy} from 'lodash'

export default class App extends Component {
	constructor(props){
        super(props)
        this.state = {
            isShowForm	: false,
			items		: items,
			strSearch	: '',
			sort_by		:'name',
            sort_dir	:'asc'
        }
		this.handleToogleForm 	= this.handleToogleForm.bind(this)
		this.handleSearch 		= this.handleSearch.bind(this)
    }
	handleToogleForm(){
		this.setState({
			isShowForm: !this.state.isShowForm
		})
	}
	handleSearch(value){
		this.setState({strSearch: value})  
	}
	handleSort=(sort_by,sort_dir)=>{
		this.setState({
			sort_by: sort_by,
			sort_dir: sort_dir
		})
	}
	render() {
		let {isShowForm, strSearch,sort_by, sort_dir} = this.state
		let itemOrgin 	= [...this.state.items]
		let items 		= []
		let eleForm 	= null
		

		// // Search item 
		items = filter(itemOrgin,(item)=>{
			return includes(item.name.toLowerCase(),strSearch.toLowerCase())
		})
		
		// //Sort
		items = orderBy(items,[sort_by],[sort_dir])

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
					onClickSearch 	= {this.handleSearch}
					onClickAdd		= {this.handleToogleForm}
					isShowForm		= {isShowForm}
					sort_by			= {sort_by}
					sort_dir		= {sort_dir}
					handleSort		= {this.handleSort}/>
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
