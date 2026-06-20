# Partner & Sponsor Logos

Drop each institution's logo in this folder using the **exact filenames** below.
The Partners section ([`components/Partners.jsx`](../../components/Partners.jsx)) renders
each logo on a white tile; until a file exists, it gracefully falls back to the
institution's name as text.

| Institution                          | Filename                                       |
| ------------------------------------ | ---------------------------------------------- |
| Royal Academy of Management          | `royal-academy-of-management.png`              |
| Sultan Haitham City                  | `sultan-haitham-city.png`                      |
| Omantel                              | `omantel.png`                                  |
| Muwasalat                            | `muwasalat.png`                                |
| Invest in Oman                       | `invest-in-oman.png`                           |
| Oman Commercial Arbitration Centre   | `oman-commercial-arbitration-centre.png`       |
| Global Shapers Muscat Hub            | `global-shapers-muscat-hub.png`                |

## Tips
- **PNG (transparent) or SVG** work best. For SVG, change the `.png` extension in
  `lib/content.js` to `.svg` for that partner.
- Tiles have a **white background**, so dark/colored logos display well. Aim for a
  reasonably wide aspect ratio; logos are capped at ~56px tall.
- Keep files trimmed of excess whitespace for consistent sizing.
