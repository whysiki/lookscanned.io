import type { ScanConfig } from "./types";
import { scanCanvas } from "./scan-canvas";

export interface WorkerMessage {
  page: Blob;
  config: ScanConfig;
}

onmessage = async (e: MessageEvent<WorkerMessage>) => {
  const { page, config } = e.data;
  // disable eslint ban ts-ignore
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const canvas = new OffscreenCanvas(1000, 1000);
  await scanCanvas(canvas, page, config);
  const blob = await canvas.convertToBlob({ type: config.output_format });
  postMessage(blob);
};
