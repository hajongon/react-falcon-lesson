import { Card, Col, Row, Table } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Flex from '@/components/common/Flex'
import ClassVsFunctionComponent from '@/data/class-vs-function.md'
import SoftBadge from '@/components/common/SoftBadge'
import ClassComponent from '@/data/class-component.md'
import FunctionComponent from '@/data/function-component.md'

const ClassVsFunction = () => {
    return (
        <Flex justifyContent="center" className="p-4">
            <Col xs={6}>
                <Card>
                    <Card.Header className="bg-300">
                        <h3>클래스형 컴포넌트와 함수형 컴포넌트</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>클래스형</th>
                                        <th>함수형</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>라이프사이클</td>
                                        <td>LifeCycle API</td>
                                        <td>React Hook</td>
                                    </tr>
                                    <tr>
                                        <td>state 관리</td>
                                        <td className="d-flex gap-3">
                                            <code>this.state</code>
                                            <code>this.setState</code>
                                        </td>
                                        <td>
                                            <code>useState</code>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>메모리 사용</td>
                                        <td>
                                            <SoftBadge
                                                bg="danger"
                                                className="fs--1"
                                            >
                                                많음
                                            </SoftBadge>
                                        </td>
                                        <td>
                                            <SoftBadge
                                                bg="success"
                                                className="fs--1"
                                            >
                                                적음
                                            </SoftBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>빌드 후 파일 크기</td>
                                        <td>
                                            <SoftBadge
                                                bg="danger"
                                                className="fs--1"
                                            >
                                                큼
                                            </SoftBadge>
                                        </td>
                                        <td>
                                            <SoftBadge
                                                bg="success"
                                                className="fs--1"
                                            >
                                                작음
                                            </SoftBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>가독성</td>
                                        <td>
                                            <SoftBadge
                                                bg="danger"
                                                className="fs--1"
                                            >
                                                낮음
                                            </SoftBadge>
                                        </td>
                                        <td>
                                            <SoftBadge
                                                bg="success"
                                                className="fs--1"
                                            >
                                                높음
                                            </SoftBadge>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row className="mb-5">
                            <Col>
                                <ReactMarkdown
                                    children={ClassVsFunctionComponent}
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
                        <Row>
                            <Col>
                                <h3>클래스형 컴포넌트</h3>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col>
                                <ReactMarkdown
                                    children={ClassComponent}
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
                        <Row>
                            <Col>
                                <h3>함수형 컴포넌트</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ReactMarkdown
                                    children={FunctionComponent}
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

export default ClassVsFunction
