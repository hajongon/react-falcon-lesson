import Flex from '@/components/common/Flex'
import { Card, Col, Row } from 'react-bootstrap'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import BadExample from '@/data/abstraction1.md'
import GoodExample from '@/data/abstraction2.md'
import LevelOfAbstraction from '@/data/abstraction3.md'

const Abstraction = () => {
    return (
        <Flex justifyContent="center p-4">
            <Col xs={6}>
                <Card>
                    <Card.Header className="bg-300 fs-2 fw-bold">
                        컴포넌트 추상화
                    </Card.Header>
                    <Card.Body>
                        <Row className="mb-2">
                            <Col>
                                <h5>div 지옥</h5>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col>
                                <ReactMarkdown
                                    children={BadExample}
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
                        <Row className="mb-2">
                            <Col>
                                <h5>컴포넌트 단위로 추상화</h5>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col>
                                <ReactMarkdown
                                    children={GoodExample}
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
                        <Row className="mb-2">
                            <Col>
                                <h5>추상화 수준</h5>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col>
                                <ReactMarkdown
                                    children={LevelOfAbstraction}
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

export default Abstraction
