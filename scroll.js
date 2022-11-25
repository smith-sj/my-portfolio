const projects = document.querySelectorAll(".project-container");


function handleScroll() {
    projects.forEach((project) => {
        if (window.innerWidth < 560) {
            let projectRect = project.getBoundingClientRect();
            if (projectRect.y < window.innerHeight * 0.6 && projectRect.y > window.innerHeight * 0.15) {
                project.classList.add("scrolled-project");
            } else {
                project.classList.remove("scrolled-project");
            }
        } else {
                        projects.forEach((project) => {
                project.classList.remove("scrolled-project");
            });
        }
    });
}


window.addEventListener('scroll', handleScroll)
// window.addEventListener(resize, () => {
//     if (window.innerWidth < 500) {
//         window.addEventListener("scroll", handleScroll);
//     } else {
//         window.removeEventListener("scroll", handleScroll);
//         projects.forEach((project) => {
//             project.classList.remove("scrolled-project");
//         });
//     }
// })