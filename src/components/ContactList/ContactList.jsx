import { List } from './ContactListStyle';
import { ContactItem } from '../ContactItem/ContactItem';
import propTypes from 'prop-types';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onDelete: propTypes.func.isRequired,
};
