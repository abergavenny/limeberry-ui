import { App } from "vue"
import { Button } from "./components"

export interface LimeberryOptions {
    components?: Record<string, any>;
}

const createLimeberry = (options: LimeberryOptions = {}) => {

    const install = (app: App) => {

        app.component("lb-button", Button)
    }

    return { install }
}

export {
    Button
}

export default createLimeberry
