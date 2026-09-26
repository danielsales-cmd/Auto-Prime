const parametros = new URLSearchParams(window.location.search);

const carro = parametros.get("carro");

console.log(carro);

const veiculos = {
    onix: {
        nome: "Chevrolet Onix",
        preco: "R$ 72.990,00",
        ano: "2022",
        quilometragem: "45.000 KM",
        combustivel: "Flex",
        cambio: "Manual",
        cor: "Branco",
        imagem: "img/Onix.jpg",
        descricao:"O Chevrolet Onix 2022 é um hatch compacto muito econômico que oferece motores 1.0 aspirado ou turbo e excelentes itens de segurança de série",
        caracteristicas:[
        "Motor 1.0 Aspirado: 82 cv (etanol) / 78 cv (gasolina) com câmbio manual de 6 marchas.",
        "Motor 1.0 Turbo: 116 cv (etanol/gasolina) com câmbio manual ou automático de 6 marchas.",
        "Correia dentada: Nos modelos turbo, usa correia banhada a óleo, que exige troca rigorosa do óleo recomendado.",
        ],
        consumo:[
        "1.0 Aspirado Manual: Faz cerca de 9,9 km/l na cidade e 11,7 km/l na estrada com etanol (e até 16,7 km/l na estrada com gasolina).",
        "1.0 Turbo Automático: Faz cerca de 8,3 km/l na cidade e 10,7 km/l na estrada com etanol (chegando a 15 km/l na estrada com gasolina)."
        ]
    },

    tcross: {
        nome: "Volkswagen T-Cross",
        preco: "R$ 119.990,00",
        ano: "2023",
        quilometragem: "32.000 KM",
        combustivel: "Flex",
        cambio: "Automático",
        cor: "Cinza",
        imagem: "img/T-cross.jpg",
        descricao:"O Volkswagen T-Cross 2023 é um SUV compacto vendido em quatro versões principais no Brasil, todas com câmbio automático de 6 marchas.",
        caracteristicas:[
        "200 TSI / Sense 200 TSI / Comfortline 200 TSI: Motor 1.0 turbo flex de 3 cilindros, com até 128 cv com etanol (116 cv com gasolina) e 20,4 kgfm de torque.",
        " Highline 250 TSI: Motor 1.4 turbo flex de 4 cilindros, com 150 cv e 25,5 kgfm de torque."
        ],
        consumo:[
        " Cidade: Aprox. 8,3 a 8,4 km/l (etanol) / 11 a 12 km/l (gasolina).",
        "Estrada: Aprox. 13,5 km/l (gasolina)."
        ]
    },

    civic: {
    nome: "Honda Civic",
    preco: "R$ 139.990,00",
    ano: "2023",
    quilometragem: "28.000 KM",
    combustivel: "Flex",
    cambio: "Automático",
    cor: "Preto",
    imagem: "img/Honda-Civic.jpeg",
    descricao:"O Honda Civic 2021 é um sedã médio que faz parte da décima geração do modelo, conhecido pelo design moderno, dirigibilidade esportiva e boa revenda.",
    caracteristicas:[
    "Motor 2.0 Flex (LX, Sport, EX e EXL): Rende até 155 cv de potência a 6.300 rpm e 19,5 kgfm de torque, acoplado a um câmbio automáticoCVT (com simulação de 7 marchas e borboletas no volante nas versões Sport, EX e EXL).",
    "Motor 1.5 Turbo a Gasolina (Touring): Rende 173 cv a 5.500 rpm e 22,4 kgfm de torque linear, também com transmissão CVT."
    ],
    consumo:[
    "Motor 2.0 (Gasolina): Cerca de 10,6 km/l na cidade e 12,9 km/l na estrada.",
    "Motor 2.0 (Etanol): Cerca de 7,4 km/l na cidade e 9,1 km/l na estrada.",
    "Cerca de 11,8 km/l na cidade e 14,4 km/l na estrada."
    ]
}
};
console.log(veiculos[carro]);

const dadosCarro = veiculos[carro];

console.log(dadosCarro.nome);

document.getElementById("nome-veiculo").textContent = dadosCarro.nome;

document.getElementById("descricao-veiculo").textContent = dadosCarro.descricao;

document.getElementById("preco-veiculo").textContent = dadosCarro.preco;

document.getElementById("ano-veiculo").textContent = dadosCarro.ano;

document.getElementById("quilometragem-veiculo").textContent = dadosCarro.quilometragem;

document.getElementById("combustivel-veiculo").textContent = dadosCarro.combustivel;

document.getElementById("cambio-veiculo").textContent = dadosCarro.cambio;

document.getElementById("cor-veiculo").textContent = dadosCarro.cor;

document.getElementById("imagem-veiculo").src = dadosCarro.imagem;


const listaCaracteristicas = document.getElementById("caracteristicas-veiculo");

listaCaracteristicas.innerHTML = "";

dadosCarro.caracteristicas.forEach(function(caracteristica) {

    const item = document.createElement("li");

    item.textContent = caracteristica;

    listaCaracteristicas.appendChild(item);

});
const listaConsumo = document.getElementById("consumo-veiculo");

listaConsumo.innerHTML = "";

dadosCarro.consumo.forEach(function(consumo) {
    const item = document.createElement("li");
    item.textContent = consumo;
    listaConsumo.appendChild(item);
});