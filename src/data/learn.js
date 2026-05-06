// Master config for the Learn section.
// Flip flags here — nothing else in the codebase needs to change.

export const learnConfig = {
  enabled: true, // shows/hides the Learn tab in the navbar + page

  showDanceVideos: true, // video embeds in DanceModal and LearnDanceCard
  showSocialLinks: true, // social channel block on the Learn page

  social: {
    youtube: {
      url: "https://www.youtube.com/@TiniklingDanceCompany",
      visible: true,
    },
    instagram: { url: "https://www.instagram.com/fhs_tdc/", visible: true },
    tiktok: { url: "", visible: false },
  },
};
