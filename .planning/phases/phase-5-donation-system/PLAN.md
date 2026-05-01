# Phase 5: Donation System (QR Code & Donor Hall of Fame)

## Goal
Add a donation feature to the extension popup to allow users to support the project via PIX, featuring a QR code generator and a donor list.

## Proposed Changes

### UI (Popup)
- [ ] Add a new tab or section for "Donations".
- [ ] Create a form for name and amount.
- [ ] Implement a display for the QR Code.
- [ ] Create a "Hall of Fame" section to list donors.

### Logic
- [ ] Integrate a library for PIX QR code generation.
- [ ] Implement local or remote state management for donor list (mocked for now unless a backend is provided).
- [ ] Update popup navigation to handle the new tab.

## Verification Plan
- [ ] Verify QR code generation with valid PIX payloads.
- [ ] Test form validation (name and amount).
- [ ] Ensure donor list updates correctly upon simulated payment completion.
