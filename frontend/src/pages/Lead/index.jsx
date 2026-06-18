import CrudModule from '@/modules/CrudModule/CrudModule';
import LeadForm from '@/forms/LeadForm';
import useLanguage from '@/locale/useLanguage';
import { Tag } from 'antd';

const statusColors = {
  new: 'blue',
  reached: 'orange',
  interested: 'green',
  'not interested': 'red',
};

export default function Lead() {
  const translate = useLanguage();
  const entity = 'lead';

  const searchConfig = {
    displayLabels: ['firstName', 'lastName'],
    searchFields: 'firstName,lastName,email,company',
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
      title: translate('company'),
      dataIndex: 'company',
    },
    {
      title: translate('status'),
      dataIndex: 'status',
      render: (status) => (
        <Tag color={statusColors[status] ?? 'default'}>{translate(status)}</Tag>
      ),
    },
  ];

  const readColumns = [
    { title: translate('first name'), dataIndex: 'firstName' },
    { title: translate('last name'), dataIndex: 'lastName' },
    { title: translate('email'), dataIndex: 'email' },
    { title: translate('phone'), dataIndex: 'phone' },
    { title: translate('company'), dataIndex: 'company' },
    { title: translate('position in company'), dataIndex: 'jobTitle' },
    { title: translate('status'), dataIndex: 'status' },
    { title: translate('source'), dataIndex: 'source' },
    { title: translate('notes'), dataIndex: 'notes' },
  ];

  const config = {
    entity,
    PANEL_TITLE: translate('leads'),
    DATATABLE_TITLE: translate('lead_list'),
    ADD_NEW_ENTITY: translate('add_new_lead'),
    ENTITY_NAME: translate('lead'),
    dataTableColumns,
    readColumns,
    searchConfig,
    deleteModalLabels,
  };

  return (
    <CrudModule
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm />}
      config={config}
    />
  );
}
