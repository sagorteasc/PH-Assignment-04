const cards = document.getElementById('cards');
document.getElementById('interview-section').addEventListener('click', function () {
    this.className = 'btn bg-[#3B82F6] font-medium text-white px-3 py-2 rounded';
    cards.innerHTML = '';
    cards.innerHTML = `
        <div class="card bg-base-100 py-10 shadow-sm">
            <figure class="px-10 pt-10">
                <img src="Image/jobs.png" alt="" class="rounded-xl mb-5" />
            </figure>
            <div class="card-body items-center text-center">
                <h3 class="font-bold text-2xl text-[#002C5C]">No jobs available</h3>
                <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
        </div>
    `
})