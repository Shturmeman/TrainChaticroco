import React from 'react'
import { getNewsFromServer } from '../../actions/News'
import { connect } from 'react-redux'




class NewsPage extends React.Component {
    state = { counter: 0 }

    componentDidMount() {
        this.props.getNewsFromServer()
    }
    nextNews(b) {
        if (b === "+" && this.state.counter < this.props.newsList.length - 1) {
            this.setState(prevState => ({ counter: prevState.counter + 1 }))
        }
        if (b === "-" && this.state.counter > 0) {
            this.setState(prevState => ({ counter: prevState.counter - 1 }))
        }
    }



    render() {
        const { counter } = this.state
        const { newsList } = this.props
        let currentNews = newsList[counter]
        console.log(newsList)
        return (
            <main>
                {currentNews ? <div>
                    <h1>{currentNews.title}</h1>
                    <img src={currentNews.urlToImage} alt="something"/>
                    <p>{currentNews.description}</p>
                    <a href={currentNews.url}>Узнать больше</a>
                </div>
                    : <h2>ZDAROVA</h2>}
                <button onClick={() => this.nextNews("-")}>DEC</button>
                <button onClick={() => this.nextNews("+")}>INC</button>
            </main>
        )
    }
}
const mapStateToProps = ({ news }) =>
    ({
        newsList: news.newsList,
    })


export default connect(mapStateToProps, { getNewsFromServer })(NewsPage)