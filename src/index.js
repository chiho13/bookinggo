
import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import SearchWidget from './components/styles/SearchWidget';
import styled from 'styled-components';


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

		this.state = { loading: false, searchResults: [], showSearchResults: false}
	}

	 artistSearch = async (term) => {
        term.length < 2 && this.setState({showSearchResults: false});
        if (!(term.length >= 2)) return;
        this.setState({loading: true});
		const url = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${term}`;
        const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  }
        });
        const json = await response.json();
		this.setState({loading: false, searchResults: json.results.docs, showSearchResults: true});
    }

	render() {
		const searchResults = this.state.searchResults.map((item, i) => {
			return (
			  <li key={i}>{item.name && item.name}{item.country && `, ${item.country}`}{item.city && `, ${item.city}`}</li>
		  );
		});
		return (<div><Hero></Hero>
                <WidgetContainer>
			        <SearchWidget autoComplete="off" noValidate>
						<h2>Where are you going?</h2>
                        <SearchBar loading={this.state.loading} onSearchTermChange={term => this.artistSearch(term)}/>
						<ul tabIndex="-1">
							{this.state.showSearchResults && searchResults}
						</ul>
	 		        </SearchWidget>
                 </WidgetContainer>
             </div>
	 );
	}
}


ReactDOM.render(<App />, document.getElementById('root'));

