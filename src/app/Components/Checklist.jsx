import styles from './Checklist.module.css';
import { useState, useEffect } from 'react';
import ChecklistItem from './ChecklistItem';
export default function Checklist({calor, frio, chuva, nublado, ventando}) {

    const itensCalor = ['Protetor solar', 'Garrafinha de agua', 'Óculos de sol'];
    const itensFrio = ['Blusa de frio', 'Luvas', 'Protetor labial'];
    const itensChuva = ['Guarda-chuva', 'Capa de chuva', 'Casaco'];
    const itensNublado = ['Guarda-chuva', 'Capa de chuva', 'Casaco leve'];
    const itensVentando = ['Corta vento', 'Protetor labial', 'Hidratante'];

    const sugestao = new Set();
    const [itensMarcados, setItensMarcados] = useState(() => {
        const savedItems = localStorage.getItem('itensMarcados');
        return savedItems ? JSON.parse(savedItems) : [];    
    });
    const [mostrarChecklist,setMostrarChecklist] = useState();

    function handleToggleItem(item){
        if(itensMarcados.includes(item)){
            const novosItens = itensMarcados.filter(i => i !== item);
            setItensMarcados(novosItens);
            localStorage.setItem('itensMarcados', JSON.stringify(novosItens));
        } else {
            const novosItens = [...itensMarcados, item];
            setItensMarcados(novosItens);
            localStorage.setItem('itensMarcados', JSON.stringify(novosItens))
        }
    }

    function adicionarSugestao(item){
        addItens(item);
        setMostrarChecklist(true)
    }

    if(calor) itensCalor.forEach(item => sugestao.add(item));
    if(frio) itensFrio.forEach(item => sugestao.add(item));
    if(chuva) itensChuva.forEach(item => sugestao.add(item));
    if(nublado) itensNublado.forEach(item => sugestao.add(item));
    if(ventando) itensVentando.forEach(item => sugestao.add(item));

    return(
        <div className={styles.checklistContainer}>
            <h3 className={styles.checklistTitle}>De acordo com o clima os itens recomendados são:</h3>
            {[...sugestao].length === 0 && (<p className={styles.emptyMenssage}>Nenhuma recomendação no momento</p>)} 
            <div className={styles.checklistSugestiosContainer}>
                <ul className={styles.checklistSugestiosList}>
                    {[...sugestao].map((element, index) => (
                        <li key={index} 
                            className={itensMarcados.includes(element) ? styles.itensMarcados : ''}>
                            <label htmlFor={`Item - ${index}`}>
                            <input 
                                    type="checkbox"
                                    id={`Item - ${index}`}
                                    checked={itensMarcados.includes(element)}
                                    onChange={() => handleToggleItem(element)}
                                />
                                {element}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
                <ChecklistItem 
                    itensMarcados={itensMarcados}
                    addItens={(item) => {
                        if(!itensMarcados.includes(item)){
                            setItensMarcados((prev) => {
                                const novosItens = [... prev, item]
                                localStorage.setItem('itensMarcados', JSON.stringify(novosItens))
                                return novosItens
                            })
                        }
                    }}
                    setMostrarChecklist={setMostrarChecklist}
                />
        </div>
    )
}