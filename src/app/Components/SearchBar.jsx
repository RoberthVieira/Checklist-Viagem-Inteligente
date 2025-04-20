'use client';
import { useState } from 'react';
import styles from './SearchBar.module.css';
import {Search} from 'lucide-react';
import WeatherInfo from './WeatherInfo';

export default function SearchBar(){

    const [cidade, setCidade] = useState("");
    const [dadosClima, setDadosClima] = useState(null);
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);
    const [sugestoes, setSugestoes] = useState([]);

    async function buscarCidade(){

        setLoading(true);
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=568eed51bccae480ea79d95cc520f58d&units=metric&lang=pt-br`;

        try{
            const resposta = await fetch(url);
            const dados = await resposta.json();
            
            if(resposta.ok){
                setDadosClima(dados);
                setErro("");
            } else {
                setErro("Cidade não encontrada ou houve um erro ao buscar os dados.");
                setDadosClima(null);
            }
        } catch (erro) {
            setErro("Erro ao buscar os dados. Tente novamente.");
            setDadosClima(null)
        } finally {
            setLoading(false)
        }
    }

    async function sugestaoCidades(cidade) {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=5&appid=568eed51bccae480ea79d95cc520f58d`;

        const respostaSugestao = await fetch(url);
        const dadosResposta = await respostaSugestao.json()
        return dadosResposta
    }

    return(
        <div className={styles.container}>
            <input 
                type="text" 
                placeholder="Busca" 
                value={cidade}
                onKeyDown={async (e) => {
                    if(e.key === "Enter") {
                        await buscarCidade();
                        setSugestoes([]);
                    }
                }}
                onChange={async (e) => {
                    const valor = e.target.value
                    setCidade(valor);

                    if(valor.length >= 2){
                        const sugestoes = await sugestaoCidades(valor);
                        setSugestoes(sugestoes);
                    } else {
                        setSugestoes([]);
                    }
                }}/>
            <button onClick={async() => {await buscarCidade(); setSugestoes([])}}>
                <Search size={20} color='gray'/>
            </button>
            {cidade.length > 1 && sugestoes.length > 0 &&(
                <div className={styles.suggestionsContainer}>
                    <ul className={styles.suggestionsList}>
                        {sugestoes.map((s, index) => (
                            <li className={styles.suggestionsItem} key={index} onClick={() =>{
                                setCidade(s.name);
                                setSugestoes([]);
                                buscarCidade();
                            }}>
                                {s.name} - {s.country}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {loading && <p>Carregando...</p>}

            {erro && <p>{erro}</p>}

            {dadosClima && <WeatherInfo dadosClima={dadosClima}/>}
        </div>
    )
}