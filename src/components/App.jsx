// import { useState } from 'react';
// import { useLocalStorage } from 'hooks/useLocalStorage';
import { GlobalStyle } from 'mainstyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, MainTitle, SubTitle } from './AppStyle';

// const STORAGE_KEY = 'contacts';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, [
  //   { id: 'id-1', name: 'First name Second name', number: '0123-45-67' },
  //   { id: 'id-2', name: 'Bot Botovich', number: '+38050-233-89-12' },
  // ]);

  // const [filter, setFilter] = useState('');

  // const submitHandler = ({ id, name, number }) => {
  //   const contact = { id, name, number };
  //   setContacts(prevState => {
  //     return [contact, ...prevState];
  //   });
  // };

  // const changeHandler = newFilter => {
  //   setFilter(newFilter);
  // };

  // const deleteHandler = id => {
  //   const filteredContacts = contacts.filter(contact => contact.id !== id);
  //   setContacts([...filteredContacts]);
  // };

  // const filteredContacts = () => {
  //   return filter
  //     ? contacts.filter(({ name }) =>
  //         name.toLowerCase().includes(filter.toLowerCase())
  //       )
  //     : contacts;
  // };

  return (
    <Container>
      <GlobalStyle />

      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
