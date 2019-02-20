
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import SearchWidget from './components/styles/SearchWidget';
import styled, {injectGlobal} from 'styled-components';


const Hero = styled.div`
    height: 500px;
    background-image: url('https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/hero.jpg');background-size: cover;
`;

const WidgetContainer = styled.div`
   max-width: 1132px;
   margin: 0 auto;
`;


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { searchResults: []}
	}

	 artistSearch = async (term) => {
		const url = "https://ufhsub9629-dsn.algolia.net/1/indexes/search/query?x-algolia-application-id=UFHSUB9629&x-algolia-api-key=69ed687a250f4c895cc73f6ee142a42e";
        const params = {"params":`query=${term}&hitsPerPage=6&filters=type%3Aartists`}
        const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify(params)
        });
        const json = await response.json();
		this.setState({ searchResults: [...json.hits]}) 
		console.log(this.state.searchResults);
    }

	render() {

		// const searchResults = this.state.searchResults.map((item) => {
		// 	return (
		// 	  <div>hi</div>
		//   );
		return (<div><Hero></Hero>
                <WidgetContainer>
			        <SearchWidget>
                        <SearchBar onSearchTermChange={term => this.artistSearch(term)}/>
				        {/* {searchResults} */}
	 		        </SearchWidget>
                 </WidgetContainer>
             </div>
	 );
	}
}


ReactDOM.render(<App />, document.getElementById('root'));

