import { Form, Input } from 'antd';
import useLanguage from '@/locale/useLanguage';

export default function PeopleForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  return (
    <>
      <Form.Item
        label={translate('first name')}
        name="firstName"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50%)', paddingRight: '5px' }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate('last name')}
        name="lastName"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50%)', paddingLeft: '5px' }}
      >
        <Input />
      </Form.Item>
      <Form.Item label={translate('email')} name="email" rules={[{ type: 'email' }]}>
        <Input placeholder="email@example.com" />
      </Form.Item>
      <Form.Item label={translate('phone')} name="phone">
        <Input placeholder="+1 123 456 789" />
      </Form.Item>
      <Form.Item label={translate('country')} name="country">
        <Input />
      </Form.Item>
      <Form.Item label={translate('address')} name="address">
        <Input />
      </Form.Item>
    </>
  );
}
