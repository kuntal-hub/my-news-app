import React, { Component } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'
import './News.css';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
    static defaultProps = {
        category: "general",
        country: "in"
    }
    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = { articles: [], loding: { display: "none" }, pageno: 1, totalResults: 10 }
        document.title = props.pagetitle;

    }
    async componentDidMount() {
        this.props.updateprogress(50)
        // this.setState({ loding: { display: "block" } });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=10&page=${this.state.pageno}`;

        this.props.updateprogress(80)
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults });
        this.props.updateprogress(100)
    }
    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=10&page=${this.state.pageno + 1}`;

        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedata.articles), pageno: this.state.pageno + 1 })
        //console.log(this.state.articles.length)
    };

    render() {
        return (
            <>
                <h1 style={{ marginTop: "10px" }} className='page_title'>News 24 Top {this.props.category} Headlines</h1>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<div className="loader"></div>}
                    scrollableTarget="scrollableDiv"
                >
                    <div className='d-flex flex-wrap justify-content-center'>
                        {this.state.articles.map((element) => {
                            return <Newsitem key={element.url + element.urlToImage} urlToImage={element.urlToImage ? element.urlToImage : "https://media.cnn.com/api/v1/images/stellar/prod/230831163127-01-hong-kong-preps-saola.jpg?c=16x9&q=w_800,c_fill"} url={element.url} title={element.title ? element.title : " "} description={element.description ? element.description : " "} publishedAt={element.publishedAt} author={element.author ? element.author : "Unknown"} source={element.source} />
                        })}

                    </div>

                </InfiniteScroll>
                {/* <button type="button" disabled={this.state.pageno <= 1} className="btn btn-success float-start shadow-lg mx-4 rounded mb-5" onClick={this.previous}>Previous</button>
                <button type="button" disabled={this.state.pageno >= this.state.totalpages} className="btn btn-success float-end shadow-lg mx-4 rounded mb-5" onClick={this.next}>Next </button> */}
            </>

        )
    }
}
