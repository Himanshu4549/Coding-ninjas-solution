/*
Problem statement

You are working on a system that assigns different access levels to employees based on their job titles and their years of experience.
Write a program that assigns the access level of employees depending on their job titles and years of experience.

Objectives:-

1- Use the following conditions for assigning the access level:
2- Employees with the job title Manager should be assigned Full Access regardless of the year of experience.
3- For Employees with the job title Supervisor if the years of experience is "5 or more", then Full Access should be assigned. Otherwise, they should be assigned Partial Access.
4- For Employees with the job title Associate, if the years of experience is 3 or more, then "Partial Access" should be assigned. Otherwise, they should be assigned "Limited Access."
5- Employees with any other job title with 2 or more years of experience should be assigned "Limited Access." Otherwise, they should be assigned "Trainee Access."
*/

function main(jobTitle, yearsOfExperience) {
    let accessLevel;

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
    
      
      
      
