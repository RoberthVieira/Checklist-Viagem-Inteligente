import styles from './ChecklistItem.module.css';
import { useState } from 'react';
import { CgAdd } from "react-icons/cg";

export default function ChecklistItem({itensMarcados}){

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


    return(
        <div className={styles.checklistItemContainer}>
            <div>
                <input 
                    type="text" 
                    value={item} 
                    placeholder="Digite os itens que você vai levar..."
                    onChange={valorInput}
                />
                <button 
                    className={styles.btnAdd} 
                    onClick={adicionar}>
                    Adicionar
                </button>
            </div>
            {(itensMarcados.length > 0 || addItem.length > 0) && (
                <div>
                <h3>Itens para a viagem</h3>
                <ul>
                    {itensMarcados.map((element, index) => (
                        <li key={index}>
                            {element}
                        </li>
                    ))}
                    {addItem.map((element, index) => (
                        <li key={index}>
                            {element}
                        </li>
                    ))}
                </ul>
                <textarea 
                    placeholder='Observações...'
                    value={observacao}
                    onChange={mudancaObs}
                />
                <button><CgAdd/></button>
            </div>
            )}
        </div>
    )
}