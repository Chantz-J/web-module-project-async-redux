import styled, { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

import Test from './components/test'

function App(props) {

  return (
    <main className="App">
      <h1>Hello from App</h1>
      <Test />
    </main>
  );
}

const maptoStateProps = state => {
  return {
      isLoading: state.isLoading,
      forecast: state.forecast,
      error: state.error
  }
}
export default connect(maptoStateProps, {})(App)

// export default App;
