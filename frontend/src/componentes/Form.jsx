import React, { useState } from "react";

export default function CadastroReceitaForm() {
  const [formData, setFormData] = useState({
    ingredientes: "",
    tempo_preparo: "",
    modo_preparo: "",
    imagem_receita: null,
    rendimento: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cadastro de Receita</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ingredientes" className="form-label">Ingredientes</label>
          <textarea
            name="ingredientes"
            id="ingredientes"
            rows="3"
            className="form-control"
            value={formData.ingredientes}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tempo_preparo" className="form-label">Tempo de Preparo</label>
          <input
            type="text"
            name="tempo_preparo"
            id="tempo_preparo"
            className="form-control"
            value={formData.tempo_preparo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="modo_preparo" className="form-label">Modo de Preparo</label>
          <textarea
            name="modo_preparo"
            id="modo_preparo"
            rows="4"
            className="form-control"
            value={formData.modo_preparo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imagem_receita" className="form-label">Imagem da Receita</label>
          <input
            type="file"
            name="imagem_receita"
            id="imagem_receita"
            accept="image/*"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rendimento" className="form-label">Rendimento</label>
          <input
            type="text"
            name="rendimento"
            id="rendimento"
            className="form-control"
            value={formData.rendimento}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Cadastrar Receita</button>
      </form>
    </div>
  );
}
