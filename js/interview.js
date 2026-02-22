const interviewSectionCards = document.getElementById('cards');
document.getElementById('interview-section').addEventListener('click', function () {

    document.getElementById('all-section').classList.remove('bg-[#3B82F6]', 'text-white');
    document.getElementById('rejected-section').classList.remove('bg-[#3B82F6]', 'text-white');
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-3 py-2 rounded';
    interviewSectionCards.classList.add('hidden');

    document.getElementById('no-jobs').classList.remove('hidden');
})