export interface InfoError {
    success: boolean,
    status_code: number,
    status_message: string
}

export interface ErrorWithStatus {
    info?: InfoError,
    status?: number
    message?: string;

}