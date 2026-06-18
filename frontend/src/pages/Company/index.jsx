import CrudModule from '@/modules/CrudModule/CrudModule';
import CompanyForm from '@/forms/CompanyForm';
import useLanguage from '@/locale/useLanguage';

export default function Company() {
  const translate = useLanguage();
  const entity = 'company';

  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name,email',
  };
  const deleteModalLabels = ['name'];

  const dataTableColumns = [
    {
      title: translate('name'),
      dataIndex: 'name',
    },
    {
      title: translate('Contact'),
      dataIndex: ['contact', 'firstName'],
      render: (_, record) =>
        record.contact
          ? `${record.contact.firstName ?? ''} ${record.contact.lastName ?? ''}`.trim()
          : '',
    },
    {
      title: translate('country'),
      dataIndex: 'country',
    },
    {
      title: translate('phone'),
      dataIndex: 'phone',
    },
    {
      title: translate('email'),
      dataIndex: 'email',
    },
  ];

  const readColumns = [
    { title: translate('name'), dataIndex: 'name' },
    { title: translate('country'), dataIndex: 'country' },
    { title: translate('phone'), dataIndex: 'phone' },
    { title: translate('email'), dataIndex: 'email' },
    { title: translate('website'), dataIndex: 'website' },
  ];

  const config = {
    entity,
    PANEL_TITLE: translate('companies'),
    DATATABLE_TITLE: translate('company_list'),
    ADD_NEW_ENTITY: translate('add_new_company'),
    ENTITY_NAME: translate('company'),
    dataTableColumns,
    readColumns,
    searchConfig,
    deleteModalLabels,
  };

  return (
    <CrudModule
      createForm={<CompanyForm />}
      updateForm={<CompanyForm isUpdateForm />}
      config={config}
    />
  );
}
