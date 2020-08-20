<script>
import { onMount, beforeUpdate, afterUpdate } from 'svelte';

let canv;
export let canvasWidth;
export let canvasHeight;
export let color;
export let barWidth;
export let peaks;
let pixelRatio;
onMount(() => {
  pixelRatio = window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI;
  let ctx = canv.getContext('2d')

  // updateSize(containerWidth, containerHeight, peaks)

});

const absMaxf = (values) => {
  let max = -Infinity
  for (const i in values) {
    const num = Math.abs(values[i])
    if (num > max) {
      max = num
    }
  }

  return max
}

const maxf = (values) => {
  let max = -Infinity
  for (const i in values) {
    if (values[i] > max) {
      max = values[i]
    }
  }

  return max
}

const minf = (values) => {
  let min = +Infinity
  for (const i in values) {
    if (values[i] < min) {
      min = values[i]
    }
  }

  return min
}

const drawBars = (ctx, width, peaks) => {
  const params = {
    fillParent: true,
    height: canvasHeight,
    normalize: true,
    pixelRatio: pixelRatio,
    barWidth: barWidth,
    color: color,
  }
  // Bar wave draws the bottom only as a reflection of the top,
  // so we don't need negative values
  const hasMinVals = [].some.call(peaks, (val) => val < 0)
  if (hasMinVals) {
    // If the first value is negative, add 1 to the filtered indices
    let indexOffset = 0
    if (peaks[0] < 0) {
      indexOffset = 1
    }
    peaks = [].filter.call(
      peaks,
      (_, index) => (index + indexOffset) % 2 == 0
    )
  }

  // A half-pixel offset makes lines crisp
  const $ = 0.5 / params.pixelRatio
  const height = params.height * params.pixelRatio
  const offsetY = 0
  const halfH = params.height / 2 // Don't use height because this is after canvas height has been set
  const length = peaks.length
  const bar = params.barWidth * params.pixelRatio
  const gap = Math.max(params.pixelRatio, 2)
  const step = bar + gap

  let absmax = 1
  if (params.normalize) {
    absmax = absMaxf(peaks)
  }

  const scale = length / width

  //TODO if something, there is gradient color option
  // if (params.gradientColors) {
  //   const gradient = ctx.createLinearGradient(0, 0, width, 0)
  //   params.gradientColors.forEach((color) => {
  //     // The first position of each array is the stop position between 0 and 1
  //     // The second position is the color
  //     gradient.addColorStop(color[0], color[1])
  //   })
  //   ctx.fillStyle = gradient
  // } else {
  //   ctx.fillStyle = params.color
  // }

  ctx.fillStyle = params.color

  if (!ctx) {
    return
  }

  for (let i = 0; i < width; i += step) {
    let h = Math.round(peaks[Math.floor(i * scale)] / absmax * halfH)
    if (h === 0) {
      h = 1
    }
    ctx.fillRect(i + $, halfH - h + offsetY, bar + $, h * 2)
  }
}

const drawWaves = (ctx, width, peaks) => {
  const params = {
    fillParent: true,
    height: canvasHeight,
    normalize: true,
    pixelRatio: pixelRatio,
    color: color,
  }

  // Support arrays without negative peaks
  const hasMinValues = [].some.call(peaks, (val) => val < 0)
  if (!hasMinValues) {
    const reflectedPeaks = []
    for (var i = 0, len = peaks.length; i < len; i++) {
      reflectedPeaks[2 * i] = peaks[i]
      reflectedPeaks[2 * i + 1] = -peaks[i]
    }
    peaks = reflectedPeaks
  }

  // A half-pixel offset makes lines crisp
  const $ = 0.5 / params.pixelRatio
  const height = params.height * params.pixelRatio
  const offsetY = 0
  const halfH = params.height / 2
  const length = ~~(peaks.length / 2)

  let scale = 1
  if (params.fillParent && width != length) {
    scale = width / length
  }

  let absmax = 1
  if (params.normalize) {
    const max = maxf(peaks)
    const min = minf(peaks)
    absmax = -min > max ? -min : max
  }

  //TODO if something, there is gradient color option
  // if (params.gradientColors) {
  //   const gradient = ctx.createLinearGradient(0, 0, width, 0)
  //   params.gradientColors.forEach((color) => {
  //     // The first position of each array is the stop position between 0 and 1
  //     // The second position is the color
  //     gradient.addColorStop(color[0], color[1])
  //   })
  //   ctx.fillStyle = gradient
  // } else {
  //   ctx.fillStyle = params.color
  // }

  ctx.fillStyle = params.color


  if (!ctx) {
    return
  }

  ctx.beginPath()
  ctx.moveTo($, halfH + offsetY)

  for (var i = 0; i < length; i++) {
    var h = Math.round(peaks[2 * i] / absmax * halfH)
    ctx.lineTo(i * scale + $, halfH - h + offsetY)
  }

  // Draw the bottom edge going backwards, to make a single
  // closed hull to fill.
  for (var i = length - 1; i >= 0; i--) {
    var h = Math.round(peaks[2 * i + 1] / absmax * halfH)
    ctx.lineTo(i * scale + $, halfH - h + offsetY)
  }

  // ctx.closePath()
  ctx.fill()

  // Always draw a median line
  ctx.fillRect(0, halfH + offsetY - $, width, $)
}

const clearWave = (ctx, width, height) => {
  ctx.clearRect(0, 0, width, height)
}

const updateSize = (width, height, peaks) => {
  let pixelRatio = window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI;

  if (peaks) {
    const ctx = canv.getContext("2d")

    const displayWidth = Math.round(width / pixelRatio)
    const displayHeight = Math.round(height / pixelRatio)
    ctx.canvas.width = width
    ctx.canvas.height = height
    ctx.canvas.style.width = `${displayWidth}px`
    ctx.canvas.style.height = `${displayHeight}px`

    clearWave(ctx, width, height)
    if (barWidth) {
      drawBars(ctx, width, peaks)
    } else {
      drawWaves(ctx, width, peaks)
    }
  }
}
afterUpdate(() => {
  updateSize(canvasWidth, canvasHeight, peaks)
});

beforeUpdate(() => {
  if (canvasWidth) {
    updateSize(canvasWidth, canvasHeight, peaks)
  }
});

</script>
<canvas
	bind:this={canv}

></canvas>
