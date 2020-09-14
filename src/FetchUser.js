import React from 'react';
import './FetchUser.css'
import './App.css'
function FetchUser(props){
	const gender=props.gender=="male"?"He":"She"
	return(
		<div classname="container">
		<div className="card">
		<img src={props.picture}/>
		<h4>{props.title} {props.first_name} {props.last_name}</h4>
		<p>{gender} lives in {props.city}, {props.state}</p>
		</div>
		
		</div>
		);
}
export default FetchUser;