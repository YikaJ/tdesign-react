import React from 'react';
import { Card, Row, Col, Button, Divider, Dropdown, MessagePlugin } from 'tdesign-react';
import type { DropdownProps } from 'tdesign-react';

import { ChatIcon, ShareIcon, ThumbUpIcon, Icon } from 'tdesign-icons-react';

const options = [
  {
    content: '操作一',
    value: 1,
  },
  {
    content: '操作二',
    value: 2,
  },
];

const clickHandler: DropdownProps['onClick'] = (data) => {
  MessagePlugin.success(`选中【${data.value}】`);
};

export default function HeaderSubtitleFooterActionsCard() {
  return (
    <Card
      title="标题"
      subtitle="副标题"
      actions={
        <Dropdown options={options} onClick={clickHandler} minColumnWidth="112">
          <Button variant="text" shape="square">
            <Icon name="more" />
          </Button>
        </Dropdown>
      }
      bordered
      cover="https://tdesign.gtimg.com/site/source/card-demo.png"
      style={{ width: '400px' }}
      footer={
        <Row align="middle" justify="center">
          <Col flex="auto">
            <Button variant="text">
              <ThumbUpIcon></ThumbUpIcon>
            </Button>
          </Col>
          <Divider layout="vertical"></Divider>
          <Col flex="auto">
            <Button variant="text">
              <ChatIcon></ChatIcon>
            </Button>
          </Col>
          <Divider layout="vertical"></Divider>
          <Col flex="auto">
            <Button variant="text">
              <ShareIcon></ShareIcon>
            </Button>
          </Col>
        </Row>
      }
    ></Card>
  );
}
