
const animateWorkflow = (workflow, action) => {
    const workflowItems = workflow.target.querySelector("#workflow1").querySelectorAll(".work");
    workflowItems.forEach((element) => {
        if(action === "remove") element.classList.remove("workflow-item");
        if(action === "add") element.classList.add("workflow-item");
    });
};

const intersectionObserver = new IntersectionObserver((entries) => {
    const workflow = entries[0];
    if (workflow.intersectionRatio <= 0) {
        //animateWorkflow(workflow, "remove")
    } else {
        animateWorkflow(workflow, "add");
    }
});

intersectionObserver.observe(document.querySelector(".workflow"));
