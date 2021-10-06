function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4) {
    return { valido: false, texto: "A senha deve ter no mínimo 4 dígitos" };
  } else if (senha.length > 70) {
    return { valido: false, texto: "A senha deve ter no máximo 70 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCpf, validarSenha };
