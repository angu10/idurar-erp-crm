import CrudModule from '@/modules/CrudModule/CrudModule';
import TaxForm from '@/forms/TaxForm';
import useLanguage from '@/locale/useLanguage';

export default function Taxes() {
  const translate = useLanguage();
  const entity = 'taxes';

  const searchConfig = {
    displayLabels: ['taxName'],
    searchFields: 'taxName',
  };
  const deleteModalLabels = ['taxName'];

  const dataTableColumns = [
    { title: translate('name'), dataIndex: 'taxName' },
    {
      title: translate('Value'),
      dataIndex: 'taxValue',
      render: (value) => `${value}%`,
    },
    {
      title: translate('Default'),
      dataIndex: 'isDefault',
      render: (value) => (value ? translate('yes') : translate('no')),
    },
  ];

  const readColumns = [
    { title: translate('name'), dataIndex: 'taxName' },
    { title: translate('Value'), dataIndex: 'taxValue' },
  ];

  const config = {
    entity,
    PANEL_TITLE: translate('Taxes'),
    DATATABLE_TITLE: translate('taxes_list'),
    ADD_NEW_ENTITY: translate('add_new_tax'),
    ENTITY_NAME: translate('tax'),
    dataTableColumns,
    readColumns,
    searchConfig,
    deleteModalLabels,
  };

  return (
    <CrudModule
      createForm={<TaxForm />}
      updateForm={<TaxForm isUpdateForm />}
      config={config}
    />
  );
}
