import * as React from "react";
import Contact from './Contact';
import ContactItem from './ContactItem';

interface IContactListProps {
    contacts:Contact[],
    filterText:string
};

interface IContactListState {};

class ContactList extends React.Component<IContactListProps, IContactListState> {
    public render(): JSX.Element {
        let filteredContracts=this.props.contacts.filter(
            (contact)=>contact.name.indexOf(this.props.filterText)!=-1
        );

        return (<ul>
        {filteredContracts.map(
            (contact)=><ContactItem key={contact.email} contact={contact} />
        )}
        </ul>);
    }
}

export default ContactList;
