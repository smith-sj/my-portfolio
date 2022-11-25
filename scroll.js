const projects = document.querySelectorAll(".project-container");


function handleScroll() {
    projects.forEach((project) => {
            let projectRect = project.getBoundingClientRect();
            if (projectRect.y < window.innerHeight * 0.6 && projectRect.y > window.innerHeight * 0.15) {
                project.classList.add("scrolled-project");
            } else {
                project.classList.remove("scrolled-project");
            }
        
    });
}


window.addEventListener('scroll', handleScroll)
