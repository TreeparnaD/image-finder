 var jokes = document.querySelector("#joke");
 const jokebtn = document.querySelector("#jokebtn")
 
 
  
const fun =  ()=> {

    const setHeader ={
        headers:{
            Accept :"application/json"
        }
    }

   fetch('https://icanhazdadjoke.com',  setHeader)
   .then((res)=>res.json())
   .then((data)=> { jokes.innerHTML=data.joke})
   .catch((error)=>{console.log(error);})

    }
const fun2 =()=>{

    let image=document.getElementById("img1")
    if (image.src.match("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODA3MWVlNDEyYTY2NDZmZWNjYzJkMGYwOWJiNTkwOGIwM2E5MzBlNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/fUYhyT9IjftxrxJXcE/giphy.gif")){
     image.src="https://media.tenor.com/UiRQSD7KJykAAAAC/laugh-dog.gif"
    }
    else if(image.src.match("https://media.tenor.com/UiRQSD7KJykAAAAC/laugh-dog.gif")){
     image.src="https://i.pinimg.com/originals/4a/00/f2/4a00f26009a636de2ba697ffdceb13e6.gif"
    }else if(image.src.match("https://i.pinimg.com/originals/4a/00/f2/4a00f26009a636de2ba697ffdceb13e6.gif")){
        image.src="https://gifscenter.com/wp-content/uploads/2017/05/minion%20animated%20laughing%20emoticon.gif"
    }

    else if(image.src.match("https://gifscenter.com/wp-content/uploads/2017/05/minion%20animated%20laughing%20emoticon.gif"))
    {
        image.src="https://media.tenor.com/WMl9mhz4pDgAAAAM/cute-laugh.gif"
    }
    else{
     image.src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODA3MWVlNDEyYTY2NDZmZWNjYzJkMGYwOWJiNTkwOGIwM2E5MzBlNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/fUYhyT9IjftxrxJXcE/giphy.gif"
 
    }
 

}
    
    jokebtn.addEventListener("click",fun)
    jokebtn.addEventListener("click",fun2)

    fun();
       

  