import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { getExampleData } from '../apis/axiosExample'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import FetchExample from '@/data/fetch-example.md'
import Flex from '../components/common/Flex'

const AxiosExample = () => {
    const [data, setData] = useState({})
    const [markdownContent, setMarkdownContent] = useState('')

    const fetchData = async () => {
        const res = await getExampleData()

        if (res) setData(res)
    }

    useEffect(() => {
        if (data.id) setMarkdownContent(JSON.stringify(data))
    }, [data])

    return (
        <Flex justifyContent="center" className="p-4">
            <Col xs={8}>
                <Card>
                    <Card.Body>
                        <Row>
                            <h2>Axios</h2>
                        </Row>
                        <hr></hr>
                        <Row className="mb-3">
                            <Col>버튼을 누르면 데이터가 fetching 됩니다.</Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={2}>
                                <Button variant="primary" onClick={fetchData}>
                                    Fetch Data
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <div className="border border-1 p-3 rounded-3 bg-200">
                                    {markdownContent.length > 0
                                        ? markdownContent
                                        : '데이터가 없습니다.'}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ReactMarkdown
                                    children={FetchExample}
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

export default AxiosExample
