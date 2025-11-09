

(function () {
'use strict';


// Short helper for getting elements safely
function $id(id) { return document.getElementById(id); }


// Elements (match the ids in index.html)
var enterBtn = $id('gHi012');
var panel = $id('panel');
var statusHeading = $id('aBc456');
var statusParagraph = $id('dEf789');
var audio = $id('jKl345');


// Defensive guard: do nothing if required elements are missing
if (!enterBtn) return;


// Toggle helper to add/remove classes and update ARIA
function showPanel() {
if (!panel) return;
panel.classList.remove('hidden');
panel.classList.add('visible');
panel.setAttribute('aria-hidden', 'false');


// update accessible state on the button
enterBtn.setAttribute('aria-expanded', 'true');


// move keyboard focus into the revealed content (first focusable element or panel itself)
panel.setAttribute('tabindex', '-1');
panel.focus({ preventScroll: true });
}


function hideButton() {
enterBtn.classList.add('hidden');
enterBtn.setAttribute('aria-hidden', 'true');
}


// Button click behavior: hide the button immediately, then show panel after 2s and play audio
enterBtn.addEventListener('click', function (ev) {
ev.preventDefault();
hideButton();


// a short delay to allow CSS transitions and to create a nicer UX
setTimeout(function () {
showPanel();


// Try to play audio if available. Playback will only succeed on user gesture in most browsers.
if (audio && typeof audio.play === 'function') {
audio.play().catch(function (err) {
// Usually blocked autoplay; that's fine — don't spam the console.
console.info('Audio play prevented by browser or not available.', err && err.name);
});
}
}, 2000);
});


// OPTIONAL: keyboard accessibility for the Enter key on the button
enterBtn.addEventListener('keydown', function (ev) {
if (ev.key === 'Enter' || ev.key === ' ') {
ev.preventDefault();
enterBtn.click();
}
});


// NOTE: I intentionally removed anti-inspection code (blocking devtools, right-click)
// because it causes accessibility and debugging issues and does not improve security.


})();
