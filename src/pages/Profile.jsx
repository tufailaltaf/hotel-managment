import React,{useEffect} from 'react'
import './profile.css'
import fire from '../firebase'
import { useState } from 'react'

function Profile() {
  const [users, setusers]= useState([])
  const [checkUser , setCheckUser] = useState()

  useEffect(() => {
  fire.database().ref('users').on('value',data=>{
    let userobj = data.val()
    let keys = Object.keys(data.val())
    var userlist =[]
    for(let i = 0 ; i< keys.length; i++){
      let key = keys[i]
      let User = userobj[key]
      let userObj = {User}
      userlist.push(userObj)
    }
    setusers(userlist)
  })
  
  
    }, [])

    // function authListener(){
    //   fire.auth().onAuthStateChanged((user)=>{
    //     if(user){
    //      setCheckUser(true)
         
        
    //     }
    //     else{
    //       setCheckUser(null)
    //     }
    //   })
    // }
  console.log(users , checkUser)
  
  
    return (
      <div className="student-profile py-4">
<div className="container">
  <div className="row">
    <div className="col-lg-4">
      <div className="card shadow-sm">
        <div className="card-header bg-transparent text-center">
          <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp" />
          <h3>{users.fname} {users.lname}</h3>
        </div>
        <div className="card-body">
          <p className="mb-0"><strong className="pr-1">Email ID:</strong>{users.email}</p>
          <p className="mb-0"><strong className="pr-1">Contact</strong>{users.num}</p>
          <p className="mb-0"><strong className="pr-1">Location</strong>{users.loc}</p>
          <p className="mb-0"><strong className="pr-1">Gender</strong>{users.gender}</p>

        </div>
      </div>
    </div>
    <div className="col-lg-8">
      <div className="card shadow-sm">
       
        {/* <div className="card-body pt-0">
          <table className="table table-bordered">
            <tbody><tr>
                <th width="30%">Roll</th>
                <td width="2%">:</td>
                <td>125</td>
              </tr>
              <tr>
                <th width="30%">Academic Year	</th>
                <td width="2%">:</td>
                <td>2020</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>Male</td>
              </tr>
             
            </tbody></table>
        </div> */}
      </div>
      <div style={{height: 26}} />
      <div className="card shadow-sm">
        <div className="card-header bg-transparent border-0">
          <h3 className="mb-0"><i className="far fa-clone pr-1" />Other Information</h3>
        </div>
        <div className="card-body pt-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  )
  
    
}

export default Profile
