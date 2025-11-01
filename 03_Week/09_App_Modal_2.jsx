import { Button, Modal } from 'antd';
const { confirm } = Modal; // extract confirm method from Modal


const ConfirmDelete = () => {

  const showConfirm = () => {
    confirm({
      title: 'Do you want to delete this item?',
      content: 'Once deleted, you cannot recover this data.',
      okText: 'Yes, Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        console.log('Item deleted!');
      },
      onCancel() {
        console.log('Delete cancelled.');
      },
    });
  };



  return (
    <center style={{ marginTop: '100px' }}>
      <Button type="primary" style={{ background: '#ef653fff' }} onClick={showConfirm}>
        Delete Item
      </Button>
    </center>
  );
};

export default ConfirmDelete;
