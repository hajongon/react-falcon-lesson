import { Card, Col, Row, Table } from 'react-bootstrap'

const BasicTable = () => {
    const userAuthData = [
        { name: '강민수', jobLevel: '매니저', team: '솔루션개발팀' },
        { name: '김도희', jobLevel: '매니저', team: 'EDS개발2팀' },
        { name: '이호인', jobLevel: '매니저', team: 'EDS개발3팀' },
        { name: '임강욱', jobLevel: '매니저', team: '신기술1팀' },
    ]

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="bg-300 fw-bold">
                            사용자 및 권한 관리
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                    <tr>
                                        <th scope="col">이름</th>
                                        <th scope="col">직위</th>
                                        <th scope="col">소속</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* 데이터 매핑 */}
                                    {userAuthData.map((user) => (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.jobLevel}</td>
                                            <td>{user.team}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default BasicTable
