export interface IContact {
  id: number;
  name: string;
  phone: string;
};

export interface IContacts {
  contactsList: IContact[];
  newName: string;
  newPhone: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addContact: () => void;
  deleteContact: (id: number) => void;
  editContact: (id: number, name: string, phone: string) => void;
  allert: string;
};