import styled from 'styled-components'
import { connect } from 'react-redux'

const Daily = (props) => {
    const { day, isLoading } = props
    return (
        <div className='daily-forecast'>
            <p>Hello</p>
        </div>
    )
}
const maptoStateProps = state => {
    return {
        isLoading: state.isLoading,
    }
  }
  
//   export default Daily
  export default connect(maptoStateProps, {})(Daily)
  