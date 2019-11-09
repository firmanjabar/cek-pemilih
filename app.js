const pemilih = [{
        id: '1234',
        img: 'https://avatars0.githubusercontent.com/u/45032367?s=460&v=4jpg',
        name: 'Firman Abdul Jabar',
    },
    {
        id: '1235',
        img: 'https://avatars1.githubusercontent.com/u/26153479?s=460&v=4',
        name: 'Rakhmat Khaidir',
    },
];

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

    // pemilih.forEach(cekPemilih);

    // function cekPemilih(value, index, array) {
    //     if (nip == value['id']) {
    //         // console.log(value['id'], value['name'], value['img'])
    //         let html = `
    //             <img src="${value['img']}" class="card-img-top" />
    //             <div class="text-muted text-center">
    //                 <h5 class="my-3">
    //                     ${value['name']}
    //                 </h5>
    //                 <p class="mb-4">${value['id']}</p>
    //             </div>
    //         `

    //         document.getElementById('app').innerHTML = html;
    //     } else {
    // let html = `
    //     <img src="https://via.placeholder.com/400x300" class="card-img-top" />
    //     <div class="text-muted text-center">
    //         <h5 class="my-3">
    //             Data Not Found
    //         </h5>
    //         <p class="mb-4">NIP NOT FOUND</p>
    //     </div>
    // `

    // document.getElementById('app').innerHTML = html;
    // }
    // }
})