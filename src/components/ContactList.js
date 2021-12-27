import { ListWrapper, ContactItem, List, ContactData, DeleteButton } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ListWrapper>
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactData>
            {name}: {number}
          </ContactData>
          <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
        </ContactItem>
      ))}
    </List>
  </ListWrapper>
);
export default ContactList;
