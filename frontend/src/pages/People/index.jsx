import CrudModule from '@/modules/CrudModule/CrudModule';
import PeopleForm from '@/forms/PeopleForm';
import useLanguage from '@/locale/useLanguage';

export default function People() {
  const translate = useLanguage();
  const entity = 'people';

  const searchConfig = {
    displayLabels: ['firstName', 'lastName'],
    searchFields: 'firstName,lastName,email',
  };
  const deleteModalLabels = ['firstName', 'lastName'];

  const dataTableColumns = [
    {
      title: translate('first name'),
      dataIndex: 'firstName',
    },
    {
      title: translate('last name'),
      dataIndex: 'lastName',
    },
    {
      title: translate('email'),
      dataIndex: 'email',
    },
    {
      title: translate('phone'),
      dataIndex: 'phone',
    },
    {
      title: translate('country'),
      dataIndex: 'country',
    },
  ];

  const readColumns = [
    { title: translate('first name'), dataIndex: 'firstName' },
    { title: translate('last name'), dataIndex: 'lastName' },
    { title: translate('email'), dataIndex: 'email' },
    { title: translate('phone'), dataIndex: 'phone' },
    { title: translate('country'), dataIndex: 'country' },
    { title: translate('address'), dataIndex: 'address' },
  ];

  const config = {
    entity,
    PANEL_TITLE: translate('people'),
    DATATABLE_TITLE: translate('people_list'),
    ADD_NEW_ENTITY: translate('add_new_people'),
    ENTITY_NAME: translate('people'),
    dataTableColumns,
    readColumns,
    searchConfig,
    deleteModalLabels,
  };

  return (
    <CrudModule
      createForm={<PeopleForm />}
      updateForm={<PeopleForm isUpdateForm />}
      config={config}
    />
  );
}
