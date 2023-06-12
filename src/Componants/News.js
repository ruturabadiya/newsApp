import React, { Component } from "react"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'health'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey` ;
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6cf86d827c436fa510a551ae14fa7e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false
        })  
    }
    async componentDidMount() {
       this.updateNews();
    }
    // handlePrevClick = async () => {
    //     // console.log("Previous");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6cf86d827c436fa510a551ae14fa7e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData);
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })
    //     this.setState({page: this.state.page - 1});
    //     this.updateNews();
    // }

    // handleNextClick = async () => {
    //     // console.log("Next");
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize))) {
    //     //     this.setState({ loading: true });
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6cf86d827c436fa510a551ae14fa7e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json();
    //     //     console.log(parsedData);
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading: false
    //     //     })
    //     // }
    //     this.setState({page: this.state.page + 1})
    //     this.updateNews();
    // }

    ///==> using axios 
    // async componentDidMount() {
    //     let url = "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6cf86d827c436fa510a551ae14fa7e&page=1&pageSize=20";
    //     try {
    //       let response = await axios.get(url);
    //       let parsedData = response.data;
    //       console.log(parsedData);
    //       this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    //   handlePrevClick = async () => {
    //     console.log("Previous");
    //     if (this.state.page === 1) {
    //       return; // No previous page available
    //     }

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6cf86d827c436fa510a551ae14fa7e&page=${this.state.page - 1}&pageSize=20`;
    //     try {
    //       let response = await axios.get(url);
    //       let parsedData = response.data;
    //       console.log(parsedData);
    //       this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //       });
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    //   handleNextClick = async () => {
    //     console.log("Next");
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    //       return; // No next page available
    //     }

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6cf86d827c436fa510a551ae14fa7e&page=${this.state.page + 1}&pageSize=20`;
    //     try {
    //       let response = await axios.get(url);
    //       let parsedData = response.data;
    //       console.log(parsedData);
    //       this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles
    //       });
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    fetchMoreData = async () =>{
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6cf86d827c436fa510a551ae14fa7e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false
        })  
    };

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} headlines </h1>
              
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="container" >
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url}
                                author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                </div>
</InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News 