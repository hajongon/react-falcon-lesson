import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import Flex from './Flex'
import barChart from '@/assets/img/illustrations/crm-bar-chart.png'
import lineChart from '@/assets/img/illustrations/crm-line-chart.png'

const Logo = ({ at, className, ...rest }) => {
    return (
        <Link
            to="/"
            className={classNames(
                'text-decoration-none',
                { 'navbar-brand text-left': at === 'navbar-vertical' },
                { 'navbar-brand text-left': at === 'navbar-top' }
            )}
            {...rest}
        >
            <div
                className={classNames(
                    'd-flex',
                    {
                        'align-items-center py-3': at === 'navbar-vertical',
                        'align-items-center': at === 'navbar-top',
                        'flex-center fw-bolder fs-5 mb-4': at === 'auth',
                    },
                    className
                )}
            >
                {/* <img className="me-2" src={logo} alt="Logo" width={width * 1} /> */}
                {/* <span className={classNames('font-sans-serif', textClass)}>falcon</span> */}
                <Col sm="auto">
                    <Flex alignItems="center">
                        <img
                            src={barChart}
                            width={70}
                            alt="..."
                            className="ms-n4"
                        />
                        <div>
                            <h6 className="text-primary fs--1 mb-0">
                                Welcome to{' '}
                            </h6>
                            <h4 className="text-primary fw-bold mb-0">
                                Falcon
                                <span className="text-info fw-medium fs-0">
                                    {' '}
                                    Demo
                                </span>
                            </h4>
                        </div>
                        <img
                            src={lineChart}
                            width={100}
                            alt="..."
                            className="ms-n4 d-md-none d-lg-block"
                        />
                    </Flex>
                </Col>
            </div>
        </Link>
    )
}

export default Logo
