const questions = document.querySelectorAll(".question");
questions.forEach((question)=>{
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", ()=>{
        questions.forEach((e)=>{
            if(e !== question){
                e.parentElement.classList.remove("show-text")
            }
        })
        question.parentElement.classList.toggle("show-text");
        btn.classList.toggle("rotate");
    })
    
})