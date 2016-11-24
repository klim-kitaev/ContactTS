import * as React from "react";
import Contact from './Contact';

interface IContactItemProps {
    contact:Contact
};

interface IContactItemState {};

class ContactItem extends React.Component<IContactItemProps, IContactItemState> {
    public render(): JSX.Element {
        return (<li>{this.props.contact.name} - {this.props.contact.email}</li>);
    }
}

export default ContactItem;
