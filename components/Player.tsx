import { useCallback, useEffect, useState } from "react";
import videojs from "video.js";
import "videojs-youtube";

interface PlayerProps {
  /**
   * The order of technology to use for the player.
   */
  techOrder: string[];
  /**
   * Is autoplay enabled for this video?
   */
  autoplay: boolean;
  /**
   * Should this video have controls?
   */
  controls: boolean;
  /**
   * A list of video sources.
   */
  sources: {
    /**
     * The source URL.
     */
    src: string;
    /**
     * The type of source.
     */
    type: string;
  }[];
}

/**
 * A simple video player component for displaying videos from external websites.
 * @returns A Video.js video player element.
 */
const Player = (props: PlayerProps) => {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  
  const onVideo = useCallback((el: HTMLVideoElement) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) {
      return;
    }

    // Initialize Video.js player
    const player = videojs(videoEl, {
      techOrder: props.techOrder,
      autoplay: props.autoplay,
      controls: props.controls,
      sources: props.sources,
    });

    return () => {
      player.dispose();
    };
  }, [props, videoEl]);

  return (
    <>
      <h1>Лхагвасүрэн хайранд итгээрэй</h1>
      <div data-vjs-player>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  );
};

export default Player;
