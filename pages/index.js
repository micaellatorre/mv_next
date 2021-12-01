import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/Card/Card'
import HeaderCard from '../components/HeaderCard/HeaderCard'
import data from '../public/data.json'

const { ingresos, gastosFijos, gastosGenerales,} = data;
 
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Money Viewer</title>
        <meta name="description" content="Visualizador de ingresos y gastos." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Money Viewer</h1>
        <HeaderCard title="Disponible" content={data}/>
        <div className="container" style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', margin: '0 0 50px'}}>
          <Card title="Ingresos" href="/ingresos" content={ ingresos }/>
          <Card title="Compras" href="/compras" content={ gastosGenerales }/>
          <Card title="Gastos Fijos" href="/gastosfijos" content={ gastosFijos }/>
        </div>
      </header>
    </div>
  )
}
