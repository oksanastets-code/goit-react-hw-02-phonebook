const ContactList = ({ contacts }) => (
  <>
    <h3>Contacts</h3>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
        </li>
      ))}
    </ul>
  </>
);
export default ContactList;
