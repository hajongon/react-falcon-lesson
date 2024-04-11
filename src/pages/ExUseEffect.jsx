import { useState, useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Flex from '../components/common/Flex'
import useEffectExample from '@/data/use-effect-example.md'

function ExUseEffect() {
    const [count, setCount] = useState(0)

    // useEffect를 사용하여 사이드 이펙트 처리
    useEffect(() => {
        // 문서 제목을 업데이트하는 사이드 이펙트
        document.title = `You clicked ${count} times`
    })

    const resetTitle = () => {
        document.title = `React - Falcon 강의`
    }

    return (
        <Flex justifyContent="center" className="p-4">
            <Col xs={6}>
                <Card>
                    {/* <Card.Header>1</Card.Header> */}
                    <Card.Body>
                        <Row className="mb-3">
                            <div>
                                <h2>useEffect</h2>
                                <hr></hr>
                                <h4>You clicked {count} times</h4>
                                <br></br>
                                <Button
                                    variant="primary"
                                    onClick={() => setCount(count + 1)}
                                    className="me-2"
                                >
                                    Count Up
                                </Button>
                                <Button variant="success" onClick={resetTitle}>
                                    Reset Title
                                </Button>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <ReactMarkdown
                                    children={useEffectExample}
                                    components={{
                                        code({
                                            node,
                                            inline,
                                            className,
                                            children,
                                            ...props
                                        }) {
                                            const match = /language-(\w+)/.exec(
                                                className || ''
                                            )
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    children={String(
                                                        children
                                                    ).replace(/\n$/, '')}
                                                    style={atomDark}
                                                    language={match[1]}
                                                    // PreTag="div"
                                                    {...props}
                                                />
                                            ) : (
                                                <code
                                                    className={className}
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
                    </Card.Body>
                </Card>
            </Col>
        </Flex>
    )
}

export default ExUseEffect
