// delete data from the UI
function deleteData(button) {
    const deleteJob = button.parentNode.parentNode.parentNode;
    // console.log(deleteJob);

    const badge = deleteJob.querySelector('.notApplied').innerText.trim();

    // interview and reject counter decreasing
    let interviewCounter = document.getElementById('interviewCounter');
    let rejectCounter = document.getElementById('rejectCounter');
    let interviewCount = parseInt(interviewCounter.innerText);
    let rejectCount = parseInt(rejectCounter.innerText);
    if (badge === 'Interview') {
        interviewCount--;
        interviewCounter.innerText = interviewCount;
    }
    else if (badge === 'Rejected') {
        rejectCount--;
        rejectCounter.innerText = rejectCount;
    }

    deleteJob.remove();
    jobCounter();
    statusChangebadge();
}

// decrease the counter value
function jobCounter() {
    const jobcount = document.getElementById('jobs');
    let job = parseInt(jobcount.innerText);
    // console.log(typeof job)
    job--;
    jobcount.innerHTML = job;

    const sectionTotalCount = document.getElementById('sectionTotalJobs');
    let sectionTotal = parseInt(sectionTotalCount.innerText);
    sectionTotal--;
    sectionTotalCount.innerHTML = sectionTotal;

}