
const animateWorkflow = (action) => {

    const workflowItems = document.querySelectorAll(".work");

    workflowItems.forEach((element) => {
        if(action === "remove") element.classList.remove("workflow-item");
        if(action === "add") element.classList.add("workflow-item");
    });
};

const workflowObserver = new IntersectionObserver((entries) => {
    const workflow = entries[0];
    if (workflow.intersectionRatio <= 0 || workflow.length < 0) {
        //animateWorkflow("remove")
        return;
    } else {
        animateWorkflow("add");
    }
});

workflowObserver.observe(document.querySelector(".workflow"));

const blogObserver = new IntersectionObserver((entries) => {
    const blog = entries[0];
    if (blog.intersectionRatio <= 0) {
        return;
    } else {
        const blogItems = blog.target.querySelectorAll(".blog-card");
        blogItems.forEach((element) => {
            element.classList.add("blog-card--animate");
        });
    }
});

blogObserver.observe(document.querySelector(".blog-container"));