// Formata o CPF no evento onchange
document.querySelector("#cpf").addEventListener("change", (event) => {
  event.target.value = event.target.value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); // Aplica o formato 000.000.000-00
});

// Formata o RG no evento onchange
document.querySelector("#rg").addEventListener("change", (event) => {
  event.target.value = event.target.value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4"); // Aplica o formato 00.000.000-0
});

document.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = $("#name").val();
  const password = $("#pswd").val();
  const rg = $("#rg").val();
  const cpf = $("#cpf").val();
  const dataNasc = $("#birth").val();

  // Função para formatar data do padrão americano para o formato brasileiro
  const formatarDataParaPtBr = (data) => {
    const [ano, mes, dia] = data.split("-"); // Divide a data no formato YYYY-MM-DD
    return `${dia}/${mes}/${ano}`; // Retorna a data no formato DD/MM/YYYY
  };

  const dataNascBr = formatarDataParaPtBr(dataNasc); // Data formatada para o padrão brasileiro

  console.log(username, password, rg, cpf, dataNascBr);

  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Regex para CPF no formato 000.000.000-00
  const rgRegex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/; // Regex para RG no formato 00.000.000-0
  let isValid = true;

  // Validação do CPF
  if (!cpfRegex.test(cpf)) {
    alert("O CPF deve estar no formato 000.000.000-00.");
    isValid = false;
  }

  // Validação do RG
  if (!rgRegex.test(rg)) {
    alert("O RG deve estar no formato 00.000.000-0.");
    isValid = false;
  }

  // Mensagem final
  if (isValid) {
    console.log("Dados válidos!");
    alert("Formulário enviado com sucesso!");
  }
});
