import React from 'react'
import reactDom from 'react-dom'

class ProfileImage extends React.Component{
    constructor(){
        super();
        this.state={
            uploadImage:null
        }  
    }
     changeProfileImage =(event)=>{
          console.log(event.target.files[0]);
          this.setState({uploadImage:event.target.files[0]})
       
            }

    updateProfileHandler =(e)=>{
       e.preventDefault();
        // create object of form data
        const formData = new FormData();

        //profileImages should be name of the name field of jsx
        formData.append('profileImage');

        //Api integration for send data into database
        
    }
            
    render(){
        return (
            <div>
                
               <label>Profile Image</label>
                <input type="file" name='profileImage' onChange={this.changeProfileImage} />
                <button type="submit" onChange={this.updateProfileHandler}>Submit</button>
            </div>
        )
    }
    
}

export default ProfileImage
