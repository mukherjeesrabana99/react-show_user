import React from 'react';
import FetchUser from './FetchUser'
import './App.css';

class App extends React.Component{
  state={loading:true, users:[]};
  componentDidMount(){
    this.fetchUser()
  }
  fetchUser=async()=>{
    const url="https://api.randomuser.me/?results=4"
    const response=await fetch(url);
    const data=await response.json();
    console.log(data.results);
    this.setState({loading:false, users:data.results})
  }
  render(){
    if(this.state.loading){
      return <div><h1>Loading Users..</h1></div>
    }
    if(this.state.users.length==0){
      return <div>Loading to show the users</div>
    }
    return (
    <div className="App">
    {this.state.users.map(user=>(
      <FetchUser key={user.id.value} city={user.location.city} state={user.location.state} gender={user.gender} title={user.name.title} first_name={user.name.first} last_name={user.name.last} picture={user.picture.thumbnail}/>

    ))}  
    </div>
    
  );

  }

}


export default App;
