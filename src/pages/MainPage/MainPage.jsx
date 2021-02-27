import React from 'react';
import Iframe from 'react-iframe';
import {Col, Row, Typography, Input, Card, Upload, message} from 'antd';
import {SearchOutlined, UploadOutlined} from '@ant-design/icons';
import './styles.scss';
import able1 from './../../images/able1.png';
import able2 from './../../images/able2.png';
import able3_1 from './../../images/able3_1.png';
import able3_2 from './../../images/able3_2.png';

const {Title, Paragraph, Text, Link} = Typography;
const {Search} = Input;
const {Meta} = Card;
const {Dragger} = Upload;

const MainPage = () => {
  const onSearch = (value) => console.log(value);

  const props = {
    name: 'file',
    multiple: true,
    action: '#',
    onChange(info) {
      const {status} = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Row justify="center" className="mt-6 figure-background">
        <Col span={24}>
          <Title align="center">
            Посмотри свою квартиру в виртуальной реальности
          </Title>
          <div className="search">
            <Search
              className="search__input"
              placeholder="Введите адрес"
              enterButton="Найти"
              size="large"
              prefix={<SearchOutlined />}
              onSearch={onSearch}
              defaultValue="Россия, Ульяновск, улица Гагарина, дом 9, квартира 25"
            />
          </div>
          <Iframe
            className="application"
            url="https://shadowru.github.io/"
            width="100%"
            height="450px"
            display="initial"
          />
        </Col>
      </Row>
      <Row
        id="ables"
        justify="center"
        className="mt-6 pt-6 gray-background figure-background"
      >
        <Col span={24}>
          <Title align="center">Возможности редактора</Title>
          <Row justify="center">
            <Col span={8}>
              <Card
                style={{width: 240}}
                cover={<img alt="Возможность 1" src={able1} />}
              >
                <Meta description="Создать 3D-модель квартиры, офиса, кафе или магазина" />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{width: 240}}
                cover={<img alt="Возможность 2" src={able2} />}
              >
                <Meta description="Встраивать проекты и виртуальные туры на сторонние сайты" />
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{width: 240}}
                cover={<img alt="Возможность 3" src={able3_1} />}
              >
                <Meta description="VR-панорамы для просмотра через смартфон и очки виртуальной реальности" />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id="build" justify="center" className="mt-6">
        <Col span={24}>
          <Title align="center">Постройте своё помещение в 3D</Title>

          <div className="upload-wrapper figure-background">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">Загрузите картинку с планом</p>
              <p className="ant-upload-hint">
                Перетащите картинку или Файл выберите файл для загрузки вашего
                плана
              </p>
            </Dragger>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
