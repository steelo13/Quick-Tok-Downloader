
import React from 'react';
import { 
  Download, 
  Type, 
  Calculator, 
  Layout, 
  Link as LinkIcon, 
  Users,
  Video,
  Music,
  Image as ImageIcon,
  PlayCircle,
  FileVideo,
  User,
  Hash,
  MessageSquare,
  Smile,
  Hash as HashIcon,
  DollarSign,
  TrendingUp,
  Crop,
  Layers,
  QrCode,
  Calendar,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Tool, ToolCategory } from './types';

export const CATEGORIES: { id: ToolCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'Download', label: 'Media Tools', icon: <Download size={20} /> },
  { id: 'Text', label: 'Text & Bio', icon: <Type size={20} /> },
  { id: 'Calculator', label: 'Growth Stats', icon: <Calculator size={20} /> },
  { id: 'Design', label: 'Design Helper', icon: <Layout size={20} /> },
  { id: 'Link', label: 'Link Utilities', icon: <LinkIcon size={20} /> },
  { id: 'Community', label: 'Community', icon: <Users size={20} /> },
];

export const ALL_TOOLS: Tool[] = [
  // Download Tools
  { 
    id: 'video-downloader', 
    name: 'Video Downloader', 
    description: 'Download videos without watermarks', 
    category: 'Download', 
    icon: 'Video',
    steps: [
      'Find the TikTok video you want to download.',
      'Tap the "Share" button and select "Copy Link".',
      'Paste the link into the input field above.',
      'Click "Download" and choose your preferred quality.'
    ]
  },
  { 
    id: 'audio-downloader', 
    name: 'MP3 Downloader', 
    description: 'Extract audio from any TikTok video', 
    category: 'Download', 
    icon: 'Music',
    steps: [
      'Find the TikTok video with the sound you like.',
      'Copy the video link from the Share menu.',
      'Paste it here to extract the raw audio stream.',
      'Save the resulting MP3 file to your device.'
    ]
  },
  { 
    id: 'slideshow-downloader', 
    name: 'Slideshow Downloader', 
    description: 'Save all images from photo carousels', 
    category: 'Download', 
    icon: 'ImageIcon',
    steps: [
      'Copy the link of a TikTok Photo Mode post.',
      'Paste the link in the tool above.',
      'Our tool will fetch every individual high-res image.',
      'Download them one-by-one or as a bulk package.'
    ]
  },
  { 
    id: 'live-replay', 
    name: 'LIVE Replay', 
    description: 'Get public LIVE replay links', 
    category: 'Download', 
    icon: 'PlayCircle',
    steps: [
      'Wait for a public LIVE to end.',
      'Copy the profile link of the creator.',
      'Paste it to see if a public replay is available.',
      'Note: This only works for creators with public replays enabled.'
    ]
  },
  { 
    id: 'story-downloader', 
    name: 'Story Downloader', 
    description: 'Save stories before they disappear', 
    category: 'Download', 
    icon: 'FileVideo',
    steps: [
      'Locate a TikTok Story while it is still active.',
      'Copy the link of the creator or the specific story.',
      'Paste it here to secure a permanent copy.',
      'Download the story video before the 24h limit is up.'
    ]
  },
  { id: 'profile-video', name: 'Profile Downloader', description: 'Download user profile videos', category: 'Download', icon: 'User', steps: ['Enter the username or profile link.', 'We will locate the profile video.', 'Download in original quality.'] },
  { id: 'hd-selector', name: 'HD/SD Selector', description: 'Choose between high and low res', category: 'Download', icon: 'Zap', steps: ['Paste your video link.', 'Select between HD (1080p) or SD (720p).', 'Higher quality results in larger file size.'] },
  { id: 'cover-image', name: 'Cover Extractor', description: 'Download the video thumbnail image', category: 'Download', icon: 'ImageIcon', steps: ['Copy video link.', 'Paste to extract the thumbnail.', 'Download the image as a high-quality JPG.'] },
  { id: 'caption-extractor', name: 'Caption Extractor', description: 'Extract text captions from links', category: 'Download', icon: 'Type', steps: ['Paste video link.', 'The tool will pull the full caption text.', 'Copy the text for use in your own analysis.'] },
  { id: 'hashtag-extractor', name: 'Hashtag Extractor', description: 'List all hashtags used in a video', category: 'Download', icon: 'Hash', steps: ['Paste video link.', 'Extract only the hashtags used by the creator.', 'Useful for competitive research.'] },

  // Text Tools
  { 
    id: 'caption-formatter', 
    name: 'Caption Formatter', 
    description: 'Style your captions perfectly', 
    category: 'Text', 
    icon: 'Type',
    steps: [
      'Enter your raw caption text.',
      'Use our presets to add bullet points or separators.',
      'The tool ensures your layout stays clean on mobile.',
      'Copy and paste into TikTok post screen.'
    ]
  },
  { 
    id: 'line-breaker', 
    name: 'Line Break Gen', 
    description: 'Add clean spaces in descriptions', 
    category: 'Text', 
    icon: 'Layers',
    steps: [
      'Write your multi-line caption.',
      'Click generate to add invisible separators.',
      'This prevents TikTok from collapsing your paragraphs.',
      'Copy the result and paste directly.'
    ]
  },
  { id: 'bio-font', name: 'Bio Font Gen', description: 'Unicode fonts for your profile', category: 'Text', icon: 'Type', steps: ['Type your bio message.', 'Choose from the generated font styles.', 'Copy the stylized text to your TikTok profile settings.'] },
  { id: 'emoji-copy', name: 'Emoji Tool', description: 'Quick copy-paste trending emojis', category: 'Text', icon: 'Smile', steps: ['Browse trending TikTok emojis.', 'Click any emoji to copy instantly.', 'Use them to boost engagement in captions.'] },
  { id: 'invisible-char', name: 'Invisible Character', description: 'Generate invisible spacer text', category: 'Text', icon: 'Layers', steps: ['Click the button to generate a blank character.', 'Paste it in your bio or comments for unique spacing.', 'Works where standard spaces fail.'] },
  { id: 'length-counter', name: 'Length Counter', description: 'Stay within character limits', category: 'Text', icon: 'Hash', steps: ['Type or paste your text.', 'Monitor the real-time count for Bios or Captions.', 'Ensure you don\'t get cut off mid-sentence.'] },
  { id: 'comment-formatter', name: 'Comment Formatter', description: 'Better structured comments', category: 'Text', icon: 'MessageSquare', steps: ['Draft your long comment.', 'Add clean breaks and formatting.', 'Copy and post to stand out in the comment section.'] },
  { id: 'case-converter', name: 'Case Converter', description: 'Upper, lower, or title case', category: 'Text', icon: 'Type', steps: ['Paste your text.', 'Choose uppercase, lowercase, or capitalized.', 'Useful for stylized headers.'] },
  { id: 'bio-preview', name: 'Bio Previewer', description: 'See how your bio looks live', category: 'Text', icon: 'User', steps: ['Input your bio and profile name.', 'Visualize how it will appear on a mobile screen.', 'Adjust spacing before saving on TikTok.'] },
  { id: 'desc-cleaner', name: 'Desc Cleaner', description: 'Remove excess tags/links', category: 'Text', icon: 'ShieldCheck', steps: ['Paste a cluttered description.', 'Click clean to strip all hashtags and links.', 'Get back the raw text for repurposing.'] },

  // Calculators
  { 
    id: 'engagement-calc', 
    name: 'Engagement Calc', 
    description: 'Check likes/comments vs views', 
    category: 'Calculator', 
    icon: 'TrendingUp',
    steps: [
      'Find the video you want to audit.',
      'Enter the likes, comments, and shares.',
      'Enter total views for that video.',
      'Calculate the exact percentage of engaged users.'
    ]
  },
  { id: 'perf-estimator', name: 'Performance Estimator', description: 'Predict future video reach', category: 'Calculator', icon: 'Zap', steps: ['Enter your account averages.', 'Input current video velocity.', 'See predicted views for the next 24 hours.'] },
  { id: 'growth-rate', name: 'Growth Rate', description: 'Track follower increase daily', category: 'Calculator', icon: 'TrendingUp', steps: ['Input current followers.', 'Input followers from 24h or 7 days ago.', 'Check your compound growth percentage.'] },
  { id: 'earnings-est', name: 'Earnings Estimator', description: 'Potential creator fund revenue', category: 'Calculator', icon: 'DollarSign', steps: ['Enter your average monthly views.', 'Estimate your RPM (Revenue per 1000 views).', 'Calculate potential monthly income.'] },
  { id: 'brand-deal', name: 'Brand Deal Pricing', description: 'Calculate your worth for ads', category: 'Calculator', icon: 'DollarSign', steps: ['Enter your average views and niche.', 'Input your engagement rate.', 'Get low/mid/high price ranges for brand deals.'] },
  { id: 'ad-budget', name: 'Ad Budget Calc', description: 'Plan your TikTok ads spend', category: 'Calculator', icon: 'Layout', steps: ['Set your campaign goal.', 'Input your daily or total budget.', 'Estimate potential reach and conversions.'] },
  { id: 'cpm-cpc', name: 'CPM / CPC Calc', description: 'Ad efficiency metrics', category: 'Calculator', icon: 'Calculator', steps: ['Enter total ad spend.', 'Enter impressions or clicks.', 'Calculate your cost per result.'] },
  { id: 'fake-check', name: 'Fake Engagement', description: 'Ratio-based audit tool', category: 'Calculator', icon: 'ShieldCheck', steps: ['Input profile stats.', 'Analyze like-to-view and comment-to-like ratios.', 'Compare against platform benchmarks to spot bots.'] },
  { id: 'shadowban-check', name: 'Shadowban Check', description: 'Self-audit for restricted reach', category: 'Calculator', icon: 'ShieldCheck', steps: ['Check if "For You" traffic has dropped to zero.', 'Enter recent video performance stats.', 'Get a self-assessment of account health.'] },
  { id: 'monetization-check', name: 'Eligibility Check', description: 'Creator program requirements', category: 'Calculator', icon: 'Zap', steps: ['Input your current follower count.', 'Input views from the last 30 days.', 'Check if you meet the 10k/100k thresholds.'] },

  // Design Tools
  { id: 'size-checker', name: 'Video Size Checker', description: 'Resolution and file size guide', category: 'Design', icon: 'Layout', steps: ['Compare your file against the 9:16 vertical standard.', 'Check if your file size is below the 287MB limit.', 'Optimize for faster uploads.'] },
  { id: 'aspect-ratio', name: 'Ratio Converter', description: '9:16 vs 4:5 vs 1:1 guides', category: 'Design', icon: 'Crop', steps: ['Input your raw video dimensions.', 'Choose your target ratio.', 'Get crop measurements to keep subjects centered.'] },
  { id: 'thumbnail-preview', name: 'Thumbnail Preview', description: 'Check your cover before posting', category: 'Design', icon: 'ImageIcon', steps: ['Upload your cover image.', 'See how it looks with TikTok overlays.', 'Ensure text is not hidden by UI buttons.'] },
  { id: 'safe-area', name: 'Safe Area Tool', description: 'Avoid text covering buttons', category: 'Design', icon: 'Layers', steps: ['Upload a frame of your video.', 'Toggle the transparent UI overlay.', 'Move your graphics away from the red zones.'] },
  { id: 'cover-text', name: 'Cover Text Guide', description: 'Optimal text placement', category: 'Design', icon: 'Type', steps: ['Identify your thumbnail hook.', 'Follow the "Rule of Thirds" guide provided.', 'Place text in the top 70% of the screen.'] },
  { id: 'image-splitter', name: 'Slideshow Splitter', description: 'Prepare images for carousels', category: 'Design', icon: 'Layers', steps: ['Upload a wide panoramic image.', 'The tool will slice it into perfect squares.', 'Upload to TikTok in order for a seamless swipe.'] },
  { id: 'pfp-crop', name: 'Profile Crop', description: 'Perfect circle crop tool', category: 'Design', icon: 'User', steps: ['Upload your headshot.', 'Adjust the circular selection.', 'Download the perfectly centered result.'] },
  { id: 'overlay-preview', name: 'Overlay Preview', description: 'Test caption appearance', category: 'Design', icon: 'Layers', steps: ['Upload video frame.', 'Type your caption.', 'Simulate the black-box caption look.'] },
  { id: 'grid-preview', name: 'Profile Grid', description: 'See your future grid layout', category: 'Design', icon: 'Layout', steps: ['Upload your next 9 covers.', 'Arrange them in the 3x3 grid.', 'Ensure your overall aesthetic stays consistent.'] },
  { id: 'frame-grabber', name: 'Frame Grabber', description: 'Get still images from video', category: 'Design', icon: 'Video', steps: ['Upload or paste video link.', 'Scrub to the desired moment.', 'Save the frame as a high-quality PNG.'] },

  // Link Utilities
  { id: 'profile-url', name: 'URL Generator', description: 'Clean profile links', category: 'Link', icon: 'LinkIcon', steps: ['Type your username.', 'Generate a professional "tiktok.com/@user" link.', 'Copy for use in email or social bios.'] },
  { id: 'link-cleaner', name: 'Link Cleaner', description: 'Remove tracking parameters', category: 'Link', icon: 'ShieldCheck', steps: ['Paste a long "shared" link.', 'Click clean to remove tracking IDs.', 'Send a clean, privacy-friendly URL.'] },
  { id: 'user-checker', name: 'User Availability', description: 'Manual availability check', category: 'Link', icon: 'User', steps: ['Enter the desired username.', 'The tool will open the profile page.', 'If it says "Couldn\'t find this account", it might be free.'] },
  { id: 'id-finder', name: 'User ID Finder', description: 'Find numeric TikTok IDs', category: 'Link', icon: 'Hash', steps: ['Enter username.', 'Fetch the internal numeric user ID.', 'Useful for developers and advanced tools.'] },
  { id: 'bio-link', name: 'Bio Link Cleaner', description: 'Optimize external links', category: 'Link', icon: 'LinkIcon', steps: ['Paste your "Link in Bio" URL.', 'Clean any non-standard parameters.', 'Ensure it redirects properly from TikTok.'] },
  { id: 'hashtag-link', name: 'Hashtag Link Gen', icon: 'Hash', description: 'Generate clickable hashtag links', category: 'Link', steps: ['Enter a hashtag name.', 'Get the direct deep-link URL.', 'Send links to specific trends easily.'] },
  { id: 'comment-link', name: 'Comment Link Gen', icon: 'MessageSquare', description: 'Deep link to specific comments', category: 'Link', steps: ['Locate a comment on web.', 'Copy the comment ID.', 'Generate a link that scrolls directly to it.'] },
  { id: 'qr-gen', name: 'QR Code Gen', icon: 'QrCode', description: 'Scan to follow QR codes', category: 'Link', steps: ['Enter your profile URL.', 'Generate a high-quality QR code.', 'Print or use on stream for new followers.'] },
  { id: 'utm-builder', name: 'UTM Campaign', icon: 'Layers', description: 'Add tracking to TikTok links', category: 'Link', steps: ['Enter destination URL.', 'Add source (tiktok) and campaign name.', 'Generate a trackable link for analytics.'] },
  { id: 'share-link', name: 'Share Link Gen', icon: 'LinkIcon', description: 'Minimalist share links', category: 'Link', steps: ['Enter video link.', 'Convert it to a short "v.tiktok" style link.', 'Share easily via DM.'] },

  // Community
  { id: 'giveaway-picker', name: 'Giveaway Winner', description: 'Random comment selector', category: 'Community', icon: 'Users', steps: ['Paste video link.', 'Load all comments.', 'Click "Pick Winner" for a random unbiased selection.'] },
  { id: 'post-planner', name: 'Posting Planner', description: 'Best times for your region', category: 'Community', icon: 'Calendar', steps: ['Enter your timezone.', 'Input your target audience region.', 'Get a schedule of high-traffic "golden hours".'] },
  { id: 'trend-tracking', name: 'Trend Sheet', description: 'Manual trend log tool', category: 'Community', icon: 'TrendingUp', steps: ['Log a new trend name.', 'Input the origin date.', 'Track its popularity over the week.'] },
  { id: 'hashtag-limit', name: 'Hashtag Limit', description: '33 hashtag max checker', category: 'Community', icon: 'Hash', steps: ['Paste your list of hashtags.', 'The tool flags if you exceed the ideal limit.', 'Keep your posts from looking like spam.'] },
  { id: 'duration-check', name: 'Duration Checker', description: 'Video length optimization', category: 'Community', icon: 'Zap', steps: ['Enter video length.', 'Check against TikTok algorithm preferences (60s+ vs 15s).', 'Optimize for watch-time completion.'] },
  { id: 'caption-template', name: 'Caption Templates', description: 'Viral hook library', category: 'Community', icon: 'Type', steps: ['Browse categories like "Humor" or "Tutorial".', 'Copy a proven viral hook.', 'Fill in the blanks with your content details.'] },
  { id: 'content-calendar', name: 'Content Calendar', description: 'Plan your next 30 posts', category: 'Community', icon: 'Calendar', steps: ['Set your start date.', 'Input daily video ideas.', 'Export your plan to stay consistent.'] },
  { id: 'blocked-words', name: 'Blocked Word List', description: 'Filtered keyword generator', category: 'Community', icon: 'ShieldCheck', steps: ['Select common moderation categories.', 'Generate a list of words to block in comments.', 'Keep your comment section healthy.'] },
  { id: 'mod-checklist', name: 'Mod Checklist', description: 'Safety and community guide', category: 'Community', icon: 'ShieldCheck', steps: ['Review the safety guidelines.', 'Complete the setup for your LIVE moderators.', 'Ensure your stream is protected.'] },
  { id: 'creator-toolbox', name: 'Creator Toolbox', description: 'The all-in-one dashboard', category: 'Community', icon: 'Layout', steps: ['Access all QuickTok tools from one place.', 'Save your most used tools as favorites.', 'Manage your creator workflow.'] },
];
