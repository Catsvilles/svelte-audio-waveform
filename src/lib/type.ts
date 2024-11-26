export interface WaveformProps {
    peaks: number[];
    percent: number;
    color?: string;
    progressColor?: string;
    height?: number;
    barWidth?: number;
}

export interface WaveCanvasProps {
    peaks: number[];
    canvasWidth: number;
    canvasHeight: number;
    color: string;
    barWidth?: number;
}

export interface DrawParams {
    fillParent: boolean;
    height: number;
    normalize: boolean;
    pixelRatio: number;
    barWidth?: number;
    color: string;
}