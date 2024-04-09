import { Card, Col, Row, Button } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import jsToggleExample from '@/data/js-toggle-example.md'
import reactToggleExample from '@/data/react-toggle-example.md'
import Flex from '../components/common/Flex'
import { useState } from 'react'

const VanillaJsVsReact = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const themeStyles = {
        backgroundColor: isDarkTheme ? 'black' : 'white',
        color: isDarkTheme ? 'white!important' : 'black!important',
    }

    return (
        <Flex justifyContent="center" className="p-4">
            <Col xs={8}>
                <Card style={themeStyles}>
                    <Card.Header>
                        <h2>Vanilla JavaScript와 React</h2>
                    </Card.Header>
                    <Card.Body style={themeStyles}>
                        <Row>
                            <Col>
                                <ReactMarkdown
                                    children={jsToggleExample}
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
                        <Row className="mb-4">
                            <Col>
                                <div>
                                    <Button
                                        variant="primary"
                                        onClick={toggleTheme}
                                    >
                                        Toggle Theme (JS)
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <ReactMarkdown
                                    children={reactToggleExample}
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
                        <Row className="mb-4">
                            <Col>
                                {' '}
                                <div className="mb-2">
                                    <Button
                                        variant="primary"
                                        onClick={toggleTheme}
                                    >
                                        Toggle Theme (React)
                                    </Button>
                                </div>
                                <div className="text-success">
                                    현재 theme 는{' '}
                                    {!isDarkTheme ? 'light-mode' : 'dark-mode'}{' '}
                                    입니다.
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Flex>
    )
}

export default VanillaJsVsReact
