const totalJob = 8;

// interview button
function interviewButton(button) {
    // alert('hello');
    const interviewCard = button.closest('.card');
    const interviewBadge = interviewCard.querySelector('.notApplied');
    const interviewUpdatedBadge = interviewBadge.innerText.trim();

    let interviewCounter = document.getElementById('interviewCounter');
    let rejectCounter = document.getElementById('rejectCounter');
    let interviewCount = parseInt(interviewCounter.innerText, 0);
    let rejectCount = parseInt(rejectCounter.innerText, 0);

    // total value validation
    if (interviewCount + rejectCount >= totalJob) {
        return;
    }

    // interview tab reject button functionality
    if (interviewUpdatedBadge === 'Interview') {
        return;
    }
    else if (interviewUpdatedBadge === 'Rejected') {
        rejectCount--;
        rejectCounter.innerHTML = rejectCount;
    }
    interviewCount++;
    interviewCounter.innerHTML = interviewCount;
}

// reject button
function rejectButton(button) {
    const rejectCard = button.closest('.card');
    const rejectBadge = rejectCard.querySelector('.notApplied');
    const rejectUpdatedBadge = rejectBadge.innerText.trim();

    let rejectCounter = document.getElementById('rejectCounter');
    let interviewCounter = document.getElementById('interviewCounter');
    let rejectCount = parseInt(rejectCounter.innerText, 0);
    let interviewCount = parseInt(interviewCounter.innerText, 0);

    // total value validation
    if (interviewCount + rejectCount >= totalJob) {
        return;
    }

    // reject tab interview button functionality
    if (rejectUpdatedBadge === 'Rejected') {
        return;
    }
    else if (rejectUpdatedBadge === 'Interview') {
        interviewCount--;
        interviewCounter.innerHTML = interviewCount;
    }
    rejectCount++;
    rejectCounter.innerHTML = rejectCount;
}