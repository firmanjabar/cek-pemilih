// CEK-PEMILIH

const nipForm = document.querySelector('form');

nipForm.addEventListener('submit', e => {
    e.preventDefault();

    const nip = nipForm.nip.value.trim();
    nipForm.reset();

    //update data
    for (let i = 0; i < pemilih.length; i++) {
        // console.log(pemilih[i].id)
        // console.log(nip)
        if (nip == pemilih[i].id) {
            let html = `
                <img src="${pemilih[i].img}" class="card-img-top" />
                <div class="text-muted text-center">
                    <h5 class="my-3">
                        ${pemilih[i].name}
                    </h5>
                    <p class="mb-4">${pemilih[i].id}</p>
                </div>
            `
            // console.log(pemilih[i].id)
            // console.log(nip)
            document.getElementById('app').innerHTML = html;
            break;
        } else {
            // console.log("error")
            let html = `
                <img src="https://appstore.edgenexus.io/wp-content/uploads/2015/10/404-final-square-400x300.png" class="card-img-top" />
                <div class="text-muted text-center">
                    <h5 class="my-3">
                        Data Not Found
                    </h5>
                    <p class="mb-4">NIP NOT FOUND</p>
                </div>
            `

            document.getElementById('app').innerHTML = html;
        }
    }
});