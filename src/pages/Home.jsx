import reactLogo from '@/assets/img/home/react.svg'
import viteLogo from '@/assets/img/home/vite.svg'
import falconLogo from '@/assets/img/home/falcon.png'
import Flex from '@/components/common/Flex'
import { Col, Row } from 'react-bootstrap'
import './Home.css'

const Home = () => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            className="w-100"
            alignItems="center"
            style={{ height: '80dvh' }}
        >
            <Col xs={6}>
                <Row>
                    <Col xs={4} className="d-flex justify-content-center">
                        <a href="https://vitejs.dev" target="_blank">
                            <img
                                src={viteLogo}
                                className="logo"
                                alt="Vite logo"
                            />
                        </a>
                    </Col>
                    <Col xs={4} className="d-flex justify-content-center">
                        <a
                            href="https://themes.getbootstrap.com/preview/?theme_id=33181"
                            target="_blank"
                        >
                            <img
                                src={falconLogo}
                                className="logo falcon"
                                alt="Falcon logo"
                            />
                        </a>
                    </Col>
                    <Col xs={4} className="d-flex justify-content-center">
                        <a href="https://react.dev" target="_blank">
                            <img
                                src={reactLogo}
                                className="logo react"
                                alt="React logo"
                            />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <div className="d-flex justify-content-center align-items-center fs-8 fw-bold">
                        Vite + React + Falcon UI
                    </div>
                </Row>
            </Col>
        </Flex>
    )
}

export default Home
