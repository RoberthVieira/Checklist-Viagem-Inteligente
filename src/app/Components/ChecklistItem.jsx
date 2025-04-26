import styles from './ChecklistItem.module.css';
import { useState } from 'react';
import { CgAdd, CgRemove } from "react-icons/cg";

export default function ChecklistItem({itensMarcados, criarChecklist}){

    const [addItem, setAddItem] = useState([]);
    const [item, setItem] = useState('');
    const [observacao, setObservacao] = useState(() => {
        return localStorage.getItem('observacao') || '';
    })

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

    function criar() {
        const novaNota = {
            itens: [...new Set([...itensMarcados, ...addItem])],
            observacao: observacao
        };

        criarChecklist(novaNota);

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
                        onClick={criar}>
                        Criar Checklist
                    </button>
                </div>
            )}
        </div>
    )
}