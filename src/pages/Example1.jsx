import { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Flex from '../components/common/Flex'
import './Example1.css'

const Example1 = () => {
    const [count, setCount] = useState(0)
    const [showIncorrectReason, setShowIncorrectReason] = useState(false)
    const [showCorrectReason, setShowCorrectReason] = useState(false)

    const countUpIncorrect = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }

    const countUpCorrect = () => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <Flex justifyContent="center">
            <Col xs={6}>
                <Card>
                    <Card.Header className="bg-300 fw-bold">
                        State 비동기 처리
                    </Card.Header>
                    <Card.Body>
                        <Row className="mb-3">
                            <Col>
                                <h2>{count}</h2>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}>
                                <Button
                                    variant="primary"
                                    onClick={countUpIncorrect}
                                >
                                    Count Up
                                </Button>
                            </Col>
                            <Col xs={5}>
                                <pre className="codeBlock-state">{`const countUpIncorrect = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
}`}</pre>
                            </Col>
                            <Col xs={4}>
                                <Button
                                    variant="outline-info"
                                    onClick={() =>
                                        setShowIncorrectReason(
                                            !showIncorrectReason
                                        )
                                    }
                                    className="mb-2"
                                >
                                    이유
                                </Button>
                                {showIncorrectReason && (
                                    <div className="fs--1">
                                        React는 성능 최적화를 위해 상태
                                        업데이트를 배치로 처리하기 때문에, 이
                                        코드에서는 count 상태가 단 한 번만
                                        증가합니다.
                                    </div>
                                )}
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}>
                                <Button
                                    variant="success"
                                    onClick={countUpCorrect}
                                >
                                    Count Up
                                </Button>
                            </Col>
                            <Col xs={5}>
                                <pre className="codeBlock-state">{`const countUpCorrect = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
}`}</pre>
                            </Col>
                            <Col xs={4}>
                                <Button
                                    variant="outline-info"
                                    onClick={() =>
                                        setShowCorrectReason(!showCorrectReason)
                                    }
                                    className="mb-2"
                                >
                                    이유
                                </Button>
                                {showCorrectReason && (
                                    <div className="fs--1">
                                        각 호출은 독립적으로 이전 상태 값을
                                        참조하기 때문에, count는 세 번
                                        증가합니다. 이 방식은 연속적인 상태
                                        업데이트가 안정적으로 이루어지도록
                                        합니다.
                                    </div>
                                )}
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={3}>
                                <Button variant="warning" onClick={resetCount}>
                                    Reset
                                </Button>
                            </Col>
                            <Col xs={5}>
                                <pre className="codeBlock-state">{`const resetCount = () => {
    setCount(0)
}`}</pre>
                            </Col>
                            <Col xs={4}></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Flex>
    )
}

export default Example1
