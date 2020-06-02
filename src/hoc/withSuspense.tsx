import React, { Suspense } from 'react'
import Preloader from '../components/common/Preloader/Preloader'

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return (
            <Suspense fallback={<Preloader />}>
                <WrappedComponent {...props} />
            </Suspense>
        )
    }
}
