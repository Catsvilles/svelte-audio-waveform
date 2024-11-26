export interface AudioPeakOptions {
    numberOfBuckets?: number;
    channel?: number;
}

/**
 * Generates an array of peak values from an AudioBuffer
 * @param buffer - The AudioBuffer to analyze
 * @param options - Configuration options for peak generation
 * @returns Array of normalized peak values
 */
export function getPeaks(
    buffer: AudioBuffer, 
    options: AudioPeakOptions = {}
): number[] {
    const {
        numberOfBuckets = 600,
        channel = 0
    } = options;

    if (channel >= buffer.numberOfChannels) {
        throw new Error(`Channel ${channel} does not exist in audio buffer`);
    }

    const decodedAudioData = buffer.getChannelData(channel);
    const bucketDataSize = Math.floor(decodedAudioData.length / numberOfBuckets);
    const buckets: number[] = [];

    for (let i = 0; i < numberOfBuckets; i++) {
        const startingPoint = i * bucketDataSize;
        const endingPoint = startingPoint + bucketDataSize;
        
        let max = 0;
        for (let j = startingPoint; j < endingPoint; j++) {
            const absolute = Math.abs(decodedAudioData[j]);
            if (absolute > max) {
                max = absolute;
            }
        }

        buckets.push(max / 2);
    }

    return buckets;
}

/**
 * Creates an AudioBuffer from an audio file
 * @param file - Audio file to process
 * @returns Promise resolving to AudioBuffer
 */
export async function createAudioBuffer(file: File): Promise<AudioBuffer> {
    const audioContext = new AudioContext();
    console.log(file);
    
    const arrayBuffer = await file.arrayBuffer();
    return await audioContext.decodeAudioData(arrayBuffer);
}

/**
 * Utility function to normalize peak values
 * @param peaks - Array of peak values
 * @returns Normalized peak values between 0 and 1
 */
export function normalizePeaks(peaks: number[]): number[] {
    const max = Math.max(...peaks);
    return peaks.map(peak => peak / max);
}

/**
 * Type guard to check if a value is an AudioBuffer
 */
export function isAudioBuffer(value: any): value is AudioBuffer {
    return value instanceof AudioBuffer;
}

/**
 * Formats time in seconds to a string in HH:MM:SS or MM:SS format.
 * @param seconds - The time in seconds to format.
 * @returns A formatted time string (e.g., "02:34", "01:02:34").
 */
 export function formatTime(seconds: number): string {
    if (!isFinite(seconds) || seconds < 0) {
      return '00:00';
    }
  
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
  
    const formattedMins = hrs > 0 ? String(mins).padStart(2, '0') : String(mins);
    const formattedSecs = String(secs).padStart(2, '0');
  
    return hrs > 0
      ? `${hrs}:${formattedMins}:${formattedSecs}` // HH:MM:SS
      : `${formattedMins}:${formattedSecs}`;      // MM:SS
  }
  