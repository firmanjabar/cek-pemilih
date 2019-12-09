window.addEventListener('load', (event) => {
    function printCaPres() {
        let html = "";
        pemilih.forEach(function (capres) {
            html += `
            <div class="card m-2">
                <img src="${capres.img}" class="card-img-top" />
                <div class="text-muted text-center">
                    <h5 class="my-3">
                        ${capres.name}
                    </h5>
                    <p class="mb-4">${capres.id}</p>
                </div>
            </div>
            `;
            document.getElementById('app').innerHTML = html;
        });
    }
    printCaPres();
});

const btnSuara = document.getElementById('hitungSuara');

btnSuara.addEventListener('click', function () {
    let output1 = 0;
    let output2 = 0;
    const timer1 = setInterval(() => {
        document.getElementById('1').innerHTML = output1;
        document.getElementById('2').innerHTML = output2;

        if (output1 >= output2) {
            if (output1 === pemilih[0].suara) {
                clearInterval(timer1);
            } else {
                output1++;
            }
            if (output2 === pemilih[1].suara) {
                output2 = pemilih[1].suara;
            } else {
                output2++;
            }
        } else {
            if (output1 === pemilih[0].suara) {
                output1 = pemilih[0].suara;
            } else {
                output1++;
            }
            if (output2 === pemilih[1].suara) {
                clearInterval(timer1);
            } else {
                output2++;
            }
        }
    }, 200);

});