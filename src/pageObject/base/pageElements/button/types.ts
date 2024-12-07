export interface ClickOptions {
    button?: "left" | "right" | "middle",
    clickCount?: number,
    delay?: number,
    force?: boolean,
    modifiers?: ("Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift")[],
    noWaitAfter?: boolean,
    position?: {
        x: number,
        y: number,
    },
    timeout?: number,
    trial?: boolean,
}