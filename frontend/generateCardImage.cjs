const fs = require('fs');

const imageB64 = fs.readFileSync('public/image.png').toString('base64');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 580" width="1000" height="2320">
  <defs>
    <style>
      .bg { fill: #ffffff; rx: 12px; stroke: #e0e0e0; stroke-width: 1; }
      .green-bar { fill: #2e7d32; }
      .text-name { font-family: 'Segoe UI', Arial, sans-serif; font-weight: bold; font-size: 16px; fill: #222222; text-anchor: middle; text-transform: uppercase; }
      .text-desig { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 600; font-size: 13px; fill: #2e7d32; text-anchor: middle; }
      .text-id { font-family: 'Segoe UI', Arial, sans-serif; font-weight: bold; font-size: 12px; fill: #666666; text-anchor: middle; letter-spacing: 0.5px; }
      .text-sig { font-family: 'Brush Script MT', cursive, sans-serif; font-size: 18px; fill: #111111; text-anchor: middle; }
      .text-auth { font-family: 'Segoe UI', Arial, sans-serif; font-size: 9px; fill: #888888; text-anchor: middle; letter-spacing: 1px; }
      .line { stroke: #aaaaaa; stroke-width: 1; }
    </style>

    <!-- Globe Gradient for TeckValley Logo -->
    <radialGradient id="globeGrad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#73dafb" />
      <stop offset="50%" stop-color="#21a2f3" />
      <stop offset="100%" stop-color="#0b58cc" />
    </radialGradient>

    <clipPath id="avatar-clip">
      <circle cx="133" cy="120" r="38" />
    </clipPath>
  </defs>

  <!-- Card Background (Extended height to 580 to pad the 3D model clipping) -->
  <rect width="250" height="580" class="bg" />

  <!-- Full-Height Left Vertical Green Stripe -->
  <path d="M0,12 A12,12 0 0,1 12,0 L16,0 L16,580 L12,580 A12,12 0 0,1 0,568 Z" class="green-bar" />

  <!-- Shift all content down by 90 to place it perfectly in the middle 70% of the card -->
  <g transform="translate(0, 90)">
    <!-- TECKVALLEY LOGO SECTION -->
    <g transform="translate(133, 30)">
      <!-- Globe Graphic -->
      <circle cx="0" cy="-10" r="16" fill="url(#globeGrad)" />

      <!-- Network Grid Lines -->
      <path d="M -15,-5 Q 0,-2 15,-5 M -16,0 Q 0,4 16,0 M -13,8 Q 0,11 13,8" fill="none" stroke="#ffffff" stroke-width="0.8" opacity="0.8" />
      <path d="M -5,-15 Q -2,0 -5,15 M 2,-16 Q 5,0 2,16 M 9,-13 Q 11,0 9,13" fill="none" stroke="#ffffff" stroke-width="0.8" opacity="0.8" />

      <!-- Network Nodes -->
      <circle cx="-5" cy="-8" r="2.5" fill="#ffffff" />
      <circle cx="2" cy="-4" r="3.5" fill="#ffffff" />
      <circle cx="-7" cy="3" r="2" fill="#ffffff" />
      <circle cx="-4" cy="8" r="2.5" fill="#ffffff" />
      <circle cx="10" cy="8" r="2" fill="#ffffff" />

      <!-- TeckValley Typography -->
      <g transform="translate(0, 16)">
        <!-- Left Blue Dot -->
        <circle cx="-42" cy="-3" r="2.5" fill="#00aeee" />

        <text font-family="'Segoe UI', Arial, sans-serif" font-weight="bold" font-size="13" text-anchor="middle">
          <tspan fill="#00aeee">Teck</tspan><tspan fill="#414141">Valley</tspan>
        </text>

        <!-- Right Blue Dot -->
        <circle cx="42" cy="-3" r="2.5" fill="#00aeee" />
      </g>
    </g>

    <!-- Green Circle Frame & Employee Avatar -->
    <circle cx="133" cy="120" r="43" class="green-bar" />
    <circle cx="133" cy="120" r="38" fill="#e0e0e0" />

    <g clip-path="url(#avatar-clip)">
      <circle cx="133" cy="110" r="15" fill="#757575" />
      <circle cx="133" cy="146" r="26" fill="#757575" />
    </g>
    <circle cx="133" cy="120" r="38" fill="none" stroke="#ffffff" stroke-width="2" />

    <!-- Employee Details -->
    <text x="133" y="198" class="text-name">Abhijit Bhunia</text>
    <text x="133" y="218" class="text-desig">AIML Trainee</text>
    <text x="133" y="238" class="text-id">TK-12688</text>

    <!-- Authority Signature Area -->
    <text x="133" y="340" class="text-sig">A. Signature</text>
    <line x1="83" y1="348" x2="183" y2="348" class="line" />
    <text x="133" y="362" class="text-auth">AUTHORIZED SIGNATORY</text>
  </g>
</svg>
`;

const exportStr = 'export const abImage = `data:image/svg+xml;utf8,' + encodeURIComponent(svg) + '`;';
fs.writeFileSync('src/components/cardImage.js', exportStr);
