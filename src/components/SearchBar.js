import React, {Component} from 'react';
import Search from './styles/searchBar';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
    }
    
    onInputChange = (term) => {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
		<Search>
			<fieldset>
			<label htmlFor="rentalCarSearch">Pick-up location</label>

			<div className="search_container">
				{this.props.loading && <img src="https://cdn2.rcstatic.com/images/site_graphics/newsite/preloader64.gif" alt="loading"></img>}
				<input
				id="rentalCarSearch"
				placeholder="city, airport, station, region, district..."
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
			</fieldset>
		</Search>
		);
	}
}

export default SearchBar;