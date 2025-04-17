'use client';
import { useState } from 'react';
import styles from './SearchBar.module.css';
import {Search} from 'lucide-react';

export default function SearchBar(){

    const [cidade, setCidade] = useState("");
    const [dadosClima, setDadosClima] = useState(null);
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);

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

    return(
        <div className={styles.container}>
            <input type="text" placeholder="Busca" onChange={(e) => {setCidade(e.target.value)}}/>
            <button onClick={() => buscarCidade()}>
                <Search size={20} color='gray'/>
            </button>

            {loading && <p>Carregando...</p>}

            {erro && <p>{erro}</p>}

            {dadosClima && (
                <div>
                    <h2>Clima em {dadosClima.name}</h2>
                    <p>Temperatura: {dadosClima.main.temp}°C</p>
                    <p>Condição: {dadosClima.weather[0].description}</p>
                    <p>Máxima: {dadosClima.main.temp_max}°C</p>
                    <p>Mínima: {dadosClima.main.temp_min}°C</p>
                    <p>Vento: {dadosClima.wind.speed} m/s</p>
                </div>
            )}
        </div>
    )
}