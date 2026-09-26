const marca = document.getElementById("marca");
const ano = document.getElementById("ano"); 
const preco = document.getElementById("preco"); 
const botaoFiltrar = document.querySelector(".filtro-veiculos button"); 
const veiculos = document.querySelectorAll(".card-veiculo"); 
botaoFiltrar.addEventListener("click", function () { const marcaSelecionada = marca.value; 
const anoSelecionado = ano.value; 
const precoSelecionado = preco.value; veiculos.forEach(function (veiculo) { const marcaVeiculo = veiculo.dataset.marca; 
const anoVeiculo = veiculo.dataset.ano; 
const precoVeiculo = Number(veiculo.dataset.preco); 
const correspondeMarca = marcaSelecionada === "" || marcaSelecionada === marcaVeiculo; const correspondeAno = anoSelecionado === "" || anoSelecionado === anoVeiculo; 
const correspondePreco = precoSelecionado === "" || precoVeiculo <= Number(precoSelecionado); 
if (correspondeMarca && correspondeAno && correspondePreco) { veiculo.style.display = "block"; } else { veiculo.style.display = "none"; 
    } 
}
); 
}
);