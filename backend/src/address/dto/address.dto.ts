export class AddressCreateDTO {
  /**
   * Identificador único do user
   * @example d90b229c-02ee-4071-9ed5-b2c18335496d
   */
  user_id: string;

  /**
   * Código de Endereçamento Postal(CEP) no Brasil
   * @example 01001000
   */
  cep: string;

  /**
   * Endereço
   * @example Avenida Alameda das Travessas
   */
  address: string;

  /**
   * Numero de localização do imovel
   * @example 44
   */
  number: string;

  /**
   * Complemento do endereço
   */
  complement?: string;

  /**
   * Nome do bairro
   * @example Santa Maria
   */
  neighborhood: string;

  /**
   * Cidade
   * @example Vitória
   */
  city: string;

  /**
   * Estado
   * @example Espirito Santo
   */
  state: string;

  /**
   * Ponto de Referência do endereço
   */
  landmark?: string;

  /**
   * Numero para contato
   * @example 27998477929
   */
  cell_phone: string;
}

export class Address extends AddressCreateDTO {
  id: string;
}
