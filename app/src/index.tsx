import * as React from "react";
import * as ReactDOM from "react-dom";

import Contact from './Contact';
import ContactList from './ContactList';
import Searchbar from './Searchbar'; 




interface IContactsAppProps {contacts:Contact[]};

interface IContactsAppState {
    filterText:string
};

class ContactsApp extends React.Component<IContactsAppProps, IContactsAppState> {
    constructor(){
        super();
        this.state={
            filterText:''
        };
    }

    handleUserInput(searchTerm:string){
        this.setState({filterText:searchTerm});
    }


    public render(): JSX.Element {
        return (<div>
            <Searchbar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
            <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
        </div>);
    }
}


let contacts=[
    { name: "Cassio Zen", email: "cassiozen@gmail.com" },
    { name: "Dan Abramov", email: "gaearon@somewhere.com" },
    { name: "Pete Hunt", email: "floydophone@somewhere.com" },
    { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
    { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
    { name: "Sebastian Markbage", email: "sebmarkbage@here.com" }
]


ReactDOM.render(
    <ContactsApp contacts={contacts}/>,
    document.getElementById("example")
);