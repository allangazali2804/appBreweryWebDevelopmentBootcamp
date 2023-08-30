let uang = prompt("Berapa banyak uang yang kamu punya?");
let hargaSusu = prompt("Berapa harga sebotol susu?");

function beliSusu(uang, hargaSusu){
    alert("Kamu dapat membeli " + hitungBotol(uang, hargaSusu) + " botol susu "
        + "dan kembaliannya adalah Rp" + hitungKembalian(uang, hargaSusu));
}

function hitungBotol(uangMula, hargaSebotol){
    var botol = Math.floor(uangMula/hargaSebotol);
    return botol;
}

function hitungKembalian(jumlahMula, hargaBotol){
    var kembalian = jumlahMula % hargaBotol;
    return kembalian;
}

beliSusu(uang, hargaSusu);
