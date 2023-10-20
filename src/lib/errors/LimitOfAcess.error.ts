
class LimitOfAccess extends Error {
    constructor(mensagem: string) {
      super(mensagem);
      this.name = 'Limite de acesso atingido'; // Opcional: Defina um nome personalizado para o erro
    }
  }
  