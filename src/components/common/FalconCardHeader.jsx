import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'
import classNames from 'classnames'

const Title = ({ titleTag: TitleTag, className, breakPoint, children }) => (
  <TitleTag
    className={classNames(
      {
        'mb-0': !breakPoint,
        [`mb-${breakPoint}-0`]: !!breakPoint
      },
      className
    )}
  >
    {children}
  </TitleTag>
)

const FalconCardHeader = ({
  title,
  titleTag,
  titleClass,
  breakPoint,
  endEl,
  children
}) => (
  <Card.Header className="bg-300">
    {endEl ? (
      <Row className="align-items-center">
        <Col>
          <Title
            breakPoint={breakPoint}
            titleTag={titleTag}
            className={titleClass}
          >
            {title}
          </Title>
          {children}
        </Col>
        <Col
          {...{ [breakPoint ? breakPoint : 'xs']: 'auto' }}
          className={`text${breakPoint ? `-${breakPoint}` : ''}-right`}
        >
          {endEl}
        </Col>
      </Row>
    ) : (
      <Title breakPoint={breakPoint} titleTag={titleTag} className={titleClass}>
        {title}
      </Title>
    )}
  </Card.Header>
)

export default FalconCardHeader
