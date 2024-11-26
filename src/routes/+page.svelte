<script lang="ts">
  import { getPeaks, createAudioBuffer, formatTime } from '$lib/utils';
  import AudioWaveform from '$lib/AudioWaveform.svelte';

  let peaks: number[] = [];
  let progress = 0;
  let audio: HTMLAudioElement;
  let duration = 0;
  let isPlaying = false;

  async function handleAudioFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    // Create AudioBuffer and generate peaks
    const buffer = await createAudioBuffer(file);
    peaks = getPeaks(buffer, { numberOfBuckets: 1200 });

    // Create audio element for playback
    const url = URL.createObjectURL(file);
    audio = new Audio(url);
    
    // Set up audio events
    audio.addEventListener('loadedmetadata', () => {
      duration = audio.duration;
    });

    audio.addEventListener('timeupdate', () => {
      progress = audio.currentTime / audio.duration;
    });

    audio.addEventListener('play', () => {
      isPlaying = true;
    });

    audio.addEventListener('pause', () => {
      isPlaying = false;
    });

    audio.addEventListener('ended', () => {
      isPlaying = false;
      progress = 0;
    });
  }

  function handleSeek(event: CustomEvent<number>) {    
    if (!audio) return;

    const target = event.currentTarget.getBoundingClientRect();
    const position = event.pageX - target.left;
    const rate  = position / target.width;    
    const newTime = rate * audio.duration;
    audio.currentTime = newTime;
  }

  function togglePlayPause() {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }
</script>
<svelte:head>
  <title>Svelte Audio Waveform - Stunning Audio Visualizations</title>
  <meta name="description" content="Add stunning, customizable audio waveform visualizations to your Svelte apps. Perfect for music players, podcasts, and more!" />
  <meta name="keywords" content="Svelte, Audio Waveform, Music Player, Podcast Visualization, Audio Visualization" />
  <meta name="author" content="Your Name or Company" />
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Svelte Audio Waveform - Stunning Audio Visualizations" />
  <meta property="og:description" content="Add stunning, customizable audio waveform visualizations to your Svelte apps. Perfect for music players, podcasts, and more!" />
  <meta property="og:image" content="/path/to/your-image.png" />
  <meta property="og:url" content="https://yourwebsite.com/audio-waveform" />
  
  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Svelte Audio Waveform - Stunning Audio Visualizations" />
  <meta name="twitter:description" content="Add stunning, customizable audio waveform visualizations to your Svelte apps. Perfect for music players, podcasts, and more!" />
  <meta name="twitter:image" content="/path/to/your-image.png" />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<main>
  <!-- Main Header -->
  <h1>Svelte Audio Waveform</h1>
  <p>Visualize your audio files with stunning waveforms in Svelte. Upload an audio file to see the waveform in action!</p>
  <p>Check the project with full docs on <a href="https://github.com/Catsvilles/svelte-audio-waveform">https://github.com/Catsvilles/svelte-audio-waveform</a></p>

<div class="audio-player">
  <input 
    type="file" 
    accept="audio/*" 
    on:change={handleAudioFile} 
    class="file-input"
  />

  {#if peaks.length > 0}
    
    <!-- Example 1: Basic Waveform -->
    <div class="waveform-container">
      <h3>Basic Waveform</h3>
      <AudioWaveform
        barWidth={0}
        peaks={peaks}
        height={100}
        width={800}
        position={progress}
        duration={duration}
        on:click={handleSeek}
      />
      
      <div class="controls">
        <button 
          on:click={togglePlayPause}
          class="play-pause-btn"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <div class="time-display">
          {formatTime(progress * duration)}
          <span class="right-aligned">{formatTime(duration)}</span>
        </div>
      </div>
    </div>

    <!-- Example 1.2: Basic Waveform With Bars -->
    <div class="waveform-container">
      <h3>Basic Waveform With Bars</h3>
      <AudioWaveform
        barWidth={4}
        peaks={peaks}
        height={100}
        width={800}
        position={progress}
        duration={duration}
        on:click={handleSeek}
      />
      
      <div class="controls">
        <button 
          on:click={togglePlayPause}
          class="play-pause-btn"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <div class="time-display">
          {formatTime(progress * duration)}
          <span class="right-aligned">{formatTime(duration)}</span>
        </div>
      </div>
    </div>


    <!-- Example 2: Gradient Waveform Color -->
    <div class="waveform-container">
      <h3>Gradient Waveform Color</h3>
      <AudioWaveform
        barWidth={4}
        peaks={peaks}
        height={100}
        width={800}
        gradientColors={["red", "blue", "green"]}
        position={progress}
        duration={duration}
        on:click={handleSeek}
      />
      
      <div class="controls">
        <button 
          on:click={togglePlayPause}
          class="play-pause-btn"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <div class="time-display">
          {formatTime(progress * duration)}
          <span class="right-aligned">{formatTime(duration)}</span>
        </div>
      </div>
    </div>

    <!-- Example 3: Gradient Progress Color -->
    <div class="waveform-container">
      <h3>Gradient Progress Color</h3>
      <AudioWaveform
        barWidth={4}
        peaks={peaks}
        height={100}
        width={800}
        progressGradientColors={["green", "blue", "red"]}
        position={progress}
        duration={duration}
        on:click={handleSeek}
      />
      
      <div class="controls">
        <button 
          on:click={togglePlayPause}
          class="play-pause-btn"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <div class="time-display">
          {formatTime(progress * duration)}
          <span class="right-aligned">{formatTime(duration)}</span>
        </div>
      </div>
    </div>

  {/if}
</div>
</main>
<style>
  .audio-player {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
  }

  .waveform-container {
    width: 100%;
    margin-top: 1rem;
    background: #f5f5f5;
    border-radius: 8px;
    padding: 1rem;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .play-pause-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .time-display {
    font-family: monospace;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 2rem);
  }

  .right-aligned {
     text-align: right; /* Ensures right alignment within the span */
     flex-grow: 1; /* Pushes the element to the right */
     padding-left: auto; /* Ensures spacing between elements */
   }

   .file-input {
     width: calc(100% - 2rem); /* Adjusts for padding */
     padding: .5rem; /* Ensures consistent padding */
     border-radius: .25rem; /* Rounds corners */
     border-color:#ddd; /* Sets border color */
   }
</style>
