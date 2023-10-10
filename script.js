function converter() {
    var temperatura_txt = window.document.getElementById('txttemp');
    var res = window.document.getElementById('res');
    if (temperatura_txt.value.length == 0) {
        window.alert('Verifique o valor inserido e tente novamente.');
    } else {
        var temperatura = Number(temperatura_txt.value);
        var opcao = window.document.getElementsByName('txttipo');
        if (opcao[0].checked) {
            var temperatura_final = (temperatura * (9/5)) + 32;
            res.innerHTML = `${temperatura.toFixed(1)} ºC = ${temperatura_final.toFixed(1)} ºF`;
        } else if (opcao[1].checked) {
            var temperatura_final = (temperatura - 32) * (5/9)
            res.innerHTML = `${temperatura.toFixed(1)} ºF = ${temperatura_final.toFixed(1)} ºC`;
        } else if (opcao[2].checked) {
            var temperatura_final = temperatura + 273.15;
            res.innerHTML = `${temperatura.toFixed(1)} ºC = ${temperatura_final.toFixed(1)} K`;
        } else if (opcao[3].checked) {
            var temperatura_final = temperatura - 273.15;
            res.innerHTML = `${temperatura.toFixed(1)} K = ${temperatura_final.toFixed(1)} ºC`;
        } else if (opcao[4].checked) {
            var temperatura_final = (temperatura - 32) * (5/9) + 273.1;
            res.innerHTML = `${temperatura.toFixed(1)} ºF = ${temperatura_final.toFixed(1)} K`;
        } else if (opcao[5].checked) {
            var temperatura_final = (temperatura - 273.15) * (9/5) + 32;
            res.innerHTML = `${temperatura.toFixed(1)} K = ${temperatura_final.toFixed(1)} ºF`;
        } else {
            window.alert('Opção indisponível');
        }
    }
}