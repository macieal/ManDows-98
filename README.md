<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.5b--beta-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/status-WIP-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/team-SingularyStudios-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/genre-horror%20%7C%20puzzle-black?style=for-the-badge" />
</p>

<h1 align="center">🖥️ ManDows 98 <sup>[WIP]</sup></h1>

<p align="center">
  <img src="https://placehold.co/800x450/000000/00FF00?text=ManDows+98+%E2%80%94+Screenshot+Coming+Soon" alt="ManDows 98 screenshot" width="720" />
</p>

<p align="center">
  <em>An "operating system" that should never have been turned on.</em><br/>
  <sub>⚠️ This project is a <b>Work In Progress</b>. Things are incomplete, broken, or unfinished. That's the point (sort of).</sub>
</p>

<hr/>

<h2>💾 What is this?</h2>

<p><strong>ManDows 98</strong> is a short horror/puzzle game set inside a heavily modified parody of Windows 98.
You boot up, explore, solve puzzles, browse a (somewhat broken) internet, and try to survive an antivirus assistant that clearly has ulterior motives.</p>

<p>Think of it as a mix of OS-themed games with a weird little mascot that doesn't quite act like one.</p>

<blockquote>
  ⚠️ No real PC was harmed. The jumpscare is silent. Probably.<br/>
  🎃 Contains: light horror, puzzles, jumpscares (without sound), and existential dread from fake OS updates.<br/>
  🚧 <strong>This project is incomplete.</strong> If you find bugs, have ideas, or want to contribute, feel free to open an issue or reach out!
</blockquote>

<hr/>

<h2>🎮 How the gameplay works</h2>

<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>What happens</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1️⃣</td><td>You <strong>boot</strong> into ManDows 98 and access the start menu (options, credits, about the creator, etc.)</td></tr>
    <tr><td>2️⃣</td><td>You enter the desktop and open the <strong>BakExplorer</strong> browser</td></tr>
    <tr><td>3️⃣</td><td>You find and try to install <strong>Antivarios</strong> (a KinitoPet-style assistant)</td></tr>
    <tr><td>4️⃣</td><td>Error. You must find the password in <code>Documents > error.txt</code>, decode the binary using the terminal documentation found in BakExplorer, and unlock the app</td></tr>
    <tr><td>5️⃣</td><td>You open Antivarios → a <strong>mandatory ManDows update</strong> pops up</td></tr>
    <tr><td>6️⃣</td><td>You update, try again → <strong>another error</strong>. This time the solution is in the <strong>Minocroft Store</strong></td></tr>
    <tr><td>7️⃣</td><td>You download <strong>AppUnlocker</strong> and bypass what <em>FireInTheRoleSecurity</em> blocked</td></tr>
    <tr><td>8️⃣</td><td>You finally open Antivarios → a small walking mini-game → <strong>jumpscare</strong> → virus scan → a little game Antivarios made just for you</td></tr>
    <tr><td>9️⃣</td><td>THE END <em>(for now)</em> 👀</td></tr>
  </tbody>
</table>

<hr/>

<h2>📂 What's inside the game</h2>

<ul>
  <li><strong>BakExplorer</strong> — ManDows' browser / file manager</li>
  <li><strong>Antivarios</strong> — the "protagonist" assistant 🤖</li>
  <li><strong>Minocroft Store</strong> — the app store (pretty empty for now)</li>
  <li><strong>AppUnlocker</strong> — utility to bypass FireInTheRoleSecurity</li>
  <li><strong>Terminal</strong> — documentation accessible through BakExplorer</li>
</ul>

<hr/>

<h2>🛠️ Status & Version</h2>

<table>
  <tbody>
    <tr><th>Field</th><th>Info</th></tr>
    <tr><td><strong>Current version</strong></td><td><code>1.0.5b</code> <em>(b = beta)</em></td></tr>
    <tr><td><strong>Status</strong></td><td>Work In Progress (WIP)</td></tr>
    <tr><td><strong>Platform</strong></td><td><em>(add here: Windows / Web / etc.)</em></td></tr>
  </tbody>
</table>

<hr/>

<h2>🚀 Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li><a href="https://nodejs.org/" target="_blank">Node.js</a> (v16+ recommended)</li>
  <li>npm (comes bundled with Node.js)</li>
</ul>

<h3>Quick Start</h3>
<pre><code class="bash"># Clone the repository
git clone https://github.com/macieal/ManDows98.git

# Enter the project folder
cd ManDows98

# Install dependencies
npm install

# Run the game
npm start</code></pre>

<h3>Troubleshooting — Clean Install (Windows)</h3>
<p>If you run into weird dependency issues, broken packages, or just want a fresh start, delete <code>node_modules</code> and <code>package-lock.json</code>, then reinstall:</p>

<pre><code class="powershell"># Delete node_modules folder and package-lock.json
rmdir /s /q node_modules && del package-lock.json

# Reinstall everything from scratch
npm install</code></pre>

<blockquote>
  💡 <strong>Why?</strong> Sometimes <code>node_modules</code> gets corrupted or out of sync. Nuking it and reinstalling fixes 90% of "why is this broken" moments.
</blockquote>

<hr/>

<h2>👤 Credits</h2>

<table>
  <tbody>
    <tr><td><strong>Creator</strong></td><td>MP3</td></tr>
    <tr><td><strong>Team</strong></td><td>SingularyStudios</td></tr>
  </tbody>
</table>

<p>Made by one person, fueled by coffee and hatred for Windows Update.</p>

<hr/>

<h2>📝 Roadmap (light spoilers)</h2>

<ul>
  <li>[x] Boot menu</li>
  <li>[x] Functional BakExplorer</li>
  <li>[x] Binary / terminal puzzle</li>
  <li>[x] Minocroft Store</li>
  <li>[x] Antivarios (phase 1)</li>
  <li>[ ] More post-Antivarios content</li>
  <li>[ ] More apps in the Minocroft Store</li>
  <li>[ ] ???</li>
</ul>

<hr/>

<h2>🤝 Contributing</h2>

<p>This is a solo project, but I'm open to suggestions, bug reports, and help!</p>

<ul>
  <li>Found a bug? → <a href="../../issues">Open an Issue</a></li>
  <li>Have an idea? → <a href="../../discussions">Start a Discussion</a></li>
  <li>Want to help code? → Fork, branch, and open a Pull Request</li>
</ul>

<hr/>

<h2>📜 License</h2>

<p>This project is under the <strong>MIT</strong> license — feel free to look at the code, but don't blame Antivarios if it shows up on your desktop.</p>

<hr/>

<p align="center">
  <b>ManDows 98 [WIP]</b> © 2025 — SingularyStudios<br/>
  <sub>No mandatory updates were installed during the making of this README.</sub>
</p>

</body>
</html>