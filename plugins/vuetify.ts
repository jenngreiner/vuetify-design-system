import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import palette from '../styles/variables.module.scss'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
        defaultTheme: "dark",
        themes: {
            dark: {
                dark: true,
                colors: {
                    primary: palette.darkPrimary,
                    accent: palette.darkAccent,
                    dark: palette.darkDark,
                    light: palette.darkLight,
                    background: palette.darkBackground,
                    error: palette.error,
                    info: palette.info,
                    warning: palette.warning,
                    success: palette.success,
                }
            },
            light: {
                dark: false,
                colors: {
                    primary: palette.lightPrimary,
                    dark: palette.lightDark,
                    light: palette.lightLight,
                    background: palette.lightBackground,
                    error: palette.error,
                    info: palette.info,
                    warning: palette.warning,
                    success: palette.success,
                }
            }
        }
    }
})