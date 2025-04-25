import styles from './ChecklistItem.module.css';
import { useState, useEffect } from 'react';
import { CgAdd, CgRemove } from "react-icons/cg";

export default function ChecklistItem({itensMarcados}){

    const [addItem, setAddItem] = useState([]);
    const [item, setItem] = useState('');
    const [observacao, setObservacao] = useState(() => {
        return localStorage.getItem('observacao') || '';
    })
    const [notas, setNotas] = useState([]);


    function adicionar(){
        if(item.length !== 0){
            setAddItem((prev) => [...prev, item]);
            setItem('');
        }
    }

    function valorInput(e){
        setItem(e.target.value)
    }

    function mudancaObs(e){
        const txt = e.target.value;
        setObservacao(txt);
        localStorage.setItem('observacao', txt);
    }

    function remover(item){
        const novaLista = addItem.filter((i) => i !== item);
        setAddItem(novaLista);
    }

    function criarChecklist() {
        const novaNota = {
            itens: [...new Set([...itensMarcados, ...addItem])], // sem duplicados
            observacao: observacao
        };

        setNotas(prev => [novaNota, ...prev]);
        setAddItem([]);
        setObservacao('');
        localStorage.removeItem('observacao');
    }

    return(
        <div className={styles.checklistItemContainer}>
            <div className={styles.inputArea}>
                <input 
                    className={styles.inputAddItem}
                    type="text" 
                    value={item} 
                    placeholder="Digite os itens que você vai levar..."
                    onChange={valorInput}
                />
                <button 
                    className={styles.btnAdd} 
                    onClick={adicionar}>
                    <CgAdd size={20} color='gray'/>
                </button>
            </div>
            {(itensMarcados.length > 0 || addItem.length > 0) && (
                <div className={styles.listaContainer}>  
                <h3 className={styles.tituloLista}>Itens para a viagem:</h3>
                <ul className={styles.listaItens}>
                    {itensMarcados.map((element, index) => (
                        <li key={index} className={styles.item}>
                            {element}
                        </li>
                    ))}
                    {addItem.map((element, index) => (
                        <li key={index} className={styles.itemComRemover}>
                            {element}
                            <button 
                                className={styles.btnExcluir}
                                onClick={() => remover(element)}>
                                <CgRemove size={15} color='gray'/>
                            </button>
                        </li>
                    ))}
                </ul>
                <textarea 
                    placeholder='Observações...'
                    value={observacao}
                    onChange={mudancaObs}
                    className={styles.textareaObservacao}
                />
                <button 
                    className={styles.btnSalvarNota}
                    onClick={criarChecklist}>
                    Criar Checklist
                </button>
            </div>
            )}
            {notas.length > 0 && (
                <div className={styles.notasContainer}>
                    <h3 className={styles.tituloNotas}>Checklist para viagem</h3>
                    {notas.map((nota,index) => (
                        <div key={index} className={styles.nota}>
                            <h4>Itens:</h4>
                            <ul>
                                {nota.itens.map((item, idx) => (
                                    <li key={idx}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {nota.observacao && (
                                <>
                                    <h4>Observação:</h4>
                                    <p>{nota.observacao}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}