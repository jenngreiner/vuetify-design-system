import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import palette from 'vuetify-design-system/styles/variables.module.scss'

export default createVuetify({
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