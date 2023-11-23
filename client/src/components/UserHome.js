import React,{useEffect} from 'react';
import {userProfile} from "../actions/user_action"
import { useDispatch, useSelector } from 'react-redux'
import Image from "../Images/profile2.png"
const UserHome = () => {
    const dispatch = useDispatch() ;
    useEffect(()=>{
        dispatch(userProfile())
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;
    console.log("UserHome",currentUser)
    return (
        <div className="col-md-4 m-auto">
              <div className="card mt-2">
                  <img src={Image} alt="mohen mondal" style={{height:"250px",width:"250px",borderRadius:"50%",marginLeft:"23%"}} />
                  <h3 style={{textAlign:"center"}}>{currentUser && currentUser[0] && currentUser[0].name}</h3>
                  <div style={{backgroundColor:"#2c5c69",padding:"20px"}}>
                   { currentUser && currentUser[0] && currentUser[0].isAdmin ?
                    <p style={{fontSize:"22px",color:"white"}}> <b>User Id : </b>{currentUser && currentUser[0] && currentUser[0].user_id}</p>
                   : <>
                      <p style={{fontSize:"22px",color:"white"}}> <b> Email Id :</b> {currentUser && currentUser[0] && currentUser[0].email}</p>
                  <p style={{fontSize:"22px",color:"white"}}> <b>User ID : </b>{currentUser && currentUser[0] && currentUser[0].user_id}</p>
                   </>}

                 
                  </div>
              </div>
        </div>
    );
};

export default UserHome;