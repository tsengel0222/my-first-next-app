import Player from "../components/Player";

export default function Index() {
  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=ZSRf3sIMCG0&list=RD-soxLpiWs_0&index=3",
        type: "video/youtube",
      },
    ],
  };

  return (
    <>
      <Player {...videoJsOptions} />
    </>
  );
}
