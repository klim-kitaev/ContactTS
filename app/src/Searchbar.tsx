import * as React from "react";

import {IFunction} from './IFunction';

interface ISearchBarProps {
    filterText:string,
    onUserInput:IFunction
};

interface ISearchBarState {};

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {

    handleChange(event:any){
        console.log('change');
        this.props.onUserInput(event.target.value);
    }

    public render(): JSX.Element {
        return (<input type="search" onChange={this.handleChange.bind(this)} value={this.props.filterText} placeholder="search" />);
    }
}

export default SearchBar;
