// interview button
function interviewButton(button) {
    // alert('hello');
    const interviewCard = button.parentNode.parentNode.parentNode;
    const interviewBadge = interviewCard.querySelector('.notApplied');
    const newInterviewStatus = interviewBadge.innerText.trim();

    let interviewCounter = document.getElementById('interviewCounter');
    let rejectCounter = document.getElementById('rejectCounter');
    let interviewCount = parseInt(interviewCounter.innerText);
    let rejectCount = parseInt(rejectCounter.innerText);

    // total value validation
    const totalJob = document.querySelectorAll('#cards .card').length;
    if (interviewCount + rejectCount >= totalJob) {
        return;
    }

    // interview tab reject button functionality
    if (newInterviewStatus === 'Interview') {
        return;
    }
    else if (newInterviewStatus === 'Rejected') {
        rejectCount--;
        rejectCounter.innerHTML = rejectCount;
    }
    interviewCount++;
    interviewCounter.innerHTML = interviewCount;
    interviewBadge.innerText = 'Interview';
    interviewBadge.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded';
    statusChangebadge();
}

// reject button
function rejectButton(button) {
    const rejectCard = button.parentNode.parentNode.parentNode;
    const rejectBadge = rejectCard.querySelector('.notApplied');
    const newRejectStatus = rejectBadge.innerText.trim();

    let rejectCounter = document.getElementById('rejectCounter');
    let interviewCounter = document.getElementById('interviewCounter');
    let rejectCount = parseInt(rejectCounter.innerText);
    let interviewCount = parseInt(interviewCounter.innerText);

    // total value validation
    const totalJob = document.querySelectorAll('#cards .card').length;
    if (interviewCount + rejectCount >= totalJob) {
        return;
    }

    // reject tab interview button functionality
    if (newRejectStatus === 'Rejected') {
        return;
    }
    else if (newRejectStatus === 'Interview') {
        interviewCount--;
        interviewCounter.innerHTML = interviewCount;
    }
    rejectCount++;
    rejectCounter.innerHTML = rejectCount;
    rejectBadge.innerText = 'Rejected';
    rejectBadge.className = 'notApplied font-semibold text-sm text-[#10B981] border-[#10B981] border-1 w-fit mb-2 px-3 py-2 rounded'
    statusChangebadge();
}