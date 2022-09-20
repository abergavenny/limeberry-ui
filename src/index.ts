import { App } from "vue"

import './assets/main.css'

export interface LimeberryOptions {
    components?: Record<string, any>;
}

const createLimeberry = (options: LimeberryOptions = {}) => {
    const install = (app: App) => {
        const { components } = options

        for (const key in components) {
            app.component(key, components[key])
        }
    }

    return { install }
}

export * as components from "./components"

export default createLimeberry
