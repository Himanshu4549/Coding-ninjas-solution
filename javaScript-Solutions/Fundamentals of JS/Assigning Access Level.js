//Write the program here to get the access level of the user depending upon the jobTitle and yearsOfExperience.
//Store your final result in the "accessLevel" variable.
//Please do not alter anything else in the starter code

function main(jobTitle, yearsOfExperience) {
    let accessLevel;
    //write your code here
     
  
  switch(jobTitle){
      case "Manager":
          accessLevel = "Full Access";
          break;
      case "Supervisor":
          if(yearsOfExperience >=5){
              accessLevel ="Full Accesss";
          }else{
              accessLevel ="Partial Access";
          }
          break;
      case "Associate":
              if( yearsOfExperience >=3){
                  accessLevel = "Partial Access";
              }else{
                  accessLevel ="Limited Access";
              }
              break;
       default:
                  if(yearsOfExperience >=2){
                  accessLevel = "Limited Access";
                  }else{
                      accessLevel = "Trainee Access";
                  }
  
  }
  console.log(accessLevel);
      return accessLevel;
    }
    
      
      
      