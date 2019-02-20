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
			<label for="rentalCarSearch">Pick-up location</label>
			<input
				id="rentalCarSearch"
				placeholder="city, airport, station, region, district..."
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
		</Search>
		);
	}
}

export default SearchBar;