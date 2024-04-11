import React, { useState, useEffect } from 'react'

import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import Flex from '@/components/common/Flex'
import SoftBadge from '@/components/common/SoftBadge'

const RowAndCol = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1200)
        }

        // 리사이즈 이벤트 리스너 등록
        window.addEventListener('resize', handleResize)

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <Flex justifyContent="center" className="pt-3 pb-4">
            <Col xs={6}>
                <Card>
                    <Card.Header>
                        <h2>Row, Col</h2>
                    </Card.Header>
                    <Card.Body>
                        <Row className="p-2 mb-2">
                            <h4>size</h4>
                        </Row>
                        {!isSmallScreen ? (
                            <Row className="p-2 mb-3 fs--1">
                                <Col>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={2}>
                                                    <SoftBadge
                                                        bg="danger"
                                                        className="fs--1"
                                                    >
                                                        xs (extra small)
                                                    </SoftBadge>
                                                </Col>
                                                <Col xl={2} className="fs--1">
                                                    {`width < 576px`}
                                                </Col>
                                                <Col xl={4} className="fs--1">
                                                    <code>
                                                        {`<Col xs={열 개수}>`}
                                                    </code>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={2}>
                                                    <SoftBadge
                                                        bg="danger"
                                                        className="fs--1"
                                                    >
                                                        sm (small)
                                                    </SoftBadge>
                                                </Col>
                                                <Col xl={2} className="fs--1">
                                                    {`width >=576px`}
                                                </Col>
                                                <Col xl={4} className="fs--1">
                                                    <code>
                                                        {`<Col sm={열 개수}>`}
                                                    </code>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={2}>
                                                    <SoftBadge
                                                        bg="danger"
                                                        className="fs--1"
                                                    >
                                                        md (medium)
                                                    </SoftBadge>
                                                </Col>
                                                <Col xl={2} className="fs--1">
                                                    {`width >=768px`}
                                                </Col>
                                                <Col xl={4} className="fs--1">
                                                    <code>
                                                        {`<Col md={열 개수}>`}
                                                    </code>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={2}>
                                                    <SoftBadge
                                                        bg="danger"
                                                        className="fs--1"
                                                    >
                                                        lg (large)
                                                    </SoftBadge>
                                                </Col>
                                                <Col xl={2} className="fs--1">
                                                    {`width >=992px`}
                                                </Col>
                                                <Col xl={4} className="fs--1">
                                                    <code>
                                                        {`<Col lg={열 개수}>`}
                                                    </code>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={2}>
                                                    <SoftBadge
                                                        bg="danger"
                                                        className="fs--1"
                                                    >
                                                        xl (extra large)
                                                    </SoftBadge>
                                                </Col>
                                                <Col xl={2} className="fs--1">
                                                    {`width >=1200px`}
                                                </Col>
                                                <Col xl={4} className="fs--1">
                                                    <code>
                                                        {`<Col xl={열 개수}>`}
                                                    </code>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={2}>
                                                    <SoftBadge
                                                        bg="danger"
                                                        className="fs--1"
                                                    >
                                                        xl (extra extra large)
                                                    </SoftBadge>
                                                </Col>
                                                <Col xl={2} className="fs--1">
                                                    {`width >=1400px`}
                                                </Col>
                                                <Col xl={4} className="fs--1">
                                                    <code>
                                                        {`<Col xxl={열 개수}>`}
                                                    </code>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                        ) : null}

                        <Row className="p-2 pe-4 ps-4">
                            <Col
                                xs={8}
                                className="p-4 bg-300 border border-400"
                            >
                                xs=8
                            </Col>
                            <Col
                                xs={4}
                                className="p-4 bg-300 border border-400"
                            >
                                xs=4
                            </Col>
                        </Row>
                        {!isSmallScreen ? (
                            <Row className="p-2 mb-2 fs--1">
                                <Col>
                                    xs 이상의 크기에서 8:4 유지 (모든 화면
                                    크기에서 8:4)
                                </Col>
                            </Row>
                        ) : null}

                        <Row className="p-2 pe-4 ps-4">
                            <Col
                                sm={8}
                                className="p-4 bg-300 border border-400"
                            >
                                sm=8
                            </Col>
                            <Col
                                sm={4}
                                className="p-4 bg-300 border border-400"
                            >
                                sm=4
                            </Col>
                        </Row>
                        {!isSmallScreen ? (
                            <Row className="p-2 mb-2 fs--1">
                                <Col>
                                    sm 이상의 크기에서 8:4 유지 (xs 화면으로
                                    가면 비율 변경됨)
                                </Col>
                            </Row>
                        ) : null}

                        <Row className="p-2 mb-2">
                            <h4>gap</h4>
                        </Row>

                        <Row className="p-2 g-3 mb-3">
                            <Col sm={8}>
                                <div className="p-4 bg-300 border border-400">
                                    g-3
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="p-4 bg-300 border border-400">
                                    g-3
                                </div>
                            </Col>
                        </Row>

                        <Row className="p-2 g-2 mb-3">
                            <Col sm={8}>
                                <div className="p-4 bg-300 border border-400">
                                    g-2
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="p-4 bg-300 border border-400">
                                    g-2
                                </div>
                            </Col>
                        </Row>

                        <Row className="p-2 g-1">
                            <Col sm={8}>
                                <div className="p-4 bg-300 border border-400">
                                    g-1
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="p-4 bg-300 border border-400">
                                    g-1
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Flex>
    )
}

export default RowAndCol
