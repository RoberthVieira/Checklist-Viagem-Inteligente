import styles from './WeatherInfo.module.css';
import { Thermometer, Cloud, BarChart, Wind } from 'lucide-react';
export default function WeatherInfo({dadosClima}){
    return (
        <div className={styles.weatherContainer}>
            <h2 className={styles.weatherTitle}>Clima em {dadosClima.name}</h2>
            <div className={styles.weatherCards}>
                <div className={styles.weatherCard}><Thermometer size={24} color='orange'/> {dadosClima.main.temp}°C</div>
                <div className={styles.weatherCard}><Cloud size={24} color='grey'/> {dadosClima.weather[0].description}</div>
                <div className={styles.weatherCard}><BarChart size={24} color='red'/> {dadosClima.main.temp_max}°C</div>
                <div className={styles.weatherCard}><BarChart size={24} color='Darkblue'/> {dadosClima.main.temp_min}°C</div>
                <div className={styles.weatherCard}><Wind size={24} color='Darkgrey'/> {dadosClima.wind.speed} m/s</div>
            </div>
        </div>
    )
}