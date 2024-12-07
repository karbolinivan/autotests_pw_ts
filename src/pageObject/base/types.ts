export interface ReloadOptions {
    timeout?: number,
    waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit"
}
