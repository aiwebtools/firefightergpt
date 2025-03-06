
import React, { useEffect, useRef } from 'react';

interface VideoEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  muted?: boolean;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  videoId,
  title = 'YouTube video player',
  autoplay = true,
  muted = false,
  className = '',
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Set quality to 1080p (hd1080) when the video loads
    const handleLoad = () => {
      if (iframeRef.current) {
        try {
          // The postMessage API is used to communicate with the YouTube player
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({
              event: 'command',
              func: 'setPlaybackQuality',
              args: ['hd1080'],
            }),
            '*'
          );
        } catch (e) {
          console.error('Failed to set video quality:', e);
        }
      }
    };
    
    if (iframeRef.current) {
      iframeRef.current.addEventListener('load', handleLoad);
    }
    
    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleLoad);
      }
    };
  }, []);
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay ? 1 : 0
  }&mute=${muted ? 1 : 0}&controls=1&rel=0&modestbranding=1&showinfo=0&enablejsapi=1&origin=${
    window.location.origin
  }`;
  
  return (
    <div className={`relative w-full overflow-hidden rounded-lg shadow-lg ${className}`} style={{ aspectRatio: '16/9' }}>
      <iframe
        ref={iframeRef}
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
