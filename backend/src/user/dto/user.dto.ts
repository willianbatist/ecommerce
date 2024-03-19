export class UserCreateDTO {
  id?: string;

  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Paulo Salvatore
   */
  name: string;

  /**
   * O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada.
   * Login sem rede social precisa de uma senha.
   * @example email@email.com
   */
  email: string;

  /**
   * É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente
   * é necessário informar uma senha.
   * @example 123@abc
   */
  password: string;

  /**
   * O Cadastro de Pessoa Física(CPF) é o registro de contribuintes mantido pela Receita Federal do Brasil
   * no qual podem se inscrever, uma única vez.
   * @example 27695895733
   */
  cpf: string;

  /**
   * Identifica se é colaborador ou cliente.
   * @example customer
   */
  role: string;

  /**
   * Identificar login Google
   */
  google_status: boolean;

  /**
   * ID Google
   */
  google_id?: string;
}

export class UserValidation {
  /**
   * O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada.
   * Login sem rede social precisa de uma senha.
   * @example email@email.com
   */
  email: string;

  /**
   * O Cadastro de Pessoa Física(CPF) é o registro de contribuintes mantido pela Receita Federal do Brasil
   * no qual podem se inscrever, uma única vez.
   * @example 27695895733
   */
  cpf: string;
}
