<script lang="ts">
import WaveCanvas from '$lib/WaveCanvas.svelte';

type Props = {
  peaks: number[];
  position?: number;
  color?: string;
  progressColor?: string;
  gradientColors: string[];
  progressGradientColors: string[];
  height: number;
  barWidth: number;
  width: number;
};

let {
  peaks,
  position = 0,
  color = 'grey',
  progressColor = '#8a005e',
  gradientColors = [],
  progressGradientColors = [],
  height,
  barWidth,
  width
} = $props<Props>();
</script>

<div 
  on:click 
  on:mousemove 
  id="wave-wrapper" 
  style="position: relative; width: 100%; height: 100%; cursor: pointer;"
>
  <WaveCanvas 
    {peaks} 
    {barWidth} 
    {color}
    {gradientColors}
    canvasWidth={width} 
    canvasHeight={height}
  />
  <div 
    class="progress-wave-wrapper" 
    style="width: {Math.round(width * position)}px; height: {height}px;"
  >
    <WaveCanvas 
      {peaks} 
      {barWidth} 
      color={progressColor}
      gradientColors={progressGradientColors}
      canvasWidth={width}
      canvasHeight={height}
    />
  </div>
</div>

<style>
.progress-wave-wrapper {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  display: block;
  transition: width 200ms ease-in-out;
  box-sizing: border-box;
}
.progress-wave {
  color: #8a005e;
}
</style>