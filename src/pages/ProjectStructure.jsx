import { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Treeview from '@/components/common/Treeview'
import { treeviewItems } from '../data/treeviewItems'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const ProjectStructure = () => {
    const [currentDetail, setCurrentDetail] = useState({})

    const showDetail = (id) => {
        const result = findNodeById(treeviewItems, id)
        if (result) {
            const newInfo = {
                icon: result.icon,
                iconClass: result.iconClass,
                id: result.id,
                name: result.name,
                code: result.code,
                desc: result.desc,
            }

            console.log(newInfo)

            setCurrentDetail(newInfo)
        }
    }

    const findNodeById = (nodes, id) => {
        let result = undefined

        // 각 노드에 대해 반복
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i]

            // 원하는 노드를 찾은 경우
            if (node.id === id) {
                return node
            }

            // 자식 노드가 있는 경우, 자식 노드들에서 재귀적으로 탐색
            if (node.children && node.children.length) {
                result = findNodeById(node.children, id)

                // 원하는 노드를 찾은 경우, 루프 종료
                if (result) {
                    break
                }
            }
        }

        return result
    }

    return (
        <Row className="g-3">
            <Col xs={3} className="pt-3 pb-4">
                <Card>
                    <Card.Body scope={{ Treeview }} language="jsx">
                        <Treeview
                            showDetail={showDetail}
                            data={treeviewItems}
                            expanded={[
                                '32',
                                '2',
                                '3',
                                '5',
                                '9',
                                '11',
                                '12',
                                '14',
                                '15',
                                '18',
                                '19',
                                '21',
                            ]}
                        />
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={9} className="pt-3 pb-4">
                <Card>
                    <Card.Header className="fs-1 bg-300 fw-bold">
                        {currentDetail.name || '선택된 항목 없음'}
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                {currentDetail.code && (
                                    <SyntaxHighlighter
                                        language="jsx"
                                        style={atomDark}
                                    >
                                        {currentDetail.code}
                                    </SyntaxHighlighter>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {currentDetail.desc && currentDetail.desc}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ProjectStructure
