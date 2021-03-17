import { useEffect } from 'react'
import { connect } from 'react-redux'
// import { fetchData } from '../actions'

const Test = (props) => {
    // useEffect(() => {
    //     fetchData()
    // }, [])
    return (
        <section className="test">
            <h2>{props.error}</h2>
        </section>
    )
}

const maptoStateProps = state => {
    return {
        isLoading: state.isLoading,
        forecast: state.forecast,
        error: state.error
    }
}
export default connect(maptoStateProps, {})(Test)