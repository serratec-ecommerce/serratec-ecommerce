import React from 'react';
import{Botao} from '../../styles/buttons-styles';
import { DivPag } from '../../styles/geral-styles';

const Pagamento = () => {
    
    return(
        <DivPag>
            <h2 class="mb-3">Pagamento</h2>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" for="credit">Cartão de crédito</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" for="debit">Cartão Débito</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" for="paypal">Pix</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Nome do Cartão</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required/>
              <small className="text-muted">Nome Completo</small>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Número do Cartão</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required/>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Validade</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
            </div>
          </div>
            <div>
          <Botao>Finalizar Pedido</Botao>
          </div>


  </DivPag>
);
}

export default Pagamento;