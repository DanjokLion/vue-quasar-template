import { computedEager, useMediaQuery } from '@vueuse/core'

export function useAdaptive() {
    const querySmMobile = useMediaQuery('(max-width: 419px)')
    const queryMobile = useMediaQuery('(max-width: 767px)')
    const queryTablet = useMediaQuery('(max-width: 1263px)')
    const queryDesktop = useMediaQuery('(max-width: 1919px)')
    const queryDesktopMax = useMediaQuery('(min-width: 1920px)')

    const isMobileSm = computedEager(() => {
        return querySmMobile.value
    }, {
        flush: 'pre'
    })
    const isMobile = computedEager(() => {
        return queryMobile.value
    }, {
        flush: 'pre'
    })
    const isTablet = computedEager(() => {
        return queryTablet.value
    }, {
        flush: 'pre'
    })
    const isDesktop = computedEager(() => {
        return queryDesktop.value
    }, {
        flush: 'pre'
    })
    const isDesktopMax = computedEager(() => {
        return queryDesktopMax.value
    }, {
        flush: 'pre'
    })

    return {
        isMobileSm,
        isMobile,
        isTablet,
        isDesktop,
        isDesktopMax
    }
}
