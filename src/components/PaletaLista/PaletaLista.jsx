import React, { useState, useEffect } from 'react';
import "./PaletaLista.css";
import PaletaItem from 'components/PaletaItem/PaletaItem';
import { PaletaService } from 'services/PaletaService';

function PaletaLista() {
  const [paletas, setPaletas] = useState([]);
  const [paletaSelecionadas, setPaletaSelecionadas] = useState({});

  const getLista = async () => {
    const response = await PaletaService.getLista();
    setPaletas(response);
  };

  const adicionarItem = (paletaId) => {
    const paleta = { [paletaId]: (paletaSelecionadas[paletaId] || 0) + 1 };
    setPaletaSelecionadas({ ...paletaSelecionadas, ...paleta });
  };

  const removerItem = (paletaId) => {
    const paleta = { [paletaId]: paletaSelecionadas[paletaId] - 1 };
    if (paleta[paletaId] < 1) {
      delete paletaSelecionadas[paletaId];
      setPaletaSelecionadas({ ...paletaSelecionadas });
    } else {
      setPaletaSelecionadas({ ...paletaSelecionadas, ...paleta });
    }
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="PaletaLista">
      {paletas.map((paleta) => {
        return (
          <PaletaItem
            key={paleta.id}
            paleta={paleta}
            quantidadeSelecionada={paletaSelecionadas[paleta.id]}
            adicionarItem={adicionarItem}
            removerItem={removerItem}
          />
        );
      })}
    </div>
  );
}
export default PaletaLista