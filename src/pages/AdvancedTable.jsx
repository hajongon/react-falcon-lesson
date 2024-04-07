import { Card, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdvanceTableFooter from '../components/common/advance-table/AdvanceTableFooter'
import AdvanceTableSearchBox from '../components/common/advance-table/AdvanceTableSearchBox'
import AdvanceTableWrapper from '../components/common/advance-table/AdvanceTableWrapper'
import AdvanceTable from '../components/common/advance-table/AdvanceTable'
import { userAuthData2 } from '../data/advance-table-data'

const AdvancedTable = () => {
    const tableData = userAuthData2

    // 해당 모듈에서 원하는 '데이터의 구조' 가 있음.
    // 그 구조에 맞게 내가 매핑할 fetched data를 세팅할 수 있어야 함.

    const columns = [
        {
            accessor: 'name',
            Header: '이름',
        },
        {
            accessor: 'jobLevel',
            Header: '직위',
            headerProps: {
                className: 'text-end',
            },
            cellProps: {
                className: 'text-end',
            },
        },
        {
            accessor: 'team',
            Header: '소속',
            headerProps: {
                className: 'text-end',
            },
            cellProps: {
                className: 'text-end',
            },
        },
        {
            accessor: 'status',
            Header: '상태',
            headerProps: {
                className: 'text-end',
            },
            cellProps: {
                className: 'text-end',
            },
        },
    ]

    return (
        <AdvanceTableWrapper
            columns={columns}
            data={tableData}
            sortable
            pagination
            perPage={8}
        >
            <Card className="h-100">
                <Card.Header>
                    <Row className="flex-between-center">
                        <Col xs="auto" sm={6} lg={7}>
                            <h6 className="mb-0 text-nowrap py-2 py-xl-0">
                                사용자 및 권한 관리
                            </h6>
                        </Col>
                        <Col xs="auto" sm={6} lg={5}>
                            <AdvanceTableSearchBox
                                table
                                placeholder="Search for a page"
                            />
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className="p-0">
                    <AdvanceTable
                        table
                        headerClassName="bg-200 text-900 text-nowrap align-middle"
                        rowClassName="align-middle white-space-nowrap"
                        tableProps={{
                            className: 'fs--1 mb-0 overflow-hidden',
                        }}
                    />
                </Card.Body>
                <Card.Footer>
                    <AdvanceTableFooter
                        rowCount={tableData.length}
                        table
                        rowInfo
                        navButtons
                    />
                </Card.Footer>
            </Card>
        </AdvanceTableWrapper>
    )
}

export default AdvancedTable
