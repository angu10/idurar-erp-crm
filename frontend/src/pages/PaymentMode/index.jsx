import CrudModule from '@/modules/CrudModule/CrudModule';
import PaymentModeForm from '@/forms/PaymentModeForm';
import useLanguage from '@/locale/useLanguage';

export default function PaymentMode() {
  const translate = useLanguage();
  const entity = 'paymentmode';

  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
  };
  const deleteModalLabels = ['name'];

  const dataTableColumns = [
    { title: translate('Payment Mode'), dataIndex: 'name' },
    { title: translate('Description'), dataIndex: 'description' },
    {
      title: translate('Default'),
      dataIndex: 'isDefault',
      render: (value) => (value ? translate('yes') : translate('no')),
    },
  ];

  const readColumns = [
    { title: translate('Payment Mode'), dataIndex: 'name' },
    { title: translate('Description'), dataIndex: 'description' },
  ];

  const config = {
    entity,
    PANEL_TITLE: translate('Payment Mode'),
    DATATABLE_TITLE: translate('payment_mode_list'),
    ADD_NEW_ENTITY: translate('add_new_payment_mode'),
    ENTITY_NAME: translate('Payment Mode'),
    dataTableColumns,
    readColumns,
    searchConfig,
    deleteModalLabels,
  };

  return (
    <CrudModule
      createForm={<PaymentModeForm />}
      updateForm={<PaymentModeForm isUpdateForm />}
      config={config}
    />
  );
}
