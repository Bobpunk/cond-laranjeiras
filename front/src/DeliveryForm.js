import React, { useState } from 'react';
import './DeliveryForm.css';

function DeliveryForm() {
  
  const [bloco, setBloco] = useState(''); 
  const [apto, setApto] = useState('');
  const [pin, setPin] = useState('');
  const [foto, setFoto] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    console.log("Formulário enviado!");
    console.log("Bloco:", bloco); 
    console.log("Apartamento:", apto);
    console.log("PIN:", pin);
    console.log("Arquivo da Foto:", foto);
  };

  return (
    <form className="delivery-form" onSubmit={handleSubmit}> 
      <h1>Formulário de Entrega do Condomínio Laranjeirras</h1>
      
      <div className="form-group">
        <label>Bloco:</label>
        <select onChange={ (e) => setBloco(e.target.value) }>
          <option value="">Selecione o Bloco</option>
          <option value="A">Bloco A</option>
          <option value="B">Bloco B</option>
          <option value="C">Bloco C</option>
          <option value="D">Bloco D</option>
        </select>
      </div>

      <div className="form-group">
        <label>Apartamento:</label>
        <input 
          type="text" 
          placeholder="Ex: 101, 203, 404"
          onChange={ (e) => setApto(e.target.value) }
        />
      </div>

      <div className="form-group">
        <label>PIN da Entrega:</label>
        <input 
          type="tel"
          placeholder="Ex: 1234" 
          onChange={ (e) => setPin(e.target.value) }
        />
      </div>

      <div className="form-group">
        <label>Selfie de Registro:</label>
        <input 
          type="file" 
          accept="image/*"
          capture="user"
          onChange={ (e) => setFoto(e.target.files[0]) }
        />
      </div>

      <button type="submit" className="submit-button">
        Registrar Entrega e Abrir Caixa
      </button>
      
    </form>
  );
}

export default DeliveryForm;