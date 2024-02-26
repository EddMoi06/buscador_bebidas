import { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header>
            <h1 className='py-5'>Buscador de Bebidas</h1>
        </header>

        <Container className='mt-5'>
          <Formulario/>

          <ListadoBebidas/>

          <ModalBebida/>
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
