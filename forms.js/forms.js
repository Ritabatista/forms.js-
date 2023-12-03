// CadastroCliente.js
import React, { useState } from 'react';

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    celular: '',
    endereco: '',
    mediaGasto: '',
    diaSemana: '',
    horario: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancelar = () => {
    // Lógica para cancelar o cadastro
    alert('Cadastro cancelado');
  };

  const handleSalvar = () => {
    // Lógica para salvar o cadastro
    alert('Cadastro salvo');
    // Limpar o formulário após o salvamento
    setFormData({
      nome: '',
      idade: '',
      celular: '',
      endereco: '',
      mediaGasto: '',
      diaSemana: '',
      horario: '',
    });
  };

  return (
    <div>
      <h2>Cadastro de Cliente</h2>
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="celular">Celular:</label>
          <input
            type="text"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mediaGasto">Média de Gasto por Mês:</label>
          <input
            type="number"
            id="mediaGasto"
            name="mediaGasto"
            value={formData.mediaGasto}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="diaSemana">Dia da Semana:</label>
          <input
            type="text"
            id="diaSemana"
            name="diaSemana"
            value={formData.diaSemana}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="horario">Horário:</label>
          <input
            type="text"
            id="horario"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
          />
        </div>

        <button type="button" style={{ backgroundColor: 'red' }} onClick={handleCancelar}>
          Cancelar
        </button>
        <button type="button" style={{ backgroundColor: 'green' }} onClick={handleSalvar}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default CadastroCliente;
