import { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Flex from '../components/common/Flex'
import './Example1.css'
import WrongCase from '@/data/state-wrong-case.md'
import CorrectCase from '@/data/state-correct-case.md'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

    const [currentInputText1, setCurrentInputText1] = useState('')
    const [name1, setName1] = useState('')

    const handleChangeInputText1 = (e) => {
        setCurrentInputText1(e.target.value)
        setName1(currentInputText1)
    }

    const [currentInputText2, setCurrentInputText2] = useState('')
    const [name2, setName2] = useState('name2')

    const handleChangeInputText2 = (e) => {
        setCurrentInputText2(e.target.value)
    }

    useEffect(() => {
        setName2(currentInputText2)
    }, [currentInputText2])

    const [showCorrectCase, setShowCorrectCase] = useState(false)
    const handleShowCorrectCase = () => {
        setShowCorrectCase((prev) => !prev)
    }

    return (
        <Flex justifyContent="center p-4">
            <Col xs={6}>
                <Row className="mb-3">
                    <Col>
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
                                                업데이트를 배치로 처리하기
                                                때문에, 이 코드에서는 count
                                                상태가 단 한 번만 증가합니다.
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
                                                setShowCorrectReason(
                                                    !showCorrectReason
                                                )
                                            }
                                            className="mb-2"
                                        >
                                            이유
                                        </Button>
                                        {showCorrectReason && (
                                            <div className="fs--1">
                                                각 호출은 독립적으로 이전 상태
                                                값을 참조하기 때문에, count는 세
                                                번 증가합니다. 이 방식은
                                                연속적인 상태 업데이트가
                                                안정적으로 이루어지도록 합니다.
                                            </div>
                                        )}
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={3}>
                                        <Button
                                            variant="warning"
                                            onClick={resetCount}
                                        >
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
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header className="bg-300 fw-bold">
                                State 업데이트
                            </Card.Header>
                            <Card.Body>
                                <Row className="mb-2">
                                    <h3>😵 잘못된 사용</h3>
                                </Row>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="formPlaintext1"
                                >
                                    <Col sm="10">
                                        <Form.Control
                                            type="text"
                                            value={currentInputText1}
                                            onChange={handleChangeInputText1}
                                            placeholder="여기에 입력하세요."
                                        />
                                    </Col>
                                    <Col sm="10">
                                        <Form.Control
                                            type="text"
                                            disabled
                                            value={name1}
                                        />
                                    </Col>
                                </Form.Group>
                                <Row className="mb-5">
                                    <Col>
                                        <ReactMarkdown
                                            children={WrongCase}
                                            components={{
                                                code({
                                                    node,
                                                    inline,
                                                    className,
                                                    children,
                                                    ...props
                                                }) {
                                                    const match =
                                                        /language-(\w+)/.exec(
                                                            className || ''
                                                        )
                                                    return !inline && match ? (
                                                        <SyntaxHighlighter
                                                            children={String(
                                                                children
                                                            ).replace(
                                                                /\n$/,
                                                                ''
                                                            )}
                                                            style={atomDark}
                                                            language={match[1]}
                                                            // PreTag="div"
                                                            {...props}
                                                        />
                                                    ) : (
                                                        <code
                                                            className={
                                                                className
                                                            }
                                                            {...props}
                                                        >
                                                            {children}
                                                        </code>
                                                    )
                                                },
                                            }}
                                        />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <h3>😆 적절한 사용</h3>
                                </Row>

                                <Form.Group
                                    as={Row}
                                    className="mb-3"
                                    controlId="formPlaintext2"
                                >
                                    <Col sm="10">
                                        <Form.Control
                                            type="text"
                                            value={currentInputText2}
                                            onChange={handleChangeInputText2}
                                            placeholder="여기에 입력하세요."
                                        />
                                    </Col>
                                    <Col sm="10">
                                        <Form.Control
                                            type="text"
                                            disabled
                                            value={name2}
                                        />
                                    </Col>
                                </Form.Group>
                                {showCorrectCase ? (
                                    <Row>
                                        <Col>
                                            <ReactMarkdown
                                                children={CorrectCase}
                                                components={{
                                                    code({
                                                        node,
                                                        inline,
                                                        className,
                                                        children,
                                                        ...props
                                                    }) {
                                                        const match =
                                                            /language-(\w+)/.exec(
                                                                className || ''
                                                            )
                                                        return !inline &&
                                                            match ? (
                                                            <SyntaxHighlighter
                                                                children={String(
                                                                    children
                                                                ).replace(
                                                                    /\n$/,
                                                                    ''
                                                                )}
                                                                style={atomDark}
                                                                language={
                                                                    match[1]
                                                                }
                                                                // PreTag="div"
                                                                {...props}
                                                            />
                                                        ) : (
                                                            <code
                                                                className={
                                                                    className
                                                                }
                                                                {...props}
                                                            >
                                                                {children}
                                                            </code>
                                                        )
                                                    },
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                ) : null}
                                {!showCorrectCase ? (
                                    <Button
                                        variant="primary"
                                        onClick={handleShowCorrectCase}
                                    >
                                        코드 보기
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary"
                                        onClick={handleShowCorrectCase}
                                    >
                                        코드 접기
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Flex>
    )
}

export default Example1
