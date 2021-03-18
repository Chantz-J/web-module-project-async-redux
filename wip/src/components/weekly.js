import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'

import Daily from './daily'

const Weekly = (props) => {
    const { fetchData, error, forecast, isLoading } = props
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="week-forecast">
            <h2>Hello from weekly</h2>
            {
               forecast.daily.map(day => {
                   return (
                       <Daily key={day.dt} day={day} />
                   )
               })
            }
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
export default connect(maptoStateProps, {fetchData})(Weekly)