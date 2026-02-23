// delete data from the UI
function deleteData(button) {
    const deleteJob = button.parentNode.parentNode.parentNode;
    // console.log(deleteJob);
    deleteJob.innerHTML = '';
    jobCounter()
}

// decrease the counter value
function jobCounter() {
    const jobcount = document.getElementById('jobs');
    let job = parseInt(jobcount.innerText, 0);
    // console.log(typeof job)
    job--;
    jobcount.innerHTML = job;
}