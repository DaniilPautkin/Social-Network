import React, { useState } from 'react'
import styles from './Paginator.module.css'
import cn from 'classnames'
import {
    StyledPaginator,
    StyledPaginatorPage,
    Page,
} from '../../../styles/App-styles'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({
    totalItemsCount,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10,
}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <StyledPaginatorPage>
            {portionNumber > 1 && (
                <Button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    <CaretLeftOutlined />
                </Button>
            )}
            <StyledPaginator>
                {pages
                    .filter(
                        (p) =>
                            p >= leftPortionPageNumber &&
                            p <= rightPortionPageNumber
                    )
                    .map((p) => {
                        return (
                            <div
                                // FIX: className

                                // currentPage={currentPage === p ? currentPage : ''}
                                className={cn(
                                    {
                                        [styles.selectedPage]:
                                            currentPage === p,
                                    },
                                    styles.pageNumber
                                )}
                                key={p}
                                onClick={(e) => {
                                    onPageChanged(p)
                                }}
                            >
                                <Page>{p}</Page>
                            </div>
                        )
                    })}
            </StyledPaginator>
            {portionCount > portionNumber && (
                <Button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    <CaretRightOutlined />
                </Button>
            )}
        </StyledPaginatorPage>
    )
}

export default Paginator
