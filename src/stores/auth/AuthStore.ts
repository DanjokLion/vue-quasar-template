import { reactive } from 'vue'

const noop = () => { /* intentionally empty */ }

type Button = {
    label?: string;
    action?: () => void;
    imgSrc?: string;
}

export const useAuthStore = () => {
    const state = reactive({
        buttons: [
            {
                label: 'First button'
            },
            {
                label: 'Second button'
            },
            {
                imgSrc: '/img/person-logo.svg',
                action: noop
            }
        ].map((button: Button) => ({
            label: button.label,
            action: button.action ?? noop,
            imgSrc: button.imgSrc
        }))
    })

    return state
}
