import { Form, Input, Select } from 'antd';
import useLanguage from '@/locale/useLanguage';
import AutoCompleteAsync from '@/components/AutoCompleteAsync';
import { countryList } from '@/utils/countryList';

export default function CompanyForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  return (
    <>
      <Form.Item label={translate('name')} name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label={translate('Contact')} name="contact">
        <AutoCompleteAsync
          entity="people"
          displayLabels={['firstName', 'lastName']}
          searchFields="firstName,lastName,email"
        />
      </Form.Item>
      <Form.Item label={translate('country')} name="country">
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          style={{ width: '100%' }}
        >
          {countryList.map((c) => (
            <Select.Option key={c.value} value={c.value} label={c.label}>
              {c?.icon && c.icon + ' '}
              {c.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label={translate('phone')} name="phone">
        <Input placeholder="+1 123 456 789" />
      </Form.Item>
      <Form.Item label={translate('email')} name="email" rules={[{ required: true }, { type: 'email' }]}>
        <Input placeholder="email@example.com" />
      </Form.Item>
      <Form.Item label={translate('website')} name="website">
        <Input addonBefore="http://" placeholder="www.example.com" />
      </Form.Item>
    </>
  );
}
