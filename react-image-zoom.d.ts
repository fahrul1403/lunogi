declare module 'react-image-zoom' {
    interface ReactImageZoomProps {
      width: number;
      height: number;
      zoomWidth: number;
      img: string;
      zoomStyle?: string;
      offset?: { vertical?: number; horizontal?: number };
      zoomPosition?: 'top' | 'left' | 'bottom' | 'right' | 'original';
      scale?: number;
      transitionTime?: number;
      zoomLensStyle?: string;
    }
  
    const ReactImageZoom: React.FC<ReactImageZoomProps>;
    export default ReactImageZoom;
  }
  