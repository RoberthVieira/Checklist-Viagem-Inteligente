import styles from './Checklist.module.css';
import { useState } from 'react';
import { CgRemove } from "react-icons/cg";
import ChecklistItem from './ChecklistItem';

export default function Checklist({calor, frio, chuva, nublado, ventando}) {

    const itensCalor = ['Protetor solar', 'Garrafinha de agua', 'Óculos de sol'];
    const itensFrio = ['Blusa de frio', 'Luvas', 'Protetor labial'];
    const itensChuva = ['Guarda-chuva', 'Capa de chuva', 'Casaco'];
    const itensNublado = ['Guarda-chuva', 'Capa de chuva', 'Casaco leve'];
    const itensVentando = ['Corta vento', 'Protetor labial', 'Hidratante'];
    const [notas, setNotas] = useState(() => {
        const savedNotas = localStorage.getItem('notas');
        return savedNotas ? JSON.parse(savedNotas) : [];
    });

    const sugestoes = new Set();
    const [itensMarcados, setItensMarcados] = useState(() => {
        const savedItems = localStorage.getItem('itensMarcados');
        return savedItems ? JSON.parse(savedItems) : [];    
    });

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

    function criarChecklist(novaNota) {
        setNotas(prevNotas => {
          const novasNotas = [novaNota, ...prevNotas];
          localStorage.setItem('notas', JSON.stringify(novasNotas));
          return novasNotas;
        });
    }

    function excluirChecklist(notasParaExcluir){
        const novasNotas = notas.filter((nota) => nota !== notasParaExcluir);
        setNotas(novasNotas);
        localStorage.setItem('notas', JSON.stringify(novasNotas));
    }

    if(calor) itensCalor.forEach(item => sugestoes.add(item));
    if(frio) itensFrio.forEach(item => sugestoes.add(item));
    if(chuva) itensChuva.forEach(item => sugestoes.add(item));
    if(nublado) itensNublado.forEach(item => sugestoes.add(item));
    if(ventando) itensVentando.forEach(item => sugestoes.add(item));

    return(
        <div className={styles.checklistContainer}>
            <h3 className={styles.checklistTitle}>De acordo com o clima os itens recomendados são:</h3>
            {[...sugestoes].length === 0 && (<p className={styles.emptyMenssage}>Nenhuma recomendação no momento</p>)} 
            <div className={styles.checklistSugestiosContainer}>
                <ul className={styles.checklistSugestiosList}>
                    {[...sugestoes].map((element, index) => (
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
                criarChecklist={criarChecklist}
                excluirChecklist={excluirChecklist}
            />
            {notas.length > 0 && (
                <div className={styles.notasAreaContainer}>
                    <h3 className={styles.tituloNotas}>Checklists Criados</h3>
                    <div className={styles.containerNotas}>
                        {notas.map((nota, index) => (
                            <div key={index} className={styles.nota}>
                                <h4>Itens:</h4>
                                <ul>
                                    {nota.itens.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                {nota.observacao && (
                                    <div className={styles.notaObs}>
                                        <h4>Observação:</h4>
                                        <p>{nota.observacao}</p>
                                    </div>
                                )}
                                <button onClick={() => excluirChecklist(nota)}><CgRemove size={20} color='white'/></button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}