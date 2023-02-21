const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});



const hiddenProjects = document.querySelectorAll('.hidden');
hiddenProjects.forEach((el)=> observer.observe(el));