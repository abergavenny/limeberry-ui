import { App } from "vue"
import * as components from "./components"
import './assets/main.css'

export interface LimeberryOptions {
    components?: Record<string, any>;
}

const createLimeberryPlugin = (options: LimeberryOptions = {}) => {
    const install = (app: App) => {
        const plugins: Record<string, any> = components;
        for (const key in plugins) {
            app.component(key, plugins[key])
        }
    }

    return { install }
}

export default createLimeberryPlugin
