import React, { Component } from 'react'
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
// import items from './Mock/Task'

import {filter, includes, orderBy, remove, reject} from 'lodash'

const { v4: uuidv4 } = require('uuid');

export default class App extends Component {
	constructor(props){
        super(props)
        this.state = {
            isShowForm		: false,
			// items			: items,
			items			: [],
			strSearch		: '',
			sort_by			: 'name',
            sort_dir		: 'asc',
			itemSelected	: ''
        }
		this.handleToogleForm 	= this.handleToogleForm.bind(this)
		this.handleSearch 		= this.handleSearch.bind(this)
    }
	handleToogleForm(){
		this.setState({
			isShowForm: !this.state.isShowForm,
			itemSelected: ''
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
	handleDelete=(id)=>{
		let items = this.state.items
		remove(items,(item)=>{
			return item.id === id
		})
		this.setState({items: items})
	}
	handleCancel=()=>{
		this.setState({isShowForm: false})
	}
	handleSubmit=(item)=>{
		let items =this.state.items
		let id = ''
		if (item.id!==''){ //edti
			items = reject(items, {id: item.id})
			id = item.id
		}
		else{//add
			id = uuidv4()
		}
		items.push({
			id: id,
			name: item.name,
			level: +item.level
		})
		this.setState({
			items: items,
			isShowForm: false
		})
	}
	handleEdit=(item)=>{
		this.setState({
			itemSelected: item,
			isShowForm:true	
		})
	}

	render() {
		let {isShowForm, strSearch,sort_by, sort_dir, itemSelected} = this.state
		let itemOrigin 	= [...this.state.items]
		let items 		= []
		let eleForm 	= null
		

		// Search item 
		items = filter(itemOrigin,(item)=>{
			return includes(item.name.toLowerCase(),strSearch.toLowerCase())
		})
		
		// Sort
		items = orderBy(items,[sort_by],[sort_dir])

		if (isShowForm) {
			eleForm = <Form 
				itemSelected ={itemSelected}
				onClickSubmit ={this.handleSubmit}
				onClickCancel={this.handleCancel}
			/>
		}
		return (
			<React.Fragment>
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
				<List 
					onClickEdit = {this.handleEdit}
					onClickDelete = {this.handleDelete}
					items={items}/>
			</React.Fragment>
		)
	}
}
