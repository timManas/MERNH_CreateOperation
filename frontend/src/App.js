import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
