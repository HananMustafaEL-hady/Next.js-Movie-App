import React, { Component, ErrorInfo, ReactNode } from "react";
import { ErrorWithStatus } from '../../models/error'
import Router from 'next/router'

interface Props {
    children: ReactNode;
    // history: History

}

interface State {
    hasError: boolean;
    error: ErrorWithStatus
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: {}
    };

    constructor(props: Props) {
        super(props);
    }


    public static getDerivedStateFromError(error: ErrorWithStatus): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    public componentDidCatch(error: ErrorWithStatus, errorInfo: ErrorInfo) {
        // console.log(error.info)
        // console.log(errorInfo)
        // console.error("Uncaught error:", error);
        return { error };

    }

    public render() {

        if (!this.state.hasError) {
            return this.props.children;
        }
        if (this.state.error?.status == 34) {
            Router.push('/pageNotFound')

            return null

        }
        if (this.state.error?.status == 422) {

            return <h1>{this.state.error.info}</h1>

        }



        else return <h1>error boundary</h1>


    }
}

export default ErrorBoundary;
