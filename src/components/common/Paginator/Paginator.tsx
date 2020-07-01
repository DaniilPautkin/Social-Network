import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import cn from 'classnames'
import React, { useState } from 'react'
import {
    Page,
    StyledButton,
    StyledPaginator,
    StyledPaginatorPage,
} from '../../../styles/App-styles'
import styles from './Paginator.module.css'

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
                <StyledButton
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    <CaretLeftOutlined />
                </StyledButton>
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
                <StyledButton
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    <CaretRightOutlined />
                </StyledButton>
            )}
        </StyledPaginatorPage>
    )
}

export default Paginator
