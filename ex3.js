function getDomain(email){
    for(i in email){
        
 
        if (email[i]==="@") return email.slice(i);
        }}



        console.log(getDomain("yassine.bahajou@gmail.com"));
