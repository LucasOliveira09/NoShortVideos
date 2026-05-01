# Roadmap

This roadmap defines the sequential phases to build the NoShortVideos extension.

## Phase 1: Project Setup & Foundation
- Set up Manifest V3 boilerplate.
- Define the project folder structure (popup, icons, background script, content scripts).
- Set up GitHub README.md and documentation.

## Phase 2: Content Scripts (DOM Manipulation)
- Implement logic to observe DOM changes.
- Identify and hide YouTube Shorts elements (shelf, sidebar links).
- Identify and hide Instagram Reels.
- Identify and hide TikTok main feed elements.

## Phase 3: User Interface (Popup)
- Create a modern, visually appealing popup interface.
- Add toggle switches to enable/disable the blocking globally or per platform.
- Connect the popup state to the content scripts via chrome.storage.

## Phase 4: Polish & Publish Preparation
- Refine the DOM hiding logic to prevent layout shifts.
- Finalize icons and branding.
- Write a comprehensive GitHub README explaining how to install and contribute.

## Phase 5: Donation System (QR Code & Donor Hall of Fame)
- Implement a "Donate" tab in the popup UI.
- Add a payment form for users to input their name and donation amount.
- Integrate a QR code generator (PIX-compatible) for payments.
- Display a list of recent donors and their contribution amounts.

