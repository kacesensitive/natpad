export const Footer_ = () => {
  return (
    <footer className="text-sm font-light fixed bottom-0 text-center w-full">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="https://play.google.com/store/apps/details?id=com.natpadapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/google-play-badge.png"
            alt="Download on Google Play"
            width="180"
          />
        </a>
      </div>
      By KC {new Date().getFullYear()}, Built with ❤
    </footer>
  );
};
