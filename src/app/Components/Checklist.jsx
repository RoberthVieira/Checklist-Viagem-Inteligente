import styles from './Checklist.module.css';
import { useState } from 'react';
export default function Checklist({calor, frio, chuva, nublado, ventando}) {

    const itensCalor = ['Protetor solar', 'Garrafinha de agua', 'Óculos de sol'];
    const itensFrio = ['Blusa de frio', 'Luvas', 'Protetor labial'];
    const itensChuva = ['Guarda-chuva', 'Capa de chuva', 'Casaco'];
    const itensNublado = ['Guarda-chuva', 'Capa de chuva', 'Casaco leve'];
    const itensVentando = ['Corta vento', 'Protetor labial', 'Hidratante'];

    const sugestao = new Set();
    const [itensMarcados, setItensMarcados] = useState([]);

    function handleToggleItem(item){
        if(itensMarcados.includes(item)){
            setItensMarcados(itensMarcados.filter(i => i !== item))
        } else {
            setItensMarcados([...itensMarcados, item])
        }
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
                        <li key={index}>
                            <label>
                                <input 
                                    type="checkbox"
                                    checked={itensMarcados.includes(element)}
                                    onChange={() => handleToggleItem(element)}
                                />
                                {element}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}