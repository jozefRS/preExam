//let y var
//const
//let vs var


      (async() =>{
        try{
        const response =await fetch('https://jsonplaceholder.typicode.com/posts');
        const data= await response.json();
        console.log("datos", data); }catch (error){
        console.log("error", error)
      }finally{
        console.log("finally")

      }

      })();