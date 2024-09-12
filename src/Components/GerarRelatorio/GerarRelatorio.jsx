import React from 'react';
import styles from './GerarRelatorio.module.css';
import { FaCircleUser } from "react-icons/fa6";


const GerarRelatorio = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.tituloFoto}>
        <p><b>Relatório</b> | Identificação</p>
        <div className={styles.icon}>
          <FaCircleUser size={40} />
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.tituloCentralizado}>Edificação, Instalações, Equipamentos, Móveis e Utensílios</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="nomeFantasia">Nome Fantasia da Empresa:</label>
            <input type="text" id="nomeFantasia" name="nomeFantasia" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="dataConsulta">Data da Consulta:</label>
            <input type="date" id="dataConsulta" name="dataConsulta" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="responsavelOperacional">Responsável Operacional:</label>
            <input type="text" id="responsavelOperacional" name="responsavelOperacional" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="consultorTecnico">Consultor Técnico:</label>
            <input type="text" id="consultorTecnico" name="consultorTecnico" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonIniciar} type="submit">Iniciar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GerarRelatorio;
