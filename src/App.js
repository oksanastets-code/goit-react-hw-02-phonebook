import { Component } from 'react';
import { nanoid } from 'nanoid';
import NameEditor from './components/NameEditor';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFoundedContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const foundedContacts = this.getFoundedContacts();
    return (
      <>
        <NameEditor onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={foundedContacts} />
      </>
    );
  }
}
export default App;
