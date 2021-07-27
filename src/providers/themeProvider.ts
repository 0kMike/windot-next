export enum primary {
    light = "#edebe9",
    dark = "#201f1e",
}

export enum secondary {
    light = "#f3f2f1",
    dark = "#323130",
}

export enum text {
    dark = "#000000",
    light = "#ffffff",
}

export enum accent {
    yellow = "#fff100",
    orange = "#ea4300",
    red = "#d13438",
    pink = "#e3008c",
    purple = "#5c005c",
    blue = "#0078d4",
    teal = "#008272",
    green = "#107c10",
}

export interface iTheme {
    primary: primary,
    secondary: secondary,
    accent: accent,
    text: text,
}
