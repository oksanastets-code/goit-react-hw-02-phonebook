import { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import initialContacts from './contacts.json';
import NameEditor from './components/NameEditor';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { Container } from './App.styled';
class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (this.state.contacts.find(contact => contact.name === name)) {
      const notify = `${name} is already on list`;
      toast.error(notify);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    toast.success('Contact added!');
    return;
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
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
      <Container>
        <Toaster />
        <h1>Phonebook</h1>
        <NameEditor onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={foundedContacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}
export default App;
