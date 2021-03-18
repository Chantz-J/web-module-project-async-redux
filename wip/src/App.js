import styled, { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

import Weekly from './components/weekly'

function App(props) {

  return (
    <main className="App">
      <h1>Hello from App</h1>
      <Weekly />
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
