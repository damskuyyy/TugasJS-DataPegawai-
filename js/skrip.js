function dataPerson(){
    let forms = document.getElementById('form');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobi = forms.hobi.value;

    let input = '<br> Nama' + nama + 'Pekerjaan '+ pekerjaan + 'Hobby'+ hobi;
            let no_input = 'Maaf Lengakpi Form Terlebih Dahulu';
            let hasil = (nama && pekerjaan && hobi !='') ? input : no_input;

            document.getElementById('hasil').innerHTML = hasil;

    //Tugasnya adalah 1. isian nama 2. isian pekerjaan 3. isian hobby
}