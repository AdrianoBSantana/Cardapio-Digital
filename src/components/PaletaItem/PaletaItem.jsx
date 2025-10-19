import "./PaletaItem.css";
import React from 'react';

function PaletaItem({ paleta, quantidadeSelecionada, adicionarItem, removerItem }) {
  const badgeCounter = (canRender) => {
    return (
      <>
        {Boolean(canRender) && (
          <span className="PaletaListaItem__badge">{quantidadeSelecionada}</span>
        )}
      </>
    );
  };

  const removeButton = (canRender) => {
    return (
      <>
        {Boolean(canRender) && (
          <button className="Acoes__remover" onClick={() => removerItem(paleta.id)}>
            remover
          </button>
        )}
      </>
    );
  };

  return (
    <div className="PaletaListaItem">
      <div>
        {badgeCounter(quantidadeSelecionada)}
        <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
        <div className="PaletaListaItem__preco">R$ {paleta.preco.toFixed(2)}</div>
        <div className="PaletaListaItem__descricao">{paleta.descricao}</div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`}
            onClick={() => adicionarItem(paleta.id)}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada)}
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
      />
    </div>
  );
}

export default PaletaItem;