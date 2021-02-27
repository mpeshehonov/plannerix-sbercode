import React from 'react';
import {Layout, Menu, Button, Upload, message} from 'antd';
import {CheckCircleOutlined, UploadOutlined} from '@ant-design/icons';
import './styles.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  const props = {
    name: 'file',
    // action: '#',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Layout.Header className="header">
      <Link to="/" className="header__logo">
        <CheckCircleOutlined />
        &nbsp; СберПлан
      </Link>
      <Menu className="header__menu" mode="horizontal">
        <Menu.Item key="ables">
          <a href="#ables">Возможности</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="#about">О продукте</a>
        </Menu.Item>
        <Menu.Item key="how">
          <a href="#how">Как это работает</a>
        </Menu.Item>
      </Menu>
      <Upload className="header__upload" {...props}>
        <Button icon={<UploadOutlined />}>
          Загрузить свой план
        </Button>
      </Upload>
    </Layout.Header>
  );
};

export default Header;
