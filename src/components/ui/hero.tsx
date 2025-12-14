import { useEffect, useRef } from 'react';
import { Button } from './button';

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.playbackRate = 1.5;

        const attemptPlay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay was prevented, video will need user interaction
                    // This is expected on some mobile browsers
                });
            }
        };

        const handleEnded = () => {
            video.currentTime = 0;
            setTimeout(attemptPlay, 2000);
        };

        const handleCanPlay = () => {
            setTimeout(attemptPlay, 2000);
        };

        video.addEventListener('ended', handleEnded);
        video.addEventListener('canplaythrough', handleCanPlay);

        // Attempt to play immediately if already loaded
        if (video.readyState >= 3) {
            setTimeout(attemptPlay, 2000);
        }

        return () => {
            video.removeEventListener('ended', handleEnded);
            video.removeEventListener('canplaythrough', handleCanPlay);
        };
    }, []);

    return (
        <div className="min-h-screen px-6 py-10 flex items-center">
            <div className="max-w-6xl mx-auto w-full -mt-48 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                        Intentional web design<br />
                        for measurable momentum
                    </h1>
                    <Button
                        variant="link"
                        className="mt-1 p-0 h-auto font-semibold justify-start text-primary"
                        style={{ paddingLeft: 0, marginLeft: 0 }}
                        onClick={() => {
                            const element = document.getElementById('services');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Learn More
                    </Button>
                </div>
                <div className="flex-1 w-full">
                    <video
                        ref={videoRef}
                        className="w-full h-auto rounded-lg shadow-lg"
                        src="/PureGlow-ex.mp4"
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                        aria-label="Decorative animation showing web design work"
                    />
                </div>
            </div>
        </div>
    );
}
